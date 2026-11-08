[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailDeliverySettings







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dunning` | Optional | string | Who sends the buyer emails when a subscription becomes past due or a payment retry fails. When you send them, use the `subscription.past_due` and `subscription_payment_retry.failed` webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |
| `fulfillment_updates` | Optional | string | Who sends the buyer updates when a fulfillment, shipment, or package changes. When you send them, use the `fulfillment.*`, `shipment.*`, and `package.*` webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |
| `invoices` | Optional | string | Who sends invoice emails, reminders, late fee notices, credit note emails, and failed bank debit notices for invoice payments. Explicit email issue and scheduling require flint_sends. When you send these emails, use invoice.*, invoice_delivery_attempt.*, and invoice_payment_attempt.* webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |
| `order_receipts` | Optional | string | Who sends payment and refund receipts for orders, invoices, and payments without an order, plus failed bank debit notices for orders. When you send them, use order.paid (or payment_intent.succeeded for payments without an order), refund.succeeded, and refund.partially_succeeded. For failed bank debits on orders, use payment_intent.payment_failed. Values: `"flint_sends"`, `"merchant_sends"`. |
| `returns` | Optional | string | Who sends the buyer emails as a return is created, decided, canceled, reopened, or completed. When you send them, use the `return.*` webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |
| `subscription_lifecycle` | Optional | string | Who sends the buyer emails when a subscription is created, activated, paused, resumed, canceled, or changes plan, and for its trial ending and skipped cycles. When you send them, use the `subscription.*` webhook events. Values: `"flint_sends"`, `"merchant_sends"`. |

### CustomerEmailDeliverySettings variant 1

anyOf variant 1: Declared schema CustomerEmailDeliverySettings. For each kind of customer email, whether Flint sends it or the merchant sends it..

No additional constraints.

### CustomerEmailDeliverySettings variant 2

anyOf variant 2: Declared schema CustomerEmailDeliverySettingsRequest. For each kind of customer email, whether Flint sends it or the merchant sends it..

No additional constraints.

