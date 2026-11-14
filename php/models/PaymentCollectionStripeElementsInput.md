[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripeElementsInput

Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount and currency used to initialize the payment form. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `digital_wallets` | Optional | Array of string | Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. |
| `mode` | Required | string | Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`. |
| `next_step` | Required | string | Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`. |
| `payment_method_creation` | Required | string | Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`. |
| `payment_method_options` | Optional | object | Payment method settings passed to the payment form. |
| `payment_method_types` | Required | Array of string | Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. |
| `payment_options` | Required | Array of string | Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `selectable_payment_intents` | Optional | Array of [SelectableOrderPaymentIntentInput](../models/SelectableOrderPaymentIntentInput.md#selectableorderpaymentintentinput) | Order payment intents that the buyer can select for collection. Items: A payment intent on an order the caller can pick, with its amount, status, and last payment error. |
| `submit_to` | Required | string | Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`. |

