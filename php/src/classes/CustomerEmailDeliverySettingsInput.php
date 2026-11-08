<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $dunning
 * @property-read string $fulfillment_updates
 * @property-read string $invoices
 * @property-read string $order_receipts
 * @property-read string $returns
 * @property-read string $subscription_lifecycle
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerEmailDeliverySettingsInput extends Model {
    /** @param array{'dunning'?: string, 'fulfillment_updates'?: string, 'invoices'?: string, 'order_receipts'?: string, 'returns'?: string, 'subscription_lifecycle'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailDeliverySettingsInput')); }
    /** Who sends the buyer emails when a subscription becomes past due or a payment retry fails. When you send them, use the `subscription.past_due` and `subscription_payment_retry.failed` webhook events. Value enum: "flint_sends", "merchant_sends".
     * @return string
     * @throws SdkError When dunning is omitted; use hasDunning() or valueOrDefault().
     */
    public function getDunning(): string { return $this->get('dunning'); }
    public function hasDunning(): bool { return $this->has('dunning'); }
    /** Who sends the buyer updates when a fulfillment, shipment, or package changes. When you send them, use the `fulfillment.*`, `shipment.*`, and `package.*` webhook events. Value enum: "flint_sends", "merchant_sends".
     * @return string
     * @throws SdkError When fulfillment_updates is omitted; use hasFulfillmentUpdates() or valueOrDefault().
     */
    public function getFulfillmentUpdates(): string { return $this->get('fulfillment_updates'); }
    public function hasFulfillmentUpdates(): bool { return $this->has('fulfillment_updates'); }
    /** Who sends invoice emails, reminders, late fee notices, credit note emails, and failed bank debit notices for invoice payments. Explicit email issue and scheduling require flint_sends. When you send these emails, use invoice.*, invoice_delivery_attempt.*, and invoice_payment_attempt.* webhook events. Value enum: "flint_sends", "merchant_sends".
     * @return string
     * @throws SdkError When invoices is omitted; use hasInvoices() or valueOrDefault().
     */
    public function getInvoices(): string { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** Who sends payment and refund receipts for orders, invoices, and payments without an order, plus failed bank debit notices for orders. When you send them, use order.paid (or payment_intent.succeeded for payments without an order), refund.succeeded, and refund.partially_succeeded. For failed bank debits on orders, use payment_intent.payment_failed. Value enum: "flint_sends", "merchant_sends".
     * @return string
     * @throws SdkError When order_receipts is omitted; use hasOrderReceipts() or valueOrDefault().
     */
    public function getOrderReceipts(): string { return $this->get('order_receipts'); }
    public function hasOrderReceipts(): bool { return $this->has('order_receipts'); }
    /** Who sends the buyer emails as a return is created, decided, canceled, reopened, or completed. When you send them, use the `return.*` webhook events. Value enum: "flint_sends", "merchant_sends".
     * @return string
     * @throws SdkError When returns is omitted; use hasReturns() or valueOrDefault().
     */
    public function getReturns(): string { return $this->get('returns'); }
    public function hasReturns(): bool { return $this->has('returns'); }
    /** Who sends the buyer emails when a subscription is created, activated, paused, resumed, canceled, or changes plan, and for its trial ending and skipped cycles. When you send them, use the `subscription.*` webhook events. Value enum: "flint_sends", "merchant_sends".
     * @return string
     * @throws SdkError When subscription_lifecycle is omitted; use hasSubscriptionLifecycle() or valueOrDefault().
     */
    public function getSubscriptionLifecycle(): string { return $this->get('subscription_lifecycle'); }
    public function hasSubscriptionLifecycle(): bool { return $this->has('subscription_lifecycle'); }
}
