[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZone

A geographic area served by a delivery method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `created_at` | Required | string | Time the zone was created. Format: `date-time`. |
| `current_delivery_zone_revision_id` | Required | string | Immutable revision used for new quotes. |
| `delivery_zone_id` | Required | string | Stable delivery zone ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. |
| `name` | Required | string | Merchant-facing zone name. |
| `status` | Required | string | Current zone lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the zone last changed. Format: `date-time`. |
| `version` | Required | integer string | Optimistic-concurrency version for zone writes. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

