[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripe

Stripe details for collecting payment in the browser: account ID, publishable key, return URL, and Elements options.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string | Stripe account to use when initializing the payment client. |
| `elements` | Optional | [PaymentCollectionStripeElements](../models/PaymentCollectionStripeElements.md#paymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. `elements`: [field definitions](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1). |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

### PaymentCollectionStripe.elements fields 1

Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount and currency used to initialize the payment form. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `digital_wallets` | Optional | Array of string | Digital wallets that the payment form can offer. |
| `mode` | Required | string | Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`. |
| `next_step` | Required | string | Browser collection operation to perform before calling submit_to. Values: `"collect_payment_source"`, `"collect_setup_payment_source"`, `"create_confirmation_token"`. |
| `payment_method_creation` | Required | string | Stripe Elements payment method creation mode. Follow next_step: standalone PaymentIntents and checkout-authenticated order collection create a ConfirmationToken, while merchant-authenticated order collection and setup collection create a PaymentMethod. Values: `"manual"`. |
| `payment_method_options` | Optional | object | Payment method settings passed to the payment form. |
| `payment_method_types` | Required | Array of string | Payment method types that the payment form can offer. |
| `selectable_payment_intents` | Optional | Array of [SelectableOrderPaymentIntent](../models/SelectableOrderPaymentIntent.md#selectableorderpaymentintent) | Order payment intents that the buyer can select for collection. Items: A payment intent on an order the caller can pick, with its amount, status, and last payment error. `selectable_payment_intents[]`: [field definitions](../models/PaymentCollectionStripe.md#paymentcollectionstripeelements-fields-1selectable_payment_intents). |
| `submit_to` | Required | string | Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`. |

### PaymentCollectionStripe.elements fields 1.selectable_payment_intents[]

A payment intent on an order the caller can pick, with its amount, status, and last payment error.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Most recent payment failure, when one is recorded. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/SelectableOrderPaymentIntent.md#selectableorderpaymentintentlast_payment_error). |
| `payment_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Client setup details for collecting this payment. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of this payment's amount allocated to a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### PaymentCollectionStripe.elements fields 1.selectable_payment_intents[].last_payment_error

Field definitions: [SelectableOrderPaymentIntent.last_payment_error](../models/SelectableOrderPaymentIntent.md#selectableorderpaymentintentlast_payment_error).

