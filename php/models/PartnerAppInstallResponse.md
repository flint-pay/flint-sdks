[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallResponse

A response containing `PartnerAppInstall` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall) | Resource, collection, or operation result returned by this request. A merchant's authorization of a partner application. `data`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PartnerAppInstallResponse.data

Resource, collection, or operation result returned by this request. A merchant's authorization of a partner application.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `environment_grants` | Optional | Array of [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) | `environment_grants[]`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants). |
| `installed_by_user_id` | Optional | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `partner_app_id` | Required | string | Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Required | string | Unique identifier for this partner app install, prefixed `pinst_`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `partner_app_name` | Required | string | The app’s current name. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `revoked_by` | Optional | string | Values: `"merchant"`, `"partner_app"`. |
| `revoked_by_user_id` | Optional | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### PartnerAppInstallResponse.data.environment_grants[]

A partner application's authorization to access an environment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `environment_grant_id` | Required | string | Example: `"egrt_01KEZF7C00MQQDDB7YWGXV3MXY"`. |
| `granted_permissions` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. `granted_permissions[]`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest). |
| `granted_scopes` | Required | Array of string |  |
| `merchant_readiness` | Optional | [PartnerAppMerchantReadiness](../models/PartnerAppMerchantReadiness.md#partnerappmerchantreadiness) | The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner. `merchant_readiness`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grantsmerchant_readiness). |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string | ID of the install this grant belongs to. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `revoked_by_user_id` | Optional | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### PartnerAppInstallResponse.data.environment_grants[].granted_permissions[]

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### PartnerAppInstallResponse.data.environment_grants[].merchant_readiness

The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocking_requirement_count` | Required | integer | How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. Format: `int64`. minimum: `0`. |
| `observed_at` | Required | string | When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payments` | Required | [PartnerAppMerchantReadinessAxis](../models/PartnerAppMerchantReadinessAxis.md#partnerappmerchantreadinessaxis) | Whether the merchant can take payments in this environment, with the `status` and `status_reason` of `readiness.payments` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`. |
| `payouts` | Required | [PartnerAppMerchantReadinessAxis](../models/PartnerAppMerchantReadinessAxis.md#partnerappmerchantreadinessaxis) | Whether the merchant can receive payouts in this environment, with the `status` and `status_reason` of `readiness.payouts` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`. |

### PartnerAppInstallResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

