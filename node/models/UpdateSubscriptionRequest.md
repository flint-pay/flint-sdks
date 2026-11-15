[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionRequest

The request body for: Update subscription. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | New billing interval unit. Send it with `billing_interval_count`; the pair must be one the subscription's `billing_interval_options` offer. It applies from the next renewal that has not been paid, and it is refused while a plan change is scheduled. Not accepted as null. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Number of `billing_interval` units between charges, from 1 to 365. Send it with `billing_interval`. Not accepted as null. minimum: `1`. maximum: `365`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleUpdateRequest](../models/SubscriptionBillingScheduleUpdateRequest.md#subscriptionbillingscheduleupdaterequest) | Changes who supplies billing dates and, for a Flint-owned schedule, the next billing date. Send it alone: combining it with other subscription fields is refused. A closed owner-specific billing schedule update. |
| `cancel_at_period_end` | Optional | boolean | Send `false` to undo a scheduled cancellation. `true` isn't accepted: schedule a cancellation with POST /v1/subscriptions/{subscription_id}/cancel. Not accepted as null. Values: `false`. |
| `delivery` | Optional | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | Replaces the whole saved delivery preference. The delivery method must be one the subscription's plan offers. Not accepted as null. The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `end_after` | Optional | [SubscriptionEndAfterRequest](../models/SubscriptionEndAfterRequest.md#subscriptionendafterrequest) or null | Replace the complete automatic end condition, or send null to clear it. Requires expected_version. Buyers cannot change this field. |
| `expected_version` | Optional | integer | The current subscription version. Required when end_after is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientRequest](../models/SubscriptionGiftRecipientRequest.md#subscriptiongiftrecipientrequest) or null | Replace the whole gift recipient, or send null to clear it. There are no partial changes. Send expected_version to guard against concurrent changes. Buyers cannot change this field. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `payment_method_id` | Optional | string | ID of the saved payment method to charge for renewals. It must belong to the subscription's customer, be active, and allow charges without the buyer present. Not accepted as null. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `scheduled_plan_change` | Optional | null | Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it unchanged. Schedule or replace through change-plan. |
| `tax` | Optional | [SubscriptionTaxRequest](../models/SubscriptionTaxRequest.md#subscriptiontaxrequest) or null | Replace the subscription's tax as a whole, or send null to clear it, so its orders follow your settings again. Orders Flint creates after the change use it; an open renewal order keeps the tax it was created with. Buyers cannot change this field. |

