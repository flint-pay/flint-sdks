import type { InputValue } from '../runtime.js';


export type DeveloperListPartnerAppInstallsInput = { "X-Request-Id"?: InputValue<string>; "partner_app_id": InputValue<string>; /** minimum: 1. maximum: 100. */ "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
