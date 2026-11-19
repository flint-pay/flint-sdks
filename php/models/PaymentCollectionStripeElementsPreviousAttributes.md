[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripeElementsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount and currency used to initialize the payment form. |
| `digital_wallets` | Optional | Array of string or null | Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. `digital_wallets`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributesdigital_wallets). |
| `mode` | Optional | string or null | Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`. `mode`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributesmode). |
| `next_step` | Optional | string or null | Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`. `next_step`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributesnext_step). |
| `payment_method_creation` | Optional | string or null | Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`. `payment_method_creation`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributespayment_method_creation). |
| `payment_method_options` | Optional | Alternative shapes (see declared variants) | Payment method settings passed to the payment form. `payment_method_options`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributespayment_method_options). |
| `payment_method_types` | Optional | Array of string or null | Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. `payment_method_types`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributespayment_method_types). |
| `payment_options` | Optional | Array of string or null | Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `payment_options`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributespayment_options). |
| `selectable_payment_intents` | Optional | Array of [SelectableOrderPaymentIntentPreviousAttributes](../models/SelectableOrderPaymentIntentPreviousAttributes.md#selectableorderpaymentintentpreviousattributes) or null | Order payment intents that the buyer can select for collection. `selectable_payment_intents`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributesselectable_payment_intents). |
| `submit_to` | Optional | string or null | Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`. `submit_to`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributessubmit_to). |

### PaymentCollectionStripeElementsPreviousAttributes.digital_wallets

### PaymentCollectionStripeElementsPreviousAttributes.digital_wallets variant 1

anyOf variant 1: Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release..

- Value shape: Array of string. Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributes.digital_wallets variant 2

anyOf variant 2.

- Value shape: null. Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributes.mode

### PaymentCollectionStripeElementsPreviousAttributes.mode variant 1

anyOf variant 1: Whether Elements is collecting a payment source for an immediate payment or a setup source for future use..

- Value shape: string. Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`.

### PaymentCollectionStripeElementsPreviousAttributes.mode variant 2

anyOf variant 2.

- Value shape: null. Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. 

### PaymentCollectionStripeElementsPreviousAttributes.next_step

### PaymentCollectionStripeElementsPreviousAttributes.next_step variant 1

anyOf variant 1: Browser collection operation to perform before calling submit_to..

- Value shape: string. Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`.

### PaymentCollectionStripeElementsPreviousAttributes.next_step variant 2

anyOf variant 2.

- Value shape: null. Browser collection operation to perform before calling submit_to. 

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_creation

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_creation variant 1

anyOf variant 1: Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod..

- Value shape: string. Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`.

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_creation variant 2

anyOf variant 2.

- Value shape: null. Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. 

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_options

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_options variant 1

anyOf variant 1.

- Value shape: object. Payment method settings passed to the payment form. 

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_options variant 2

anyOf variant 2.

- Value shape: null. Payment method settings passed to the payment form. 

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_types

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_types variant 1

anyOf variant 1: Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release..

- Value shape: Array of string. Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributes.payment_method_types variant 2

anyOf variant 2.

- Value shape: null. Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributes.payment_options

### PaymentCollectionStripeElementsPreviousAttributes.payment_options variant 1

anyOf variant 1: Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed..

- Value shape: Array of string. Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### PaymentCollectionStripeElementsPreviousAttributes.payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. 

### PaymentCollectionStripeElementsPreviousAttributes.selectable_payment_intents

### PaymentCollectionStripeElementsPreviousAttributes.selectable_payment_intents variant 1

anyOf variant 1: Order payment intents that the buyer can select for collection..

- Value shape: Array of [SelectableOrderPaymentIntentPreviousAttributes](../models/SelectableOrderPaymentIntentPreviousAttributes.md#selectableorderpaymentintentpreviousattributes). Order payment intents that the buyer can select for collection. 

### PaymentCollectionStripeElementsPreviousAttributes.selectable_payment_intents variant 2

anyOf variant 2.

- Value shape: null. Order payment intents that the buyer can select for collection. 

### PaymentCollectionStripeElementsPreviousAttributes.selectable_payment_intents variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | Most recent payment failure, when one is recorded. `last_payment_error`: [declared alternatives](../models/SelectableOrderPaymentIntentPreviousAttributes.md#selectableorderpaymentintentpreviousattributeslast_payment_error). |
| `payment_collection` | Optional | [PaymentCollectionPreviousAttributes](../models/PaymentCollectionPreviousAttributes.md#paymentcollectionpreviousattributes) or null | Client setup details for collecting this payment. |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of this payment's amount allocated to a tip. |

### PaymentCollectionStripeElementsPreviousAttributes.selectable_payment_intents variant 1.[] fields 1.last_payment_error

Declared alternatives: [SelectableOrderPaymentIntentPreviousAttributes.last_payment_error](../models/SelectableOrderPaymentIntentPreviousAttributes.md#selectableorderpaymentintentpreviousattributeslast_payment_error).

### PaymentCollectionStripeElementsPreviousAttributes.selectable_payment_intents variant 1.[] fields 1.payment_intent_id

Declared alternatives: [WebhookSnapshotOrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id).

### PaymentCollectionStripeElementsPreviousAttributes.selectable_payment_intents variant 1.[] fields 1.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

### PaymentCollectionStripeElementsPreviousAttributes.submit_to

### PaymentCollectionStripeElementsPreviousAttributes.submit_to variant 1

anyOf variant 1: Flint operation that accepts the result of next_step..

- Value shape: string. Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`.

### PaymentCollectionStripeElementsPreviousAttributes.submit_to variant 2

anyOf variant 2.

- Value shape: null. Flint operation that accepts the result of next_step. 

