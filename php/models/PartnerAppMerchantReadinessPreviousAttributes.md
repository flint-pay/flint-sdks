[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantReadinessPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocking_requirement_count` | Optional | integer or null | How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. `blocking_requirement_count`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmerchant_readiness-variant-1blocking_requirement_count). |
| `observed_at` | Optional | string or null | When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. `observed_at`: [declared alternatives](../models/PartnerAppMerchantReadinessPreviousAttributes.md#partnerappmerchantreadinesspreviousattributesobserved_at). |
| `payments` | Optional | [PartnerAppMerchantReadinessAxisPreviousAttributes](../models/PartnerAppMerchantReadinessAxisPreviousAttributes.md#partnerappmerchantreadinessaxispreviousattributes) or null | Whether the merchant can take payments in this environment, with the `status` and `status_reason` of `readiness.payments` on the merchant. |
| `payouts` | Optional | [PartnerAppMerchantReadinessAxisPreviousAttributes](../models/PartnerAppMerchantReadinessAxisPreviousAttributes.md#partnerappmerchantreadinessaxispreviousattributes) or null | Whether the merchant can receive payouts in this environment, with the `status` and `status_reason` of `readiness.payouts` on the merchant. |

### PartnerAppMerchantReadinessPreviousAttributes.blocking_requirement_count

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1.blocking_requirement_count](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmerchant_readiness-variant-1blocking_requirement_count).

### PartnerAppMerchantReadinessPreviousAttributes.observed_at

### PartnerAppMerchantReadinessPreviousAttributes.observed_at variant 1

anyOf variant 1: When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations..

- Value shape: string. When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. Format: `date-time`. 

### PartnerAppMerchantReadinessPreviousAttributes.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. 

