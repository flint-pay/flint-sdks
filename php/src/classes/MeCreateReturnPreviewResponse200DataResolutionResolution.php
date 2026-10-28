<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MeCreateReturnPreviewResponse200DataResolutionResolutionAdjustmentsItem> $adjustments
 * @property-read string $based_on_return_version
 * @property-read MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerPaymentAmountMoney $buyer_payment_amount_money
 * @property-read MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerRefundAmountMoney $buyer_refund_amount_money
 * @property-read string $calculated_at
 * @property-read MeCreateReturnPreviewResponse200DataResolutionResolutionCreditMoney $credit_money
 * @property-read MeCreateReturnPreviewResponse200DataResolutionResolutionDeductionMoney $deduction_money
 * @property-read list<MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItem> $line_items
 * @property-read list<MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItem> $replacement_line_items
 * @property-read MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementTotalMoney $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read MeCreateReturnPreviewResponse200DataResolutionResolutionReturnedTotalMoney $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataResolutionResolution extends Model {
    /** @param array{'adjustments': list<mixed>, 'based_on_return_version': string, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'calculated_at': string, 'credit_money': mixed, 'deduction_money': mixed, 'line_items': list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataResolutionResolution')); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataResolutionResolutionAdjustmentsItem} and {@see BuyerReturnResolutionAdjustment}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionAdjustmentsItem}. An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied amount, status, and reason.
     * @return list<MeCreateReturnPreviewResponse200DataResolutionResolutionAdjustmentsItem>
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getBasedOnReturnVersion(): string { return $this->get('based_on_return_version'); }
    public function hasBasedOnReturnVersion(): bool { return $this->has('based_on_return_version'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerPaymentAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerPaymentAmountMoney
     */
    public function getBuyerPaymentAmountMoney(): MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerPaymentAmountMoney { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerRefundAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerRefundAmountMoney
     */
    public function getBuyerRefundAmountMoney(): MeCreateReturnPreviewResponse200DataResolutionResolutionBuyerRefundAmountMoney { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCalculatedAt(): string { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionCreditMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionResolutionCreditMoney
     */
    public function getCreditMoney(): MeCreateReturnPreviewResponse200DataResolutionResolutionCreditMoney { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionDeductionMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionResolutionDeductionMoney
     */
    public function getDeductionMoney(): MeCreateReturnPreviewResponse200DataResolutionResolutionDeductionMoney { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItem} and {@see ReturnResolutionLineItem}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItem}. A return line included in a resolution, with its quantity and returned total.
     * @return list<MeCreateReturnPreviewResponse200DataResolutionResolutionLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItem} and {@see ReturnReplacementLineItem}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItem}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItem>
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementTotalMoney
     */
    public function getReplacementTotalMoney(): MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementTotalMoney { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Shape $ (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return string
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataResolutionResolutionReturnedTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataResolutionResolutionReturnedTotalMoney
     */
    public function getReturnedTotalMoney(): MeCreateReturnPreviewResponse200DataResolutionResolutionReturnedTotalMoney { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
