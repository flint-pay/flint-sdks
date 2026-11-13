[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmPaymentIntentRequestReaderInput

The `reader` variant of `ConfirmPaymentIntentRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_ip_address` | Optional | string | Not accepted for a payment presented on a reader. minLength: `1`. maxLength: `64`. Input only. |
| `client_action_type` | Optional | string | How to complete the authentication step. Flint's API returns a Stripe client secret only for client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. The Stripe secret can also confirm the payment with another card, so use it only with handleNextAction. Reader credentials do not support url; omit client_action_type or send stripe for reader payments. Defaults to stripe for a new confirmation; omission on a continuation keeps the existing type. Default: `"stripe"`. Values: `"url"`, `"stripe"`. |
| `credential_type` | Required | string | Selects payment collection on a reader. Values: `"reader"`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `payment_return_url` | Optional | string | Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. minLength: `1`. maxLength: `2048`. |
| `reader_id` | Required | string | Active reader in this merchant and environment. Requires payments.readers.write in addition to this operation’s scopes. minLength: `1`. pattern: `^rdr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `save_payment_method` | Optional | boolean | Send false or omit it. A card read on a reader isn't saved. Default: `false`. |
| `tip` | Optional | [ReaderPaymentSourceTipInput](../models/ReaderPaymentSourceTipInput.md#readerpaymentsourcetipinput) | Optional tip collection on a supported smart reader. Tip collection settings for a payment presented on a smart reader. |

