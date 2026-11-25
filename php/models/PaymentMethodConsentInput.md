[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodConsentInput

The wording and acceptance time recorded when the buyer agreed to save this card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Required | string | When the buyer accepted the wording, recorded when the payment attempt or card setup started. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `text` | Required | string | The wording the buyer agreed to when saving the card. |

