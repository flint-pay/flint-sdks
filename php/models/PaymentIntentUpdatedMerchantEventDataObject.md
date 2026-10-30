[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentUpdatedMerchantEventDataObject

One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money always equals the sum of those three. Reconcile revenue from captured_money.

Response model.

Fields, types, descriptions and enum values: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

