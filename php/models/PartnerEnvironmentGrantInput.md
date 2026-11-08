[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerEnvironmentGrantInput

A partner application's authorization to access an environment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `environment_grant_id` | Required | string | Example: `"egrt_01KEZF7C00MQQDDB7YWGXV3MXY"`. |
| `granted_permissions` | Required | Array of [PartnerAppPermissionManifestEntryInput](../models/PartnerAppPermissionManifestEntryInput.md#partnerapppermissionmanifestentryinput) | The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. |
| `granted_scopes` | Required | Array of string |  |
| `merchant_readiness` | Optional | [PartnerAppMerchantReadinessInput](../models/PartnerAppMerchantReadinessInput.md#partnerappmerchantreadinessinput) | The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string | ID of the install this grant belongs to. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `revoked_by_user_id` | Optional | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

