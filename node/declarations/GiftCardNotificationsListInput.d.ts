import type { InputValue } from '../runtime.js';


export type GiftCardNotificationsListInput = { "X-Request-Id"?: InputValue<string>; /** Format: date-time. */ "created_after"?: InputValue<string | globalThis.Date>; /** Format: date-time. */ "created_before"?: InputValue<string | globalThis.Date>; /** maxLength: 255. */ "gift_card_id"?: InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** maxLength: 255. */ "status"?: InputValue<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
