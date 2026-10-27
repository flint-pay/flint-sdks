[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentRequestInput

The request body for: Void shipment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer string | Optional resource version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | Void event timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. |

