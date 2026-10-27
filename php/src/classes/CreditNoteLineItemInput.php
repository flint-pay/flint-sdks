<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass $correction
 * @property-read string $credit_note_line_item_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read string $invoice_line_item_id
 * @property-read string $name
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteLineItemInput extends Model {
    /** @param array{'correction': CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass, 'credit_note_line_item_id': string, 'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'invoice_line_item_id': string, 'name': string, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteLineItemInput')); }
    /** Shape $ (Value): {@see CreditNoteCorrectionRequestInput}. The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.
     * @return CreditNoteCorrectionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When correction is omitted; use hasCorrection() or valueOrDefault().
     */
    public function getCorrection(): mixed { return $this->get('correction'); }
    public function hasCorrection(): bool { return $this->has('correction'); }
    /** Shape $ (Value): string. Unique identifier of the credit note line item.
     * @return string
     * @throws SdkError When credit_note_line_item_id is omitted; use hasCreditNoteLineItemId() or valueOrDefault().
     */
    public function getCreditNoteLineItemId(): string { return $this->get('credit_note_line_item_id'); }
    public function hasCreditNoteLineItemId(): bool { return $this->has('credit_note_line_item_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Shape $ (Value): string. The invoice snapshot line this corrects.
     * @return string
     * @throws SdkError When invoice_line_item_id is omitted; use hasInvoiceLineItemId() or valueOrDefault().
     */
    public function getInvoiceLineItemId(): string { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
    /** Shape $ (Value): string. Label of the credited invoice line.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
