[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodConsent

The wording and acceptance time recorded when the buyer agreed to save this card.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Required | string | When the buyer accepted the wording, recorded when the payment attempt or card setup started. Format: `date-time`. |
| `text` | Required | string | The wording the buyer agreed to when saving the card. |

