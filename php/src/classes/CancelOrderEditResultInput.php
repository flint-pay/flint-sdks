<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read OrderEditInput|array<array-key, mixed>|\stdClass $order_edit
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelOrderEditResultInput extends Model {
    /** @param array{'order': OrderInput|array<array-key, mixed>|\stdClass, 'order_edit': OrderEditInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelOrderEditResultInput')); }
    /** The order after releasing the edit's holds. A customer's purchase and its payment and fulfillment progress.
     * @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The edit after cancellation. Nested child of an order with frozen item changes, balance and refund amounts. A pending edit changes the order only when its balance payment succeeds. Refund completion is tracked on the refunds.
     * @return OrderEditInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order_edit is omitted; use hasOrderEdit() or valueOrDefault().
     */
    public function getOrderEdit(): mixed { return $this->get('order_edit'); }
    public function hasOrderEdit(): bool { return $this->has('order_edit'); }
}
