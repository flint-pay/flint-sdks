[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponseDataCreate

Resource, collection, or operation result returned by this request.

Validation and estimates for the first and recurring collections of a proposed subscription.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `errors` | Required | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Validation failures for the proposed subscription; [] when the inputs are valid and priceable. |
| `first_charge` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first Flint collection, priced as billing collects it: trial end without a setup fee, now for a setup fee (or the scheduled start), or imported-period end. With `prorate_first_period` and no setup fee, it's the prorated first period. `null` when validation prevents pricing. |
| `first_period_charge` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The prorated first period, when billing collects it as its own order after a setup fee in `first_charge`. `null` when no proration was requested, when the prorated period is already included in `first_charge`, when the first paid start is on the anchor day so there is no prorated period, or when validation prevents pricing. |
| `is_valid` | Required | boolean | Whether the inputs are valid and priceable. This does not mean the subscription is ready to pay. |
| `mode` | Required | string | The kind of subscription preview. Values: `"create"`. |
| `recurring` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first normal full-period collection, without setup fees. With `prorate_first_period`, it's cycle 2, billed at the end of the prorated period. `null` when validation prevents pricing. |

