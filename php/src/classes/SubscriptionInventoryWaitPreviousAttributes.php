<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $invoice_id
 * @property-read string|null $order_id
 * @property-read string|null $started_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionInventoryWaitPreviousAttributes extends Model {
    /** @param array{'invoice_id'?: mixed, 'order_id'?: mixed, 'started_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionInventoryWaitPreviousAttributes')); }
    /** ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. anyOf[1] (Value): string. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** ID of the order waiting for stock, if one was created. Merchant credentials only. anyOf[1] (Value): string. ID of the order waiting for stock, if one was created. Merchant credentials only. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartedAt(): string|null { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
