import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !['en', 'es'].includes(locale)) {
    locale = 'en';
  }

  try {
    return {
      locale,
      messages: (await import(`../messages/${locale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    return {
      locale,
      messages: {}
    };
  }
});
