import type { InputValue } from '../runtime.js';


export type DeveloperRevokePartnerEnvironmentGrantInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "partner_app_id": InputValue<string>; "partner_app_install_id": InputValue<string>; "environment_grant_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
