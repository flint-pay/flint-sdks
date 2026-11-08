[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundGiftCardCode

The code of a gift card issued by a refund, returned once in the refund result with its `gift_card_id`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Code that redeems the new gift card. Only the create response and a replay of it within 24 hours carry codes, so store it securely. |
| `gift_card_id` | Required | string | ID of the gift card the code belongs to. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

