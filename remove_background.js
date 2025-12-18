const Jimp = require('jimp');
const path = require('path');

async function removeBackground() {
  const inputPath = path.join(process.cwd(), 'public/lion-logo.png');
  const outputPath = path.join(process.cwd(), 'public/lion-logo.png');

  try {
    const image = await Jimp.read(inputPath);

    // Scan the image to find the white background and make it transparent
    // We target nearly-white pixels to handle anti-aliasing
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // If the pixel is close to white, make it transparent
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.writeAsync(outputPath);
    console.log('Background removed successfully.');
  } catch (error) {
    console.error('Error processing image:', error);
    process.exit(1);
  }
}

removeBackground();
