import type { InputValue } from '../runtime.js';


export type OauthPreviewPartnerInstallAuthorizationInput = { "client_id": InputValue<string>; "redirect_uri": InputValue<string>; "mode": InputValue<"test" | "live">; "permission_ids"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
