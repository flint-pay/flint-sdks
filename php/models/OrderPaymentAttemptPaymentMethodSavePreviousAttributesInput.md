[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Optional | string or null | payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Values: `"payment_method_not_saveable"`, `"other"`. `reason`: [declared alternatives](../models/OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.md#orderpaymentattemptpaymentmethodsavepreviousattributesinputreason). |
| `status` | Optional | string or null | not_saved: the payment went ahead without saving the payment method. The values can grow. Values: `"not_saved"`. `status`: [declared alternatives](../models/OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.md#orderpaymentattemptpaymentmethodsavepreviousattributesinputstatus). |

### OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.reason

### OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.reason variant 1

anyOf variant 1: payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow..

- Value shape: string. payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Values: `"payment_method_not_saveable"`, `"other"`.

### OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. 

### OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.status

### OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.status variant 1

anyOf variant 1: not_saved: the payment went ahead without saving the payment method. The values can grow..

- Value shape: string. not_saved: the payment went ahead without saving the payment method. The values can grow. Values: `"not_saved"`.

### OrderPaymentAttemptPaymentMethodSavePreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. not_saved: the payment went ahead without saving the payment method. The values can grow. 

