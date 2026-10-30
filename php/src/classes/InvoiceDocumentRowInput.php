<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $credit_note_number
 * @property-read bool $is_informational
 * @property-read string $kind
 * @property-read string $name
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read int|float $percent
 * @property-read string $promotion_code
 * @property-read string $tax_type
 * @property-read string $taxability_reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $taxable_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceDocumentRowInput extends Model {
    /** @param array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'credit_note_number'?: string, 'is_informational': bool, 'kind': string, 'name'?: string, 'occurred_at'?: string|\DateTimeInterface, 'percent'?: int|float, 'promotion_code'?: string, 'tax_type'?: string, 'taxability_reason'?: string, 'taxable_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDocumentRowInput')); }
    /** The row's signed amount. Informational rows do not contribute to the sum. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Number of the credit note a credit note row names.
     * @return string
     * @throws SdkError When credit_note_number is omitted; use hasCreditNoteNumber() or valueOrDefault().
     */
    public function getCreditNoteNumber(): string { return $this->get('credit_note_number'); }
    public function hasCreditNoteNumber(): bool { return $this->has('credit_note_number'); }
    /** Whether the row is shown for information and left out of the sum, such as tax already included in prices, tax not applied, or money refunded to the buyer. A closing `total` or `amount_due` row is informational and states the sum. An opening or sole `total` row contributes to the sum.
     * @return bool
     * @throws SdkError When is_informational is omitted; use hasIsInformational() or valueOrDefault().
     */
    public function getIsInformational(): bool { return $this->get('is_informational'); }
    public function hasIsInformational(): bool { return $this->has('is_informational'); }
    /** Value enum: "subtotal", "discount", "charge", "tax", "tip", "total", "late_fee", "late_fee_waived", "payments", "credit_note", "credits", "written_off", "amount_due", "refunded".
     * @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** Discount, charge, or tax jurisdiction name.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** When the late fee was assessed or waived, or the credit note issued. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Rate of a percent-based charge or a tax row, in percent units. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Promotion code of a discount row.
     * @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee".
     * @return string
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete".
     * @return string
     * @throws SdkError When taxability_reason is omitted; use hasTaxabilityReason() or valueOrDefault().
     */
    public function getTaxabilityReason(): string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
    /** Taxable amount of a tax row. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When taxable_money is omitted; use hasTaxableMoney() or valueOrDefault().
     */
    public function getTaxableMoney(): mixed { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
