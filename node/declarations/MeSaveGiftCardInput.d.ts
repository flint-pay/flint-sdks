import type { InputValue } from '../runtime.js';
import type { SaveMeGiftCardRequestInput } from './SaveMeGiftCardRequestInput.js';

export type MeSaveGiftCardInput = { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<SaveMeGiftCardRequestInput>; };
