[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderRequestSetup

The `setup` variant of `PayOrderRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"setup"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequest](../models/CheckoutBuyerContactRequest.md#checkoutbuyercontactrequest) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. `buyer_contact`: [field definitions](../models/PayOrderRequest.md#payorderrequestbuyer_contact). |
| `client_action_type` | Optional | string | How to complete the authentication step. Flint's API returns a Stripe client secret only for client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. The Stripe secret can also confirm the payment with another card, so use it only with handleNextAction. Reader credentials do not support url; omit client_action_type or send stripe for reader payments. Defaults to stripe for a new confirmation; omission on a continuation keeps the existing type. Default: `"stripe"`. Values: `"url"`, `"stripe"`. |
| `expected_outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_outstanding_money`: [field definitions](../models/PayOrderRequest.md#payorderrequest-variant-1expected_outstanding_money). |
| `expected_version` | Optional | integer | Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Format: `int64`. minimum: `1`. |
| `payment_return_url` | Optional | string | Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. minLength: `1`. maxLength: `2048`. |
| `setup_payment_source` | Required | [PaymentSourceCredentialToken](../models/PaymentSourceCredentialToken.md#paymentsourcecredentialtoken) | The `token` variant of `PaymentSourceCredential`. |

### PayOrderRequestSetup.buyer_contact

Field definitions: [PayOrderRequest.buyer_contact](../models/PayOrderRequest.md#payorderrequestbuyer_contact).

### PayOrderRequestSetup.expected_outstanding_money

Field definitions: [PayOrderRequest variant 1.expected_outstanding_money](../models/PayOrderRequest.md#payorderrequest-variant-1expected_outstanding_money).

