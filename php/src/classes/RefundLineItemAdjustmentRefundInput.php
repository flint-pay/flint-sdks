<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $original_refund_line_item_adjustment_id
 * @property-read string $refund_line_item_adjustment_refund_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemAdjustmentRefundInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustmentRefundInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When original_refund_line_item_adjustment_id is omitted; use hasOriginalRefundLineItemAdjustmentId() or valueOrDefault().
     */
    public function getOriginalRefundLineItemAdjustmentId(): string { return $this->get('original_refund_line_item_adjustment_id'); }
    public function hasOriginalRefundLineItemAdjustmentId(): bool { return $this->has('original_refund_line_item_adjustment_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When refund_line_item_adjustment_refund_id is omitted; use hasRefundLineItemAdjustmentRefundId() or valueOrDefault().
     */
    public function getRefundLineItemAdjustmentRefundId(): string { return $this->get('refund_line_item_adjustment_refund_id'); }
    public function hasRefundLineItemAdjustmentRefundId(): bool { return $this->has('refund_line_item_adjustment_refund_id'); }
}
