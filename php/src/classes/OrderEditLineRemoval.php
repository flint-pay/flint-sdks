<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * @property-read MoneyValue $refund_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditLineRemoval extends Model {
    /** @param array{'order_line_item_id': string, 'quantity': int, 'refund_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditLineRemoval')); }
    /** The original order line whose units were removed.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: int64. minimum: 1.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Refund for these units, including their original discount and tax shares, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundMoney(): MoneyValue { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
}
