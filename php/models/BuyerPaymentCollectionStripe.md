[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPaymentCollectionStripe

Stripe values for collecting payment on a buyer's order: the account ID, publishable key, return URL, and Elements settings.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. |
| `elements` | Optional | [BuyerPaymentCollectionStripeElements](../models/BuyerPaymentCollectionStripeElements.md#buyerpaymentcollectionstripeelements) | Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint. `elements`: [field definitions](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripeelements-fields-1). |
| `publishable_key` | Optional | string | Publishable Stripe key for initializing the payment client. |
| `return_url` | Optional | string | URL the buyer returns to after a redirect payment step. |

### BuyerPaymentCollectionStripe.elements fields 1

Stripe Elements configuration for the available payment methods and amounts. Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount and currency used to initialize the payment form. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `digital_wallets` | Optional | Array of string | Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. |
| `mode` | Required | string | Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`. |
| `next_step` | Required | string | Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`. |
| `payment_method_creation` | Required | string | Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`. |
| `payment_method_options` | Optional | object | Payment method settings passed to the payment form. |
| `payment_method_types` | Required | Array of string | Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. |
| `payment_options` | Required | Array of string | Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `selectable_payment_intents` | Optional | Array of [BuyerSelectableOrderPaymentIntent](../models/BuyerSelectableOrderPaymentIntent.md#buyerselectableorderpaymentintent) | Order payment intents that the buyer can select for collection. Items: A payment intent a buyer can pay on an order, with its status, amounts, payment collection details, and last payment error. `selectable_payment_intents[]`: [field definitions](../models/BuyerPaymentCollectionStripe.md#buyerpaymentcollectionstripeelements-fields-1selectable_payment_intents). |
| `submit_to` | Required | string | Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`. |

### BuyerPaymentCollectionStripe.elements fields 1.selectable_payment_intents[]

A payment intent a buyer can pay on an order, with its status, amounts, payment collection details, and last payment error.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `last_payment_error` | Optional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | Most recent payment failure, when one is recorded. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. `last_payment_error`: [field definitions](../models/BuyerSelectableOrderPaymentIntent.md#buyerselectableorderpaymentintentlast_payment_error). |
| `payment_collection` | Optional | [BuyerPaymentCollection](../models/BuyerPaymentCollection.md#buyerpaymentcollection) | Client setup details for collecting this payment. What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values. |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Portion of this payment's amount allocated to a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BuyerPaymentCollectionStripe.elements fields 1.selectable_payment_intents[].last_payment_error

Field definitions: [BuyerSelectableOrderPaymentIntent.last_payment_error](../models/BuyerSelectableOrderPaymentIntent.md#buyerselectableorderpaymentintentlast_payment_error).

