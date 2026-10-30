[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionRequest

The request body for: Update subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | minimum: `1`. maximum: `365`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleUpdateRequest](../models/SubscriptionBillingScheduleUpdateRequest.md#subscriptionbillingscheduleupdaterequest) | A closed owner-specific billing schedule update. |
| `cancel_at_period_end` | Optional | boolean | Values: `false`. |
| `delivery` | Optional | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |

