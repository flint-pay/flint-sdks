<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderEditInput|array<array-key, mixed>|\stdClass $order_edit
 * @property-read list<RefundInput|array<array-key, mixed>|\stdClass> $refunds
 * Presence-aware input; omitted fields throw when accessed. */
final class RetryOrderEditRefundResultInput extends Model {
    /** @param array{'order_edit': OrderEditInput|array<array-key, mixed>|\stdClass, 'refunds': list<RefundInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RetryOrderEditRefundResultInput')); }
    /** The edit with its current unrefunded money and supported actions. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds.
     * @return OrderEditInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order_edit is omitted; use hasOrderEdit() or valueOrDefault().
     */
    public function getOrderEdit(): mixed { return $this->get('order_edit'); }
    public function hasOrderEdit(): bool { return $this->has('order_edit'); }
    /** Refunds created by this retry attempt. [] (Value): {@see RefundInput}. Money returned against a collected payment.
     * @return list<RefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refunds is omitted; use hasRefunds() or valueOrDefault().
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
}
