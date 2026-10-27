[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentCollectionStripeElements

Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount and currency used to initialize the payment form. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `digital_wallets` | Optional | Array of string | Digital wallets that the payment form can offer. |
| `mode` | Required | string | Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`. |
| `next_step` | Required | string | Browser collection operation to perform before calling submit_to. Values: `"collect_payment_source"`, `"collect_setup_payment_source"`, `"create_confirmation_token"`. |
| `payment_method_creation` | Required | string | Stripe Elements payment method creation mode. Follow next_step: standalone PaymentIntents and checkout-authenticated order collection create a ConfirmationToken, while merchant-authenticated order collection and setup collection create a PaymentMethod. Values: `"manual"`. |
| `payment_method_options` | Optional | object | Payment method settings passed to the payment form. |
| `payment_method_types` | Required | Array of string | Payment method types that the payment form can offer. |
| `selectable_payment_intents` | Optional | Array of [BuyerSelectableOrderPaymentIntent](../models/BuyerSelectableOrderPaymentIntent.md#buyerselectableorderpaymentintent) | Order payment intents that the buyer can select for collection. Items: A payment intent a buyer can pay on an order, with its status, amounts, payment collection details, and last payment error. |
| `submit_to` | Required | string | Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`. |

