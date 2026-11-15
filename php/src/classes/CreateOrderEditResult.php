<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order $order
 * @property-read OrderEdit $order_edit
 * @property-read list<Refund> $refunds
 * Presence-aware response; omitted optional fields return null. */
final class CreateOrderEditResult extends Model {
    /** @param array{'order': mixed, 'order_edit': mixed, 'refunds': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateOrderEditResult')); }
    /** The order after the edit. A customer's purchase and its payment and fulfillment progress.
     * @return Order
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The committed edit, even when refund processing is pending. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds.
     * @return OrderEdit
     */
    public function getOrderEdit(): OrderEdit { return $this->get('order_edit'); }
    public function hasOrderEdit(): bool { return $this->has('order_edit'); }
    /** Refunds created so far. Empty for zero-value edits or while refund processing has not created them yet; refund.created follows when a refund is created. [] (Value): {@see Refund}. Money returned against a collected payment.
     * @return list<Refund>
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
}
