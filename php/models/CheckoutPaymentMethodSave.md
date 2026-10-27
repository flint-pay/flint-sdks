[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPaymentMethodSave

A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.

Response model.

Fields, types, descriptions and enum values: [CheckoutPaymentMethodSaveInput](../models/CheckoutPaymentMethodSaveInput.md#checkoutpaymentmethodsaveinput).

