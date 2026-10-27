[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SinglePackageCreateRequest

The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | minLength: `1`. |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `label_url` | Optional | string | Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. minLength: `1`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `service_code` | Optional | string | minLength: `1`. |
| `shipped_at` | Optional | string | Package handoff time. Defaults to request time. Only allowed with status shipped. Format: `date-time`. minLength: `1`. |
| `status` | Required | string | Values: `"created"`, `"shipped"`. |
| `status_reason` | Optional | string | minLength: `1`. |
| `tracking_number` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `weight` | Optional | [Weight](../models/Weight.md#weight) | A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

### SinglePackageCreateRequest variant 1: `status` = `"created"`

oneOf variant 1: The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted..

- Condition: not (present(`shipped_at`)).
- Condition: not (present(`buyer_notification_behavior`)).
- Constraints for `status`: Values: `"created"`.

### SinglePackageCreateRequest variant 2: `status` = `"shipped"`

oneOf variant 2: The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted..

- Condition: not (present(`return_line_items`)).
- Constraints for `status`: Values: `"shipped"`.

