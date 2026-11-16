<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $correction
 * @property-read string|null $credit_note_line_item_id
 * @property-read mixed $discount_money
 * @property-read string|null $invoice_line_item_id
 * @property-read string|null $name
 * @property-read mixed $subtotal_money
 * @property-read mixed $tax_money
 * @property-read mixed $total_money
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteLineItemPreviousAttributes extends Model {
    /** @param array{'correction'?: mixed, 'credit_note_line_item_id'?: mixed, 'discount_money'?: mixed, 'invoice_line_item_id'?: mixed, 'name'?: mixed, 'subtotal_money'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteLineItemPreviousAttributes')); }
    /** The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. anyOf[1] (Value): {@see CreditNoteCorrectionRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getCorrection(): mixed { return $this->get('correction'); }
    public function hasCorrection(): bool { return $this->has('correction'); }
    /** Unique identifier of the credit note line item. anyOf[1] (Value): string. Unique identifier of the credit note line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreditNoteLineItemId(): string|null { return $this->get('credit_note_line_item_id'); }
    public function hasCreditNoteLineItemId(): bool { return $this->has('credit_note_line_item_id'); }
    /** The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** The invoice snapshot line this corrects. anyOf[1] (Value): string. The invoice snapshot line this corrects. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceLineItemId(): string|null { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
    /** Label of the credited invoice line. anyOf[1] (Value): string. Label of the credited invoice line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
