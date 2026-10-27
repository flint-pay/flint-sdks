<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItemAmountMoney $amount_money
 * @property-read string $original_refund_line_item_adjustment_id
 * @property-read string $refund_line_item_adjustment_refund_id
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItem extends Model {
    /** @param array{'amount_money': mixed, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItem')); }
    /** Shape $ (Value): {@see CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItemAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItemAmountMoney
     */
    public function getAmountMoney(): CreateRefundResultLineItemAllocationsItemAdjustmentRefundsItemAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOriginalRefundLineItemAdjustmentId(): string { return $this->get('original_refund_line_item_adjustment_id'); }
    public function hasOriginalRefundLineItemAdjustmentId(): bool { return $this->has('original_refund_line_item_adjustment_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRefundLineItemAdjustmentRefundId(): string { return $this->get('refund_line_item_adjustment_refund_id'); }
    public function hasRefundLineItemAdjustmentRefundId(): bool { return $this->has('refund_line_item_adjustment_refund_id'); }
}
