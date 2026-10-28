[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutGiftCardChallenge







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `url` | Required | string |  |

### CheckoutGiftCardChallenge variant 1

anyOf variant 1: Declared schema CheckoutGiftCardChallenge. A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`..

- Constraints for `url`: Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. Format: `uri`.

### CheckoutGiftCardChallenge variant 2

anyOf variant 2: Declared schema PartnerAppCredentialJWKSURLRequest. A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential..

- Constraints for `url`: HTTPS URL with a DNS host, optional port 443, no userinfo or fragment, and an optional query. Flint API hosts and nonpublic destinations are rejected. The URL must serve a JSON Web Key Set with 1 to 10 supported public signing keys; unusable keys are ignored and don't count. minLength: `1`. maxLength: `2048`.

