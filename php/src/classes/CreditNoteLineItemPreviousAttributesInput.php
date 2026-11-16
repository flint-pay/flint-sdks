<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreditNoteCorrectionRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $correction
 * @property-read string|null $credit_note_line_item_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discount_money
 * @property-read string|null $invoice_line_item_id
 * @property-read string|null $name
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subtotal_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteLineItemPreviousAttributesInput extends Model {
    /** @param array{'correction'?: CreditNoteCorrectionRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'credit_note_line_item_id'?: string|null, 'discount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'invoice_line_item_id'?: string|null, 'name'?: string|null, 'subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteLineItemPreviousAttributesInput')); }
    /** The correction that produced this line, using the same shape accepted by draft writes. Amount corrections return the requested billed value in amount_money, equal to total_money. anyOf[1] (Value): {@see CreditNoteCorrectionRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return CreditNoteCorrectionRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When correction is omitted; use hasCorrection() or valueOrDefault().
     */
    public function getCorrection(): mixed { return $this->get('correction'); }
    public function hasCorrection(): bool { return $this->has('correction'); }
    /** Unique identifier of the credit note line item. anyOf[1] (Value): string. Unique identifier of the credit note line item. Example: "cnli_01KEZF7C006N101PGMWKNHFD1J". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When credit_note_line_item_id is omitted; use hasCreditNoteLineItemId() or valueOrDefault().
     */
    public function getCreditNoteLineItemId(): mixed { return $this->get('credit_note_line_item_id'); }
    public function hasCreditNoteLineItemId(): bool { return $this->has('credit_note_line_item_id'); }
    /** The credited share of the frozen line's remaining allocated merchandise discount, rounded half up in currency minor units. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** The invoice snapshot line this corrects. anyOf[1] (Value): string. The invoice snapshot line this corrects. Example: "invli_01KEZF7C00H767MAT1DY7ZWSVW". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_line_item_id is omitted; use hasInvoiceLineItemId() or valueOrDefault().
     */
    public function getInvoiceLineItemId(): mixed { return $this->get('invoice_line_item_id'); }
    public function hasInvoiceLineItemId(): bool { return $this->has('invoice_line_item_id'); }
    /** Label of the credited invoice line. anyOf[1] (Value): string. Label of the credited invoice line. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Credited subtotal before the credited discount, in the source line's inclusive or additive price units. Balances the total after tax and discount are rounded from the remaining pool; it is not a rounded per-unit price. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** The credited share of the frozen line's remaining tax, rounded half up in currency minor units. Included tax is already part of total_money. Tax-exclusive consideration is total_money minus tax_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Billed value credited by this line. For inclusive tax, subtotal_money minus discount_money. For additive tax, subtotal_money minus discount_money plus tax_money. A full remaining-value correction consumes the exact remaining components. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
