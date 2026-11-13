[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerEnvironmentGrant

A partner application's authorization to access an environment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `environment_grant_id` | Required | string |  |
| `granted_permissions` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. `granted_permissions[]`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest). |
| `granted_scopes` | Required | Array of string |  |
| `merchant_readiness` | Optional | [PartnerAppMerchantReadiness](../models/PartnerAppMerchantReadiness.md#partnerappmerchantreadiness) | The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner. `merchant_readiness`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grantsmerchant_readiness). |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string | ID of the install this grant belongs to. |
| `payment_splits` | Optional | [PartnerEnvironmentGrantPaymentSplits](../models/PartnerEnvironmentGrantPaymentSplits.md#partnerenvironmentgrantpaymentsplits) | The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. The merchant's approval to receive split funds from the app in this grant's mode. `payment_splits`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grantspayment_splits). |
| `platform_fee_cap` | Optional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) | The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. No request accepts a platform fee yet. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `revoked_by_user_id` | Optional | string |  |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### PartnerEnvironmentGrant.granted_permissions[]

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### PartnerEnvironmentGrant.merchant_readiness

Field definitions: [PartnerAppInstallResponse.data.environment_grants[].merchant_readiness](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grantsmerchant_readiness).

### PartnerEnvironmentGrant.payment_splits

Field definitions: [PartnerAppInstallResponse.data.environment_grants[].payment_splits](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grantspayment_splits).

