import type EnMessages from "../../messages/en.json";
import type HeMessages from "../../messages/he.json";

declare global {
  type LangMessage = typeof EnMessages | typeof HeMessages;
  type IntlMessages = typeof EnMessages & typeof HeMessages;
}
