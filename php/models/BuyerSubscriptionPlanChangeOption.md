[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPlanChangeOption

A subscription plan this buyer may choose, with the store's billing timing and the target plan's summary.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The store's billing timing for this target: now collects a new period with unused-time credit; next_renewal changes the plan now and keeps the current paid period and next billing date; period_end keeps the current plan until the next charged renewal; prorated_now charges the difference for the rest of the current period and keeps the period and anchor. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `subscription_plan` | Required | [BuyerExpandedSubscriptionPlanSummary](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummary) | The target plan's current summary. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items. `subscription_plan`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_optionssubscription_plan). |
| `subscription_plan_id` | Required | string | The target subscription plan. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionPlanChangeOption.subscription_plan

Field definitions: [BuyerSubscriptionResponse.data.plan_change_options[].subscription_plan](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_optionssubscription_plan).

