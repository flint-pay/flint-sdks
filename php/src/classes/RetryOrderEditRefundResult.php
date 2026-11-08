<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderEdit $order_edit
 * @property-read list<Refund> $refunds
 * Presence-aware response; omitted optional fields return null. */
final class RetryOrderEditRefundResult extends Model {
    /** @param array{'order_edit': mixed, 'refunds': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RetryOrderEditRefundResult')); }
    /** The edit with its current unrefunded money and supported actions. Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds.
     * @return OrderEdit
     */
    public function getOrderEdit(): OrderEdit { return $this->get('order_edit'); }
    public function hasOrderEdit(): bool { return $this->has('order_edit'); }
    /** Refunds created by this retry attempt. [] (Value): {@see Refund}. Money returned against a collected payment.
     * @return list<Refund>
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
}
