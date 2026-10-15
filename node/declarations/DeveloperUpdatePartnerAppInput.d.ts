import type { InputValue } from '../runtime.js';
import type { UpdatePartnerAppRequestInput } from './UpdatePartnerAppRequestInput.js';

export type DeveloperUpdatePartnerAppInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "partner_app_id": InputValue<string>; "body": InputValue<UpdatePartnerAppRequestInput>; };
