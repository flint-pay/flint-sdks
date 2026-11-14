<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * @property-read MoneyValue $refund_money
 * @property-read int $removable_quantity
 * @property-read MoneyValue $total_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditRemoval extends Model {
    /** @param array{'order_line_item_id': string, 'quantity': int, 'refund_money': mixed, 'removable_quantity': int, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditRemoval')); }
    /** The order line the units come off.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units requested for removal, including all components of a bundle unit. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The part of total_money that would be refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundMoney(): MoneyValue { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units currently unassigned across every fulfillment component, before this requested removal. Format: int64.
     * @return int
     */
    public function getRemovableQuantity(): int { return $this->get('removable_quantity'); }
    public function hasRemovableQuantity(): bool { return $this->has('removable_quantity'); }
    /** The value of these units at the price the buyer paid, including their share of discounts and tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
