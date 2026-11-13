[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupWithAuthorizationCodes

A completed merchant signup with the authorization codes to exchange for its grants' tokens.

A platform's request to create a merchant for an owner, who confirms it with a code Flint emails them. Once verified, it is the record of the owner's consent, kept for as long as the merchant exists.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `business_name` | Optional | string | The new merchant's display name until onboarding sets its legal name. Absent when the request didn't send one: Flint then names the merchant from the owner's email. |
| `canceled_at` | Optional | string | When the signup was canceled. Format: `date-time`. |
| `code_expires_at` | Optional | string | When the current code expires, present while the signup is `pending` and its code still works. Format: `date-time`. |
| `completed_at` | Optional | string | When the signup completed. Format: `date-time`. |
| `created_at` | Required | string | When the signup was created. Format: `date-time`. |
| `expires_at` | Required | string | When a `pending` signup expires: 24 hours after it was created. A signup Flint is completing never expires. Format: `date-time`. |
| `external_reference_id` | Optional | string | Your identifier for this business, as you sent it. Absent when you didn't send one. maxLength: `255`. |
| `merchant_id` | Optional | string | The merchant the signup created, present once it is `completed`. |
| `merchant_signup_id` | Required | string | Unique identifier for the merchant signup. |
| `merchant_terms` | Required | [MerchantSignupTerms](../models/MerchantSignupTerms.md#merchantsignupterms) | Flint's merchant terms the owner must accept. Flint's merchant terms the owner accepts by entering the code, fixed when the signup was created. |
| `modes` | Required | Array of string | The modes the signup installs the app in, one environment grant each, `test` first. Items values: `"test"`, `"live"`. |
| `owner` | Required | [MerchantSignupOwner](../models/MerchantSignupOwner.md#merchantsignupowner) | The owner the code went to. The person who will own the new merchant, as the platform supplied them. |
| `partner_app_id` | Required | string | The partner app the signup installs on the new merchant. |
| `partner_app_install_id` | Optional | string | The install the signup created, present once it is `completed`. Its `merchant_signup_id` names this signup. |
| `platform_fee_cap` | Optional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) | The app's platform fee cap the code email showed, frozen at create. Absent when the app has none. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. |
| `requested_permissions` | Required | Array of [MerchantSignupPermission](../models/MerchantSignupPermission.md#merchantsignuppermission) | The permissions the code email asked the owner to approve, frozen at create: the requested ones, or the app's defaults, plus every required permission, in manifest order. At verify, each grant gets them narrowed to what the app's manifest still offers. `requested_permissions[]`: [field definitions](../models/MerchantSignupResponse.md#merchantsignupresponsedatarequested_permissions). |
| `sandbox_initial_onboarding` | Required | string | The onboarding state of the new merchant's default sandbox, which the test grant points at. Values: `"complete"`, `"not_started"`. |
| `status` | Required | string | Where the signup is. `completed`, `expired` and `canceled` are final. `expired` follows from `expires_at`, so it doesn't advance `version`. Values: `"pending"`, `"completed"`, `"expired"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now: `verify` and `cancel` while `pending`, only `verify` while Flint is completing it after verify, `[]` otherwise. resend-code and rotate-authorization-codes are operations, not lifecycle actions, so they are never listed. Items values: `"cancel"`, `"verify"`. |
| `terms_acceptance` | Optional | [MerchantSignupTermsAcceptance](../models/MerchantSignupTermsAcceptance.md#merchantsignuptermsacceptance) | The owner's acceptance, present once the signup is `completed`. The owner's acceptance of Flint's merchant terms, recorded at verify. Flint also stores the IP address and user agent you reported; they aren't returned. `terms_acceptance`: [field definitions](../models/MerchantSignupResponse.md#merchantsignupresponsedataterms_acceptance). |
| `updated_at` | Required | string | When the signup last changed. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
| `authorization_codes_expire_at` | Optional | string | When the codes in this response expire, 5 minutes after they were minted. Present with them. Format: `date-time`. |
| `live_authorization_code` | Optional | string | Exchange it at POST /v1/oauth/token for the live grant's tokens, with the code_verifier for the signup's code_challenge and without redirect_uri. Present when the signup installed in live mode and the code was minted by this request. Single use. An idempotent replay withholds it: mint new codes with rotate-authorization-codes. |
| `test_authorization_code` | Optional | string | Exchange it at POST /v1/oauth/token for the test grant's tokens, with the code_verifier for the signup's code_challenge and without redirect_uri. Present when the signup installed in test mode and the code was minted by this request. Single use. An idempotent replay withholds it: mint new codes with rotate-authorization-codes. |

### MerchantSignupWithAuthorizationCodes.requested_permissions[]

Field definitions: [MerchantSignupResponse.data.requested_permissions[]](../models/MerchantSignupResponse.md#merchantsignupresponsedatarequested_permissions).

### MerchantSignupWithAuthorizationCodes.terms_acceptance

Field definitions: [MerchantSignupResponse.data.terms_acceptance](../models/MerchantSignupResponse.md#merchantsignupresponsedataterms_acceptance).

