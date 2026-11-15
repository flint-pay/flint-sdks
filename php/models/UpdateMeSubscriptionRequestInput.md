[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateMeSubscriptionRequestInput

The request body for: Update subscription.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | New billing interval unit. Send it with `billing_interval_count`; the pair must be one the subscription's `billing_interval_options` offer. It applies from the next renewal that has not been paid, and it is refused while a plan change is scheduled. Not accepted as null. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Number of `billing_interval` units between charges, from 1 to 365. Send it with `billing_interval`. Not accepted as null. minimum: `1`. maximum: `365`. |
| `cancel_at_period_end` | Optional | boolean | Send `false` to undo a scheduled cancellation. `true` isn't accepted: schedule a cancellation with POST /v1/me/subscriptions/{subscription_id}/cancel. Not accepted as null. Values: `false`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput) | Replaces the whole saved delivery preference. The delivery method must be one the subscription's plan offers. Not accepted as null. The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `payment_method_id` | Optional | string | ID of the saved payment method to charge for renewals. It must belong to the subscription's customer, be active, and allow charges without the buyer present. Not accepted as null. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `quantity` | Optional | integer | Legacy subscription multiplier. Only 1 is accepted. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `1`. |
| `scheduled_plan_change` | Optional | null | Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it unchanged. Schedule or replace through change-plan. |

