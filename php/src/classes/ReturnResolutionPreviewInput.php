<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass> $adjustments
 * @property-read string $based_on_return_version
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $buyer_payment_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $buyer_refund_amount_money
 * @property-read string|\DateTimeInterface $calculated_at
 * @property-read string $corrects_return_resolution_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $deduction_money
 * @property-read list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass> $replacement_line_items
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $replacement_total_money
 * @property-read string $resolution_type
 * @property-read string $return_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionPreviewInput extends Model {
    /** @param array{'adjustments': list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass>, 'based_on_return_version': string, 'buyer_payment_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_refund_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculated_at': string|\DateTimeInterface, 'corrects_return_resolution_id'?: string, 'credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'deduction_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'line_items': list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass>, 'replacement_line_items': list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass>, 'replacement_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'resolution_type': string, 'return_id': string, 'returned_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionPreviewInput')); }
    /** Shape $ (Value): Array of {@see ReturnResolutionAdjustmentInput}. Shape $[] (Value): {@see ReturnResolutionAdjustmentInput}. A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     * @return list<ReturnResolutionAdjustmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When based_on_return_version is omitted; use hasBasedOnReturnVersion() or valueOrDefault().
     */
    public function getBasedOnReturnVersion(): string { return $this->get('based_on_return_version'); }
    public function hasBasedOnReturnVersion(): bool { return $this->has('based_on_return_version'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_payment_amount_money is omitted; use hasBuyerPaymentAmountMoney() or valueOrDefault().
     */
    public function getBuyerPaymentAmountMoney(): mixed { return $this->get('buyer_payment_amount_money'); }
    public function hasBuyerPaymentAmountMoney(): bool { return $this->has('buyer_payment_amount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_refund_amount_money is omitted; use hasBuyerRefundAmountMoney() or valueOrDefault().
     */
    public function getBuyerRefundAmountMoney(): mixed { return $this->get('buyer_refund_amount_money'); }
    public function hasBuyerRefundAmountMoney(): bool { return $this->has('buyer_refund_amount_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When calculated_at is omitted; use hasCalculatedAt() or valueOrDefault().
     */
    public function getCalculatedAt(): string|\DateTimeInterface { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When deduction_money is omitted; use hasDeductionMoney() or valueOrDefault().
     */
    public function getDeductionMoney(): mixed { return $this->get('deduction_money'); }
    public function hasDeductionMoney(): bool { return $this->has('deduction_money'); }
    /** Shape $ (Value): Array of {@see ReturnResolutionLineItemInput}. Shape $[] (Value): {@see ReturnResolutionLineItemInput}. A return line included in a resolution, with its quantity and returned total.
     * @return list<ReturnResolutionLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Array of {@see ReturnReplacementLineItemInput}. Shape $[] (Value): {@see ReturnReplacementLineItemInput}. A replacement item added to a return resolution, with its quantity and price totals.
     * @return list<ReturnReplacementLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When replacement_total_money is omitted; use hasReplacementTotalMoney() or valueOrDefault().
     */
    public function getReplacementTotalMoney(): mixed { return $this->get('replacement_total_money'); }
    public function hasReplacementTotalMoney(): bool { return $this->has('replacement_total_money'); }
    /** Shape $ (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): mixed { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
