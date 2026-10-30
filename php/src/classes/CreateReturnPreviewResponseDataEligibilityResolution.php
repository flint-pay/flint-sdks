<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem> $adjustments
 * @property-read int $based_on_return_version
 * @property-read CreateReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney $buyer_payment_amount_money
 * @property-read CreateReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney $buyer_refund_amount_money
 * @property-read string $calculated_at
 * @property-read ?string $corrects_return_resolution_id
 * @property-read CreateReturnPreviewResponseDataEligibilityResolutionCreditMoney $credit_money
 * @property-read CreateReturnPreviewResponseDataEligibilityResolutionDeductionMoney $deduction_money
 * @property-read list<CreateReturnPreviewResponseDataEligibilityResolutionLineItemsItem> $line_items
 * @property-read list<CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem> $replacement_line_items
 * @property-read CreateReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read CreateReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney $returned_total_money
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataEligibilityResolution extends Model {
    /** @param array{'adjustments': list<mixed>, 'based_on_return_version': int, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'calculated_at': string, 'corrects_return_resolution_id'?: string, 'credit_money': mixed, 'deduction_money': mixed, 'line_items': list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataEligibilityResolution')); }
    /**  [] (Value): {@see CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem}. A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     * @return list<CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem>
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Format: int64. minimum: 0.
     * @return int
     */
    public function getBasedOnReturnVersion(): int { return $this->get('based_on_return_version'); }
    public function hasBasedOnReturnVersion(): bool { return $this->has('based_on_return_version'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney
     */
    public function getBuyerPaymentAmountMoney(): CreateReturnPreviewResponseDataEligibilityResolutionBuyerPaymentAmountMoney { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney
     */
    public function getBuyerRefundAmountMoney(): CreateReturnPreviewResponseDataEligibilityResolutionBuyerRefundAmountMoney { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCalculatedAt(): string { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** corrects_return_resolution_id
     * @return ?string
     */
    public function getCorrectsReturnResolutionId(): ?string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataEligibilityResolutionCreditMoney
     */
    public function getCreditMoney(): CreateReturnPreviewResponseDataEligibilityResolutionCreditMoney { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataEligibilityResolutionDeductionMoney
     */
    public function getDeductionMoney(): CreateReturnPreviewResponseDataEligibilityResolutionDeductionMoney { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /**  [] (Value): {@see CreateReturnPreviewResponseDataEligibilityResolutionLineItemsItem}. A return line included in a resolution, with its quantity and returned total.
     * @return list<CreateReturnPreviewResponseDataEligibilityResolutionLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /**  [] (Value): {@see CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem>
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney
     */
    public function getReplacementTotalMoney(): CreateReturnPreviewResponseDataEligibilityResolutionReplacementTotalMoney { return $this->get('replacement_total_money'); }
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
     * @return CreateReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney
     */
    public function getReturnedTotalMoney(): CreateReturnPreviewResponseDataEligibilityResolutionReturnedTotalMoney { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
