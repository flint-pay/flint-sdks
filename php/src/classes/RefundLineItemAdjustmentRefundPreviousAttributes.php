<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $amount_money
 * @property-read string|null $original_refund_line_item_adjustment_id
 * @property-read string|null $refund_line_item_adjustment_refund_id
 * Presence-aware response; omitted optional fields return null. */
final class RefundLineItemAdjustmentRefundPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'original_refund_line_item_adjustment_id'?: mixed, 'refund_line_item_adjustment_refund_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustmentRefundPreviousAttributes')); }
    /** Amount refunded back against the adjustment. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the adjustment this amount was refunded against. anyOf[1] (Value): string. ID of the adjustment this amount was refunded against. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginalRefundLineItemAdjustmentId(): string|null { return $this->get('original_refund_line_item_adjustment_id'); }
    public function hasOriginalRefundLineItemAdjustmentId(): bool { return $this->has('original_refund_line_item_adjustment_id'); }
    /** Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. anyOf[1] (Value): string. Unique identifier for this refund line item adjustment refund, prefixed `rliar_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundLineItemAdjustmentRefundId(): string|null { return $this->get('refund_line_item_adjustment_refund_id'); }
    public function hasRefundLineItemAdjustmentRefundId(): bool { return $this->has('refund_line_item_adjustment_refund_id'); }
}
