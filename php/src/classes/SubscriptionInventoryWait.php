<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_id
 * @property-read string $order_id
 * @property-read string $started_at
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionInventoryWait extends Model {
    /** @param array{'invoice_id': string, 'order_id': string, 'started_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionInventoryWait')); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
