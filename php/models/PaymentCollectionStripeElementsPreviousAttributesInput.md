[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentCollectionStripeElementsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount and currency used to initialize the payment form. |
| `digital_wallets` | Optional | Array of string or null | Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. `digital_wallets`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputdigital_wallets). |
| `mode` | Optional | string or null | Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`. `mode`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputmode). |
| `next_step` | Optional | string or null | Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`. `next_step`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputnext_step). |
| `payment_method_creation` | Optional | string or null | Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`. `payment_method_creation`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputpayment_method_creation). |
| `payment_method_options` | Optional | Alternative shapes (see declared variants) | Payment method settings passed to the payment form. `payment_method_options`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputpayment_method_options). |
| `payment_method_types` | Optional | Array of string or null | Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. `payment_method_types`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputpayment_method_types). |
| `payment_options` | Optional | Array of string or null | Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `payment_options`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputpayment_options). |
| `selectable_payment_intents` | Optional | Array of [SelectableOrderPaymentIntentPreviousAttributesInput](../models/SelectableOrderPaymentIntentPreviousAttributesInput.md#selectableorderpaymentintentpreviousattributesinput) or null | Order payment intents that the buyer can select for collection. `selectable_payment_intents`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputselectable_payment_intents). |
| `submit_to` | Optional | string or null | Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`. `submit_to`: [declared alternatives](../models/PaymentCollectionStripeElementsPreviousAttributesInput.md#paymentcollectionstripeelementspreviousattributesinputsubmit_to). |

### PaymentCollectionStripeElementsPreviousAttributesInput.digital_wallets

### PaymentCollectionStripeElementsPreviousAttributesInput.digital_wallets variant 1

anyOf variant 1: Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release..

- Value shape: Array of string. Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributesInput.digital_wallets variant 2

anyOf variant 2.

- Value shape: null. Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributesInput.mode

### PaymentCollectionStripeElementsPreviousAttributesInput.mode variant 1

anyOf variant 1: Whether Elements is collecting a payment source for an immediate payment or a setup source for future use..

- Value shape: string. Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. Values: `"payment"`, `"setup"`.

### PaymentCollectionStripeElementsPreviousAttributesInput.mode variant 2

anyOf variant 2.

- Value shape: null. Whether Elements is collecting a payment source for an immediate payment or a setup source for future use. 

### PaymentCollectionStripeElementsPreviousAttributesInput.next_step

### PaymentCollectionStripeElementsPreviousAttributesInput.next_step variant 1

anyOf variant 1: Browser collection operation to perform before calling submit_to..

- Value shape: string. Browser collection operation to perform before calling submit_to. Values: `"collect_setup_payment_source"`, `"create_confirmation_token"`.

### PaymentCollectionStripeElementsPreviousAttributesInput.next_step variant 2

anyOf variant 2.

- Value shape: null. Browser collection operation to perform before calling submit_to. 

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_creation

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_creation variant 1

anyOf variant 1: Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod..

- Value shape: string. Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. Values: `"manual"`.

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_creation variant 2

anyOf variant 2.

- Value shape: null. Stripe Elements payment method creation mode. Follow next_step: payment collection creates a ConfirmationToken, and setup collection creates a PaymentMethod. 

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_options

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_options variant 1

anyOf variant 1.

- Value shape: object. Payment method settings passed to the payment form. 

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_options variant 2

anyOf variant 2.

- Value shape: null. Payment method settings passed to the payment form. 

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_types

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_types variant 1

anyOf variant 1: Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release..

- Value shape: Array of string. Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_method_types variant 2

anyOf variant 2.

- Value shape: null. Deprecated: use payment_options. Processor payment method types that the payment form can offer. Removed in a later release. 

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_options

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_options variant 1

anyOf variant 1: Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed..

- Value shape: Array of string. Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### PaymentCollectionStripeElementsPreviousAttributesInput.payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options the payment form can offer, in display order. Skip values you don't recognize. Stripe Elements takes processor payment method types: pass card for card, apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the Payment Element's wallets option so it shows only the wallets listed. 

### PaymentCollectionStripeElementsPreviousAttributesInput.selectable_payment_intents

### PaymentCollectionStripeElementsPreviousAttributesInput.selectable_payment_intents variant 1

anyOf variant 1: Order payment intents that the buyer can select for collection..

- Value shape: Array of [SelectableOrderPaymentIntentPreviousAttributesInput](../models/SelectableOrderPaymentIntentPreviousAttributesInput.md#selectableorderpaymentintentpreviousattributesinput). Order payment intents that the buyer can select for collection. 

### PaymentCollectionStripeElementsPreviousAttributesInput.selectable_payment_intents variant 2

anyOf variant 2.

- Value shape: null. Order payment intents that the buyer can select for collection. 

### PaymentCollectionStripeElementsPreviousAttributesInput.submit_to

### PaymentCollectionStripeElementsPreviousAttributesInput.submit_to variant 1

anyOf variant 1: Flint operation that accepts the result of next_step..

- Value shape: string. Flint operation that accepts the result of next_step. Values: `"pay_order"`, `"confirm_payment_intent"`.

### PaymentCollectionStripeElementsPreviousAttributesInput.submit_to variant 2

anyOf variant 2.

- Value shape: null. Flint operation that accepts the result of next_step. 

