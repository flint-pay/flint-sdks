<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInput|array<array-key, mixed>|\stdClass $order
 * @property-read OrderEditInput|array<array-key, mixed>|\stdClass $order_edit
 * @property-read list<RefundInput|array<array-key, mixed>|\stdClass> $refunds
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateOrderEditResultInput extends Model {
    /** @param array{'order': OrderInput|array<array-key, mixed>|\stdClass, 'order_edit': OrderEditInput|array<array-key, mixed>|\stdClass, 'refunds': list<RefundInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateOrderEditResultInput')); }
    /** The order after the edit. A customer's purchase and its payment and fulfillment progress.
     * @return OrderInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The committed edit, even when refund processing is pending. Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds.
     * @return OrderEditInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order_edit is omitted; use hasOrderEdit() or valueOrDefault().
     */
    public function getOrderEdit(): mixed { return $this->get('order_edit'); }
    public function hasOrderEdit(): bool { return $this->has('order_edit'); }
    /** Refunds created so far. Empty for zero-value edits or while refund processing has not created them yet; refund.created follows when a refund is created. [] (Value): {@see RefundInput}. Money returned against a collected payment.
     * @return list<RefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refunds is omitted; use hasRefunds() or valueOrDefault().
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
}
