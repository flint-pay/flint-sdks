import type { InputValue } from '../runtime.js';


export type OauthAuthorizePartnerInstallInput = { "response_type": InputValue<"code">; "client_id": InputValue<string>; "redirect_uri": InputValue<string>; "mode": InputValue<"test" | "live">; "permission_ids"?: InputValue<string>; "environment_id"?: InputValue<string>; "merchant_id"?: InputValue<string>; "state": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
