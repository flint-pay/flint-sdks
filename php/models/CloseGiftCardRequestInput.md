[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CloseGiftCardRequestInput

An optional version fence for permanently closing the gift card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |

