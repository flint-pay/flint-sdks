<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $invoice_id
 * @property-read ?string $order_id
 * @property-read string $started_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionInventoryWait extends Model {
    /** @param array{'invoice_id'?: string, 'order_id'?: string, 'started_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionInventoryWait')); }
    /** ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only.
     * @return ?string
     */
    public function getInvoiceId(): ?string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** ID of the order waiting for stock, if one was created. Merchant credentials only.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
