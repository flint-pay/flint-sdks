<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RefundLineItemAdjustmentRefundInInput|array<array-key, mixed>|\stdClass> $adjustment_refunds
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * @property-read list<RefundLineItemAdjustmentInInput|array<array-key, mixed>|\stdClass> $refund_adjustments
 * @property-read RefundAdjustmentAuditInput|array<array-key, mixed>|\stdClass $tax_adjustment_audit
 * @property-read RefundAdjustmentReasonRequestInput|array<array-key, mixed>|\stdClass $tax_adjustment_reason
 * @property-read list<RefundTaxBreakdownRefundInInput|array<array-key, mixed>|\stdClass> $tax_breakdown_refunds
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read string $tax_refund_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemInput extends Model {
    /** @param array{'adjustment_refunds'?: list<RefundLineItemAdjustmentRefundInInput|array<array-key, mixed>|\stdClass>, 'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'order_line_item_id': string, 'quantity'?: int, 'refund_adjustments'?: list<RefundLineItemAdjustmentInInput|array<array-key, mixed>|\stdClass>, 'tax_adjustment_audit'?: RefundAdjustmentAuditInput|array<array-key, mixed>|\stdClass, 'tax_adjustment_reason'?: RefundAdjustmentReasonRequestInput|array<array-key, mixed>|\stdClass, 'tax_breakdown_refunds'?: list<RefundTaxBreakdownRefundInInput|array<array-key, mixed>|\stdClass>, 'tax_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_refund_mode'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemInput')); }
    /**  [] (Value): {@see RefundLineItemAdjustmentRefundInInput}. An amount to refund back against an earlier line item adjustment, identified by `refund_line_item_adjustment_id`.
     * @return list<RefundLineItemAdjustmentRefundInInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustment_refunds is omitted; use hasAdjustmentRefunds() or valueOrDefault().
     */
    public function getAdjustmentRefunds(): array { return $this->get('adjustment_refunds'); }
    public function hasAdjustmentRefunds(): bool { return $this->has('adjustment_refunds'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /**  [] (Value): {@see RefundLineItemAdjustmentInInput}. An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     * @return list<RefundLineItemAdjustmentInInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refund_adjustments is omitted; use hasRefundAdjustments() or valueOrDefault().
     */
    public function getRefundAdjustments(): array { return $this->get('refund_adjustments'); }
    public function hasRefundAdjustments(): bool { return $this->has('refund_adjustments'); }
    /** Who made a manual tax adjustment on a refund line item and where it came from, for audit purposes.
     * @return RefundAdjustmentAuditInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_adjustment_audit is omitted; use hasTaxAdjustmentAudit() or valueOrDefault().
     */
    public function getTaxAdjustmentAudit(): mixed { return $this->get('tax_adjustment_audit'); }
    public function hasTaxAdjustmentAudit(): bool { return $this->has('tax_adjustment_audit'); }
    /** The reason to record for a refund adjustment, as a `code` with an optional description.
     * @return RefundAdjustmentReasonRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_adjustment_reason is omitted; use hasTaxAdjustmentReason() or valueOrDefault().
     */
    public function getTaxAdjustmentReason(): mixed { return $this->get('tax_adjustment_reason'); }
    public function hasTaxAdjustmentReason(): bool { return $this->has('tax_adjustment_reason'); }
    /**  [] (Value): {@see RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.
     * @return list<RefundTaxBreakdownRefundInInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Value enum: "automatic", "explicit".
     * @return string
     * @throws SdkError When tax_refund_mode is omitted; use hasTaxRefundMode() or valueOrDefault().
     */
    public function getTaxRefundMode(): string { return $this->get('tax_refund_mode'); }
    public function hasTaxRefundMode(): bool { return $this->has('tax_refund_mode'); }
}
