<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem> $adjustments
 * @property-read string $based_on_return_version
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerPaymentAmountMoney $buyer_payment_amount_money
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerRefundAmountMoney $buyer_refund_amount_money
 * @property-read string $calculated_at
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionCreditMoney $credit_money
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionDeductionMoney $deduction_money
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityResolutionLineItemsItem> $line_items
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItem> $replacement_line_items
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementTotalMoney $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionReturnedTotalMoney $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataEligibilityResolution extends Model {
    /** @param array{'adjustments': list<mixed>, 'based_on_return_version': string, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'calculated_at': string, 'credit_money': mixed, 'deduction_money': mixed, 'line_items': list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataEligibilityResolution')); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem} and {@see BuyerReturnResolutionAdjustment}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem}. An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied amount, status, and reason.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem>
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getBasedOnReturnVersion(): string { return $this->get('based_on_return_version'); }
    public function hasBasedOnReturnVersion(): bool { return $this->has('based_on_return_version'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerPaymentAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerPaymentAmountMoney
     */
    public function getBuyerPaymentAmountMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerPaymentAmountMoney { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerRefundAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerRefundAmountMoney
     */
    public function getBuyerRefundAmountMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionBuyerRefundAmountMoney { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCalculatedAt(): string { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionCreditMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionCreditMoney
     */
    public function getCreditMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionCreditMoney { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionDeductionMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionDeductionMoney
     */
    public function getDeductionMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionDeductionMoney { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityResolutionLineItemsItem} and {@see ReturnResolutionLineItem}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionLineItemsItem}. A return line included in a resolution, with its quantity and returned total.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityResolutionLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItem} and {@see ReturnReplacementLineItem}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItem}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItem>
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementTotalMoney
     */
    public function getReplacementTotalMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementTotalMoney { return $this->get('replacement_total_money'); }
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
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionReturnedTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionReturnedTotalMoney
     */
    public function getReturnedTotalMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionReturnedTotalMoney { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
