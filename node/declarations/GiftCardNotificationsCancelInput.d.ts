import type { InputValue } from '../runtime.js';
import type { CancelGiftCardNotificationRequestInput } from './CancelGiftCardNotificationRequestInput.js';

export type GiftCardNotificationsCancelInput = { "X-Request-Id"?: InputValue<string>; "gift_card_notification_id": InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CancelGiftCardNotificationRequestInput>; };
