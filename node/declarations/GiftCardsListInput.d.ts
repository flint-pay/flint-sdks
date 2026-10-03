import type { InputValue } from '../runtime.js';


export type GiftCardsListInput = { "X-Request-Id"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "external_reference_id"?: InputValue<string>; /** Format: date-time. */ "from_at"?: InputValue<string | globalThis.Date>; /** maxLength: 255. */ "gift_card_id"?: InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** maxLength: 255. */ "status"?: InputValue<"active" | "closed" | "frozen" | "pending">; /** Format: date-time. */ "until_at"?: InputValue<string | globalThis.Date>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
