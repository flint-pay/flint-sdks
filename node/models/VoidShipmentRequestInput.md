[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentRequestInput

Request input. Response: [VoidPackageRequest](../models/VoidPackageRequest.md#voidpackagerequest).

The request body for: Void shipment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Optional resource version last read by the caller. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | Void event timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. |

