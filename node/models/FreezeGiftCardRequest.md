[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FreezeGiftCardRequest

The merchant freeze reason and an optional version fence for the gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why the merchant is freezing spending. Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. |

