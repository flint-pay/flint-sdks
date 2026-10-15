import type { InputValue } from '../runtime.js';
import type { EmailPreferenceLinkRequestInput } from './EmailPreferenceLinkRequestInput.js';

export type EmailPreferenceLinksLookupInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<EmailPreferenceLinkRequestInput>; };
