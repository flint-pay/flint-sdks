[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateGiftCardRequest

The request body for: Update a gift card. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | Omission preserves the association; null clears it. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omission preserves the association; null clears it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |

