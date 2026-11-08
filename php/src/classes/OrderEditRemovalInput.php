<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refund_money
 * @property-read int $removable_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderEditRemovalInput extends Model {
    /** @param array{'order_line_item_id': string, 'quantity': int, 'refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'removable_quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditRemovalInput')); }
    /** The order line the units come off. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units requested for removal, including all components of a bundle unit. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The refund for these units at the price the buyer paid, including their share of discounts and tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund_money is omitted; use hasRefundMoney() or valueOrDefault().
     */
    public function getRefundMoney(): mixed { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units currently unassigned across every fulfillment component, before this requested removal. Format: int64.
     * @return int
     * @throws SdkError When removable_quantity is omitted; use hasRemovableQuantity() or valueOrDefault().
     */
    public function getRemovableQuantity(): int { return $this->get('removable_quantity'); }
    public function hasRemovableQuantity(): bool { return $this->has('removable_quantity'); }
}
