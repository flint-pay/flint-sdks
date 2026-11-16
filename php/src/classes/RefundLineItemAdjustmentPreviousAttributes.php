<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $adjustment_type
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $applies_to
 * @property-read RefundAdjustmentReasonPreviousAttributes|null $reason
 * @property-read string|null $refund_line_item_adjustment_id
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read MoneyValuePreviousAttributes|null $remaining_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundLineItemAdjustmentPreviousAttributes extends Model {
    /** @param array{'adjustment_type'?: mixed, 'amount_money'?: mixed, 'applies_to'?: mixed, 'reason'?: mixed, 'refund_line_item_adjustment_id'?: mixed, 'refunded_money'?: mixed, 'remaining_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustmentPreviousAttributes')); }
    /** What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment". anyOf[1] (Value): string. What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAdjustmentType(): string|null { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Amount withheld from the line's refund. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". anyOf[1] (Value): string. Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAppliesTo(): string|null { return $this->get('applies_to'); }
    public function hasAppliesTo(): bool { return $this->has('applies_to'); }
    /** Why the amount was withheld. anyOf[1] (Value): {@see RefundAdjustmentReasonPreviousAttributes}. anyOf[2] (Value): null.
     * @return RefundAdjustmentReasonPreviousAttributes|null
     */
    public function getReason(): RefundAdjustmentReasonPreviousAttributes|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Unique identifier for this refund line item adjustment, prefixed `rlia_`. anyOf[1] (Value): string. Unique identifier for this refund line item adjustment, prefixed `rlia_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundLineItemAdjustmentId(): string|null { return $this->get('refund_line_item_adjustment_id'); }
    public function hasRefundLineItemAdjustmentId(): bool { return $this->has('refund_line_item_adjustment_id'); }
    /** Part of the withheld amount that later refunds have returned. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRemainingMoney(): MoneyValuePreviousAttributes|null { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
}
