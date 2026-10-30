<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem> $adjustments
 * @property-read int $based_on_return_version
 * @property-read BuyerReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney $buyer_payment_amount_money
 * @property-read BuyerReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney $buyer_refund_amount_money
 * @property-read string $calculated_at
 * @property-read BuyerReturnPreviewResponseDataEligibilityResolutionCreditMoney $credit_money
 * @property-read BuyerReturnPreviewResponseDataEligibilityResolutionDeductionMoney $deduction_money
 * @property-read list<BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem> $line_items
 * @property-read list<BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem> $replacement_line_items
 * @property-read BuyerReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read BuyerReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataEligibilityResolution extends Model {
    /** @param array{'adjustments': list<mixed>, 'based_on_return_version': int, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'calculated_at': string, 'credit_money': mixed, 'deduction_money': mixed, 'line_items': list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataEligibilityResolution')); }
    /**  [] (Value): {@see BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem}. An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied amount, status, and reason.
     * @return list<BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem>
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Format: int64. minimum: 0.
     * @return int
     */
    public function getBasedOnReturnVersion(): int { return $this->get('based_on_return_version'); }
    public function hasBasedOnReturnVersion(): bool { return $this->has('based_on_return_version'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney
     */
    public function getBuyerPaymentAmountMoney(): BuyerReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney
     */
    public function getBuyerRefundAmountMoney(): BuyerReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCalculatedAt(): string { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataEligibilityResolutionCreditMoney
     */
    public function getCreditMoney(): BuyerReturnPreviewResponseDataEligibilityResolutionCreditMoney { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataEligibilityResolutionDeductionMoney
     */
    public function getDeductionMoney(): BuyerReturnPreviewResponseDataEligibilityResolutionDeductionMoney { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /**  [] (Value): {@see BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem}. A return line included in a resolution, with its quantity and returned total.
     * @return list<BuyerReturnPreviewResponseDataEligibilityResolutionLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /**  [] (Value): {@see BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem>
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney
     */
    public function getReplacementTotalMoney(): BuyerReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return string
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney
     */
    public function getReturnedTotalMoney(): BuyerReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
