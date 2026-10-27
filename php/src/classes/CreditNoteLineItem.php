<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteLineItemCorrectionQuantity|CreditNoteLineItemCorrectionAmount|\stdClass $correction
 * @property-read string $credit_note_line_item_id
 * @property-read MoneyValue $discount_money
 * @property-read string $invoice_line_item_id
 * @property-read string $name
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $total_money
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteLineItem extends Model {
    /** @param array{'correction': mixed, 'credit_note_line_item_id': string, 'discount_money': mixed, 'invoice_line_item_id': string, 'name': string, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteLineItem')); }
    /** Shape $ (Value): {@see CreditNoteCorrectionRequest}. The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. How much of an invoice line item a credit note line credits, by whole `quantity` or by `amount`, chosen by `type`.
     * @return CreditNoteLineItemCorrectionQuantity|CreditNoteLineItemCorrectionAmount|\stdClass
     */
    public function getCorrection(): CreditNoteLineItemCorrectionQuantity|CreditNoteLineItemCorrectionAmount|\stdClass { return $this->get('correction'); }
    public function hasCorrection(): bool { return $this->has('correction'); }
    /** Shape $ (Value): string. Unique identifier of the credit note line item.
     * @return string
     */
    public function getCreditNoteLineItemId(): string { return $this->get('credit_note_line_item_id'); }
    public function hasCreditNoteLineItemId(): bool { return $this->has('credit_note_line_item_id'); }
    /** Shape $ (Value): {@see MoneyValue}. The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Shape $ (Value): string. The invoice snapshot line this corrects.
     * @return string
     */
    public function getInvoiceLineItemId(): string { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
    /** Shape $ (Value): string. Label of the credited invoice line.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): {@see MoneyValue}. Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see MoneyValue}. The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
