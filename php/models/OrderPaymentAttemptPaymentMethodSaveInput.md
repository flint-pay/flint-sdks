[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentAttemptPaymentMethodSaveInput

What became of the buyer's save_payment_method. The payment does not depend on it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string | payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. Values: `"payment_method_not_saveable"`, `"other"`. |
| `status` | Required | string | not_saved: the payment went ahead without saving the payment method. The values can grow. Values: `"not_saved"`. |

