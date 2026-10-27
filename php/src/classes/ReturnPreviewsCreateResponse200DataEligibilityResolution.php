<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnPreviewsCreateResponse200DataEligibilityResolutionAdjustmentsItem> $adjustments
 * @property-read string $based_on_return_version
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerPaymentAmountMoney $buyer_payment_amount_money
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerRefundAmountMoney $buyer_refund_amount_money
 * @property-read string $calculated_at
 * @property-read ?string $corrects_return_resolution_id
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionCreditMoney $credit_money
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionDeductionMoney $deduction_money
 * @property-read list<ReturnPreviewsCreateResponse200DataEligibilityResolutionLineItemsItem> $line_items
 * @property-read list<ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem> $replacement_line_items
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementTotalMoney $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read ReturnPreviewsCreateResponse200DataEligibilityResolutionReturnedTotalMoney $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataEligibilityResolution extends Model {
    /** @param array{'adjustments': list<mixed>, 'based_on_return_version': string, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'calculated_at': string, 'corrects_return_resolution_id'?: string, 'credit_money': mixed, 'deduction_money': mixed, 'line_items': list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataEligibilityResolution')); }
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataEligibilityResolutionAdjustmentsItem} and {@see ReturnResolutionAdjustment}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionAdjustmentsItem}. A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     * @return list<ReturnPreviewsCreateResponse200DataEligibilityResolutionAdjustmentsItem>
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getBasedOnReturnVersion(): string { return $this->get('based_on_return_version'); }
    public function hasBasedOnReturnVersion(): bool { return $this->has('based_on_return_version'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerPaymentAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerPaymentAmountMoney
     */
    public function getBuyerPaymentAmountMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerPaymentAmountMoney { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerRefundAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerRefundAmountMoney
     */
    public function getBuyerRefundAmountMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionBuyerRefundAmountMoney { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCalculatedAt(): string { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getCorrectsReturnResolutionId(): ?string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionCreditMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionCreditMoney
     */
    public function getCreditMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionCreditMoney { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionDeductionMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionDeductionMoney
     */
    public function getDeductionMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionDeductionMoney { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataEligibilityResolutionLineItemsItem} and {@see ReturnResolutionLineItem}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionLineItemsItem}. A return line included in a resolution, with its quantity and returned total.
     * @return list<ReturnPreviewsCreateResponse200DataEligibilityResolutionLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Array of ({@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem} and {@see ReturnReplacementLineItem}). Shape $[] (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem>
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementTotalMoney
     */
    public function getReplacementTotalMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementTotalMoney { return $this->get('replacement_total_money'); }
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
    /** Shape $ (Value): {@see ReturnPreviewsCreateResponse200DataEligibilityResolutionReturnedTotalMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ReturnPreviewsCreateResponse200DataEligibilityResolutionReturnedTotalMoney
     */
    public function getReturnedTotalMoney(): ReturnPreviewsCreateResponse200DataEligibilityResolutionReturnedTotalMoney { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
