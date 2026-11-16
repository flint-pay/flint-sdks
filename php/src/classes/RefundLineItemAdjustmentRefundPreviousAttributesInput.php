<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $original_refund_line_item_adjustment_id
 * @property-read string|null $refund_line_item_adjustment_refund_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemAdjustmentRefundPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'original_refund_line_item_adjustment_id'?: string|null, 'refund_line_item_adjustment_refund_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustmentRefundPreviousAttributesInput')); }
    /** Amount refunded back against the adjustment. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the adjustment this amount was refunded against. anyOf[1] (Value): string. ID of the adjustment this amount was refunded against. Example: "rlia_01KEZF7C00GA968004EWM2QQBC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When original_refund_line_item_adjustment_id is omitted; use hasOriginalRefundLineItemAdjustmentId() or valueOrDefault().
     */
    public function getOriginalRefundLineItemAdjustmentId(): mixed { return $this->get('original_refund_line_item_adjustment_id'); }
    public function hasOriginalRefundLineItemAdjustmentId(): bool { return $this->has('original_refund_line_item_adjustment_id'); }
    /** Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. anyOf[1] (Value): string. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. Example: "rliar_01KEZF7C003HSYWXKXGJVRAKZD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_line_item_adjustment_refund_id is omitted; use hasRefundLineItemAdjustmentRefundId() or valueOrDefault().
     */
    public function getRefundLineItemAdjustmentRefundId(): mixed { return $this->get('refund_line_item_adjustment_refund_id'); }
    public function hasRefundLineItemAdjustmentRefundId(): bool { return $this->has('refund_line_item_adjustment_refund_id'); }
}
