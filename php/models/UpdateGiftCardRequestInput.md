[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateGiftCardRequestInput

The request body for: Update a gift card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | Omission preserves the association; null clears it. minLength: `1`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omission preserves the association; null clears it. minLength: `1`. maxLength: `255`. |

