<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Order $order
 * @property-read OrderEdit $order_edit
 * Presence-aware response; omitted optional fields return null. */
final class CancelOrderEditResult extends Model {
    /** @param array{'order': mixed, 'order_edit': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelOrderEditResult')); }
    /** The order after releasing the edit's holds. A customer's purchase and its payment and fulfillment progress.
     * @return Order
     */
    public function getOrder(): Order { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The edit after cancellation. Nested child of an order with frozen item changes, balance and refund amounts. A pending edit changes the order only when its balance payment succeeds. Refund completion is tracked on the refunds.
     * @return OrderEdit
     */
    public function getOrderEdit(): OrderEdit { return $this->get('order_edit'); }
    public function hasOrderEdit(): bool { return $this->has('order_edit'); }
}
