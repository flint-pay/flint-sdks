[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantReadinessAxisPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | string or null | Whether this area works now, with the same value as on the merchant's `readiness`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/PartnerAppMerchantReadinessAxisPreviousAttributes.md#partnerappmerchantreadinessaxispreviousattributesstatus). |
| `status_reason` | Optional | string or null | Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. Values: [19 declared values](CapabilityReadiness.md#capabilityreadiness-status_reason-values). `status_reason`: [declared alternatives](../models/PartnerAppMerchantReadinessAxisPreviousAttributes.md#partnerappmerchantreadinessaxispreviousattributesstatus_reason). |

### PartnerAppMerchantReadinessAxisPreviousAttributes.status

### PartnerAppMerchantReadinessAxisPreviousAttributes.status variant 1

anyOf variant 1: Whether this area works now, with the same value as on the merchant's `readiness`..

- Value shape: string. Whether this area works now, with the same value as on the merchant's `readiness`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`.

### PartnerAppMerchantReadinessAxisPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether this area works now, with the same value as on the merchant's `readiness`. 

### PartnerAppMerchantReadinessAxisPreviousAttributes.status_reason

### PartnerAppMerchantReadinessAxisPreviousAttributes.status_reason variant 1

anyOf variant 1: Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`..

- Value shape: string. Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. Values: `"provisioning"`, `"onboarding_not_started"`, `"requirements_due"`, `"requirements_past_due"`, `"pending_verification"`, `"account_rejected"`, `"disabled_by_platform_policy"`, `"billing_suspended"`, `"platform_review"`, `"processing_not_enabled"`, `"platform_funding_unavailable"`, `"tax_category_required"`, `"service_unavailable"`, `"payment_option_access_not_provisioned"`, `"payment_option_activation_pending"`, `"payment_option_not_in_plan"`, `"payment_option_not_available"`, `"capability_not_active"`, `"other"`.

### PartnerAppMerchantReadinessAxisPreviousAttributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. 

