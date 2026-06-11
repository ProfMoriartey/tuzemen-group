import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Define a generic shape for your JSON translation files
type Messages = Record<string, string | Record<string, string>>;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Cast the dynamic import to the defined type
  const localeMessages = (await import(`../../messages/${locale}.json`)) as {
    default: Messages;
  };

  return {
    locale,
    messages: localeMessages.default,
  };
});