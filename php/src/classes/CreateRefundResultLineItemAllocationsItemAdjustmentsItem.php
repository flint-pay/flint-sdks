<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read CreateRefundResultLineItemAllocationsItemAdjustmentsItemAmountMoney $amount_money
 * @property-read string $applies_to
 * @property-read CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason $reason
 * @property-read string $refund_line_item_adjustment_id
 * @property-read CreateRefundResultLineItemAllocationsItemAdjustmentsItemRefundedMoney $refunded_money
 * @property-read CreateRefundResultLineItemAllocationsItemAdjustmentsItemRemainingMoney $remaining_money
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultLineItemAllocationsItemAdjustmentsItem extends Model {
    /** @param array{'adjustment_type': string, 'amount_money': mixed, 'applies_to': string, 'reason': mixed, 'refund_line_item_adjustment_id': string, 'refunded_money': mixed, 'remaining_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultLineItemAllocationsItemAdjustmentsItem')); }
    /** Shape $ (Value): string.  Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment".
     * @return string
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Shape $ (Value): {@see CreateRefundResultLineItemAllocationsItemAdjustmentsItemAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAdjustmentsItemAmountMoney
     */
    public function getAmountMoney(): CreateRefundResultLineItemAllocationsItemAdjustmentsItemAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string.  Value enum: "none", "gross", "tax".
     * @return string
     */
    public function getAppliesTo(): string { return $this->get('applies_to'); }
    public function hasAppliesTo(): bool { return $this->has('applies_to'); }
    /** Shape $ (Value): {@see CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason}. The reason recorded for a refund line item adjustment, as a `code` with an optional description.
     * @return CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason
     */
    public function getReason(): CreateRefundResultLineItemAllocationsItemAdjustmentsItemReason { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRefundLineItemAdjustmentId(): string { return $this->get('refund_line_item_adjustment_id'); }
    public function hasRefundLineItemAdjustmentId(): bool { return $this->has('refund_line_item_adjustment_id'); }
    /** Shape $ (Value): {@see CreateRefundResultLineItemAllocationsItemAdjustmentsItemRefundedMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAdjustmentsItemRefundedMoney
     */
    public function getRefundedMoney(): CreateRefundResultLineItemAllocationsItemAdjustmentsItemRefundedMoney { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see CreateRefundResultLineItemAllocationsItemAdjustmentsItemRemainingMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultLineItemAllocationsItemAdjustmentsItemRemainingMoney
     */
    public function getRemainingMoney(): CreateRefundResultLineItemAllocationsItemAdjustmentsItemRemainingMoney { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
}
