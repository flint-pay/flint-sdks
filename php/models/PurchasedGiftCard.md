[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PurchasedGiftCard

A gift card issued for one unit of a purchased order line item, with its last four code characters and any card it replaced.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | ID of the gift card issued for the purchased unit. |
| `last4` | Required | string | Last four characters of the card's current code. |
| `original_gift_card_id` | Optional | string | ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. |
| `restoration_reason` | Optional | string | What restored the reversed value onto a replacement card. Values: `"manual_recollection"`, `"processor_recollection"`. |
| `unit_ordinal` | Required | integer | Which unit of the line item's quantity this card was issued for, starting at 1. Format: `int64`. minimum: `1`. |

