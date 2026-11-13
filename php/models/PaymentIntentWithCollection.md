[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentWithCollection

One payment from a buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the payment is authorized, authorized_money equals amount_money (on a payment intent canceled with cancellation_reason payment_returned, the authorization Flint released) and splits into captured_money (collected), capturable_money (still on hold), and released_money (returned without being charged), so authorized_money equals the sum of those three whenever the capture is at most the authorization. An overcapture (see request_overcapture) has capturable_money and released_money zero and captured_money above authorized_money. Reconcile revenue from captured_money.

Response model.

Fields, types, descriptions and enum values: [OrdersCreatePaymentIntentResponseData](../models/OrdersCreatePaymentIntentResponseData.md#orderscreatepaymentintentresponsedata).

