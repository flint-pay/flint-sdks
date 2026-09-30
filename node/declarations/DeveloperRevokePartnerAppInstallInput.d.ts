import type { InputValue } from '../runtime.js';


export type DeveloperRevokePartnerAppInstallInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "partner_app_id": InputValue<string>; "partner_app_install_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
