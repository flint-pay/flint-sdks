[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryHoldInput

A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Required | string | When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fixable_by` | Required | string | Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Values: `"buyer"`, `"merchant"`. |
| `reason` | Required | string | Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `started_at` | Required | string | When Flint held the renewal. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

