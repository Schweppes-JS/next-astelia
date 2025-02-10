import type EnMessages from "../../messages/en.json";
import type HeMessages from "../../messages/he.json";

type Messages = typeof EnMessages & typeof HeMessages;

declare global {
  type IntlMessages = Messages;
}
