<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $billing_address
 * @property-read string|null $buyer_note
 * @property-read TaxIdentityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $buyer_tax_identity
 * @property-read list<OrderChargePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $charges
 * @property-read string|null $customer_display_name
 * @property-read string|null $customer_email
 * @property-read list<InvoiceDiscountPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $discounts
 * @property-read string|null $internal_note
 * @property-read list<InvoiceLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read string|null $merchant_display_name
 * @property-read InvoiceTipPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $requested_tip
 * @property-read TaxIdentityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $seller_tax_identity
 * @property-read list<TaxBreakdownPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $tax_breakdowns
 * @property-read list<TaxCurrencyConversionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $tax_currency_conversions
 * @property-read OrderTaxExemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_exemption
 * @property-read TaxReverseChargePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_reverse_charge
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceSnapshotPreviousAttributesInput extends Model {
    /** @param array{'billing_address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'buyer_note'?: string|null, 'buyer_tax_identity'?: TaxIdentityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'charges'?: list<OrderChargePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'customer_display_name'?: string|null, 'customer_email'?: string|null, 'discounts'?: list<InvoiceDiscountPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'internal_note'?: string|null, 'line_items'?: list<InvoiceLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'merchant_display_name'?: string|null, 'requested_tip'?: InvoiceTipPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'seller_tax_identity'?: TaxIdentityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_breakdowns'?: list<TaxBreakdownPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'tax_currency_conversions'?: list<TaxCurrencyConversionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'tax_exemption'?: OrderTaxExemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_reverse_charge'?: TaxReverseChargePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSnapshotPreviousAttributesInput')); }
    /** Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The backing order's buyer note, captured on the invoice. anyOf[1] (Value): string. The backing order's buyer note, captured on the invoice. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): mixed { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. anyOf[1] (Value): {@see TaxIdentityPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxIdentityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When buyer_tax_identity is omitted; use hasBuyerTaxIdentity() or valueOrDefault().
     */
    public function getBuyerTaxIdentity(): mixed { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** The backing order's service charges, frozen at issue. anyOf[1] (Value): Array of {@see OrderChargePreviousAttributesInput}. The backing order's service charges, frozen at issue. anyOf[1][] (Value): {@see OrderChargePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderChargePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): mixed { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. anyOf[1] (Value): string. Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_display_name is omitted; use hasCustomerDisplayName() or valueOrDefault().
     */
    public function getCustomerDisplayName(): mixed { return $this->get('customer_display_name'); }
    public function hasCustomerDisplayName(): bool { return $this->has('customer_display_name'); }
    /** Buyer email captured on the invoice. anyOf[1] (Value): string. Buyer email captured on the invoice. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_email is omitted; use hasCustomerEmail() or valueOrDefault().
     */
    public function getCustomerEmail(): mixed { return $this->get('customer_email'); }
    public function hasCustomerEmail(): bool { return $this->has('customer_email'); }
    /** The discounts applied to the backing order, frozen at issue. anyOf[1] (Value): Array of {@see InvoiceDiscountPreviousAttributesInput}. The discounts applied to the backing order, frozen at issue. anyOf[1][] (Value): {@see InvoiceDiscountPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<InvoiceDiscountPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): mixed { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. anyOf[1] (Value): string. The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): mixed { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** The billed line items, frozen at issue. A draft previews the backing order's lines. anyOf[1] (Value): Array of {@see InvoiceLineItemPreviousAttributesInput}. The billed line items, frozen at issue. A draft previews the backing order's lines. anyOf[1][] (Value): {@see InvoiceLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<InvoiceLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Your business name as shown on the invoice. A draft shows your current name; issue freezes it. anyOf[1] (Value): string. Your business name as shown on the invoice. A draft shows your current name; issue freezes it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_display_name is omitted; use hasMerchantDisplayName() or valueOrDefault().
     */
    public function getMerchantDisplayName(): mixed { return $this->get('merchant_display_name'); }
    public function hasMerchantDisplayName(): bool { return $this->has('merchant_display_name'); }
    /** The tip requested on the backing order, frozen at issue. Absent when none was requested. anyOf[1] (Value): {@see InvoiceTipPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return InvoiceTipPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. anyOf[1] (Value): {@see TaxIdentityPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxIdentityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When seller_tax_identity is omitted; use hasSellerTaxIdentity() or valueOrDefault().
     */
    public function getSellerTaxIdentity(): mixed { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. anyOf[1] (Value): Array of {@see TaxBreakdownPreviousAttributesInput}. Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. anyOf[1][] (Value): {@see TaxBreakdownPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TaxBreakdownPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When tax_breakdowns is omitted; use hasTaxBreakdowns() or valueOrDefault().
     */
    public function getTaxBreakdowns(): mixed { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
    /** VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. anyOf[1] (Value): Array of {@see TaxCurrencyConversionPreviousAttributesInput}. VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. anyOf[1][] (Value): {@see TaxCurrencyConversionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TaxCurrencyConversionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When tax_currency_conversions is omitted; use hasTaxCurrencyConversions() or valueOrDefault().
     */
    public function getTaxCurrencyConversions(): mixed { return $this->get('tax_currency_conversions'); }
    public function hasTaxCurrencyConversions(): bool { return $this->has('tax_currency_conversions'); }
    /** Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. anyOf[1] (Value): {@see OrderTaxExemptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderTaxExemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_exemption is omitted; use hasTaxExemption() or valueOrDefault().
     */
    public function getTaxExemption(): mixed { return $this->get('tax_exemption'); }
    public function hasTaxExemption(): bool { return $this->has('tax_exemption'); }
    /** The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. anyOf[1] (Value): {@see TaxReverseChargePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxReverseChargePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_reverse_charge is omitted; use hasTaxReverseCharge() or valueOrDefault().
     */
    public function getTaxReverseCharge(): mixed { return $this->get('tax_reverse_charge'); }
    public function hasTaxReverseCharge(): bool { return $this->has('tax_reverse_charge'); }
}
