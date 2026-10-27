[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutGiftCardChallenge

A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `url` | Required | string | Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. Format: `uri`. |

