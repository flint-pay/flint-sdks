<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * @property-read MoneyValue $total_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditLineAddition extends Model {
    /** @param array{'order_line_item_id': string, 'quantity': int, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditLineAddition')); }
    /** The order line created by this edit.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity added; fractional quantities are not supported. Format: int64. minimum: 1.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The cost of these added units, including additive tax, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
