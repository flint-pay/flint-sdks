[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantReadiness

An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocking_requirement_count` | Required | integer | How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. Format: `int64`. minimum: `0`. |
| `observed_at` | Required | string | When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payments` | Required | [PartnerAppMerchantReadinessAxis](../models/PartnerAppMerchantReadinessAxis.md#partnerappmerchantreadinessaxis) | Whether the merchant can take payments in this environment, with the `status` and `status_reason` of `readiness.payments` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`. |
| `payouts` | Required | [PartnerAppMerchantReadinessAxis](../models/PartnerAppMerchantReadinessAxis.md#partnerappmerchantreadinessaxis) | Whether the merchant can receive payouts in this environment, with the `status` and `status_reason` of `readiness.payouts` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`. |

