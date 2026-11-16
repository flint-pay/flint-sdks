<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $adjustment_type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $applies_to
 * @property-read RefundAdjustmentReasonPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $reason
 * @property-read string|null $refund_line_item_adjustment_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $remaining_money
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemAdjustmentPreviousAttributesInput extends Model {
    /** @param array{'adjustment_type'?: string|null, 'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'applies_to'?: string|null, 'reason'?: RefundAdjustmentReasonPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'refund_line_item_adjustment_id'?: string|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'remaining_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustmentPreviousAttributesInput')); }
    /** What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment". anyOf[1] (Value): string. What kind of adjustment this is. Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When adjustment_type is omitted; use hasAdjustmentType() or valueOrDefault().
     */
    public function getAdjustmentType(): mixed { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Amount withheld from the line's refund. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". anyOf[1] (Value): string. Which part of the line the adjustment reduces. Value enum: "none", "gross", "tax". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When applies_to is omitted; use hasAppliesTo() or valueOrDefault().
     */
    public function getAppliesTo(): mixed { return $this->get('applies_to'); }
    public function hasAppliesTo(): bool { return $this->has('applies_to'); }
    /** Why the amount was withheld. anyOf[1] (Value): {@see RefundAdjustmentReasonPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return RefundAdjustmentReasonPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Unique identifier for this refund line item adjustment, prefixed `rlia_`. anyOf[1] (Value): string. Unique identifier for this refund line item adjustment, prefixed `rlia_`. Example: "rlia_01KEZF7C00GA968004EWM2QQBC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_line_item_adjustment_id is omitted; use hasRefundLineItemAdjustmentId() or valueOrDefault().
     */
    public function getRefundLineItemAdjustmentId(): mixed { return $this->get('refund_line_item_adjustment_id'); }
    public function hasRefundLineItemAdjustmentId(): bool { return $this->has('refund_line_item_adjustment_id'); }
    /** Part of the withheld amount that later refunds have returned. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Part of the withheld amount that can still be refunded: `amount_money` less `refunded_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When remaining_money is omitted; use hasRemainingMoney() or valueOrDefault().
     */
    public function getRemainingMoney(): mixed { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
}
