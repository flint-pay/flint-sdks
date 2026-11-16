<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_line_item_id
 * @property-read int|null $quantity
 * @property-read mixed $refund_money
 * @property-read mixed $total_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditLineRemovalPreviousAttributes extends Model {
    /** @param array{'order_line_item_id'?: mixed, 'quantity'?: mixed, 'refund_money'?: mixed, 'total_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditLineRemovalPreviousAttributes')); }
    /** The original order line whose units were removed. anyOf[1] (Value): string. The original order line whose units were removed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The part of total_money refunded to the buyer, frozen when the edit was created. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundMoney(): mixed { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** The value of these units, including their original discount and tax shares, frozen when the edit was created. The order no longer owes it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
