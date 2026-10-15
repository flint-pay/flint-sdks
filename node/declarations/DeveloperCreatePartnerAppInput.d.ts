import type { InputValue } from '../runtime.js';
import type { CreatePartnerAppRequestInput } from './CreatePartnerAppRequestInput.js';

export type DeveloperCreatePartnerAppInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreatePartnerAppRequestInput>; };
