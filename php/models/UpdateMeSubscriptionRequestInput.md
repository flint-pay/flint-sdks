[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateMeSubscriptionRequestInput

The request body for: Update subscription.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | minimum: `1`. maximum: `365`. |
| `cancel_at_period_end` | Optional | boolean | Values: `false`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `payment_method_id` | Optional | string | minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `quantity` | Optional | integer | Legacy subscription multiplier. Only 1 is accepted. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `1`. |
| `scheduled_plan_change` | Optional | null | Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it unchanged. Schedule or replace through change-plan. |

