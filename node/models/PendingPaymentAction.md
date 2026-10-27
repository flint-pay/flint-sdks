[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentAction

Client-side action required before continuing a payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint without a replacement credential.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. Values: `"payment_authentication"`, `"payment_method_authentication"`. |
| `client_action` | Required | [PaymentClientAction](../models/PaymentClientAction.md#paymentclientaction) | Direct browser authority required to finish this action before continuing through Flint. Unlike collection guidance, this payload includes a client secret. Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint. |
| `pending_action_id` | Required | string | Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. |
| `subject` | Required | [PendingPaymentActionSubject](../models/PendingPaymentActionSubject.md#pendingpaymentactionsubject) | The attempt subject that requires browser action. Exactly one of payment_intent or setup_payment_source is present. Typed subject for a pending order payment action. Exactly one subject is present. |

