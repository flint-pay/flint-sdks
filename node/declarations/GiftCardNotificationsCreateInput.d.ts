import type { InputValue } from '../runtime.js';
import type { CreateGiftCardNotificationRequestInput } from './CreateGiftCardNotificationRequestInput.js';

export type GiftCardNotificationsCreateInput = { "X-Request-Id"?: InputValue<string>; /** minLength: 1. maxLength: 255. */ "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateGiftCardNotificationRequestInput>; };
