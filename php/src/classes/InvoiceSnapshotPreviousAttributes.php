<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $billing_address
 * @property-read string|null $buyer_note
 * @property-read TaxIdentityPreviousAttributes|null $buyer_tax_identity
 * @property-read list<OrderChargePreviousAttributes>|null $charges
 * @property-read string|null $customer_display_name
 * @property-read string|null $customer_email
 * @property-read list<InvoiceDiscountPreviousAttributes>|null $discounts
 * @property-read string|null $internal_note
 * @property-read list<InvoiceLineItemPreviousAttributes>|null $line_items
 * @property-read string|null $merchant_display_name
 * @property-read InvoiceTipPreviousAttributes|null $requested_tip
 * @property-read TaxIdentityPreviousAttributes|null $seller_tax_identity
 * @property-read list<\stdClass>|null $tax_breakdowns
 * @property-read list<TaxCurrencyConversionPreviousAttributes>|null $tax_currency_conversions
 * @property-read OrderTaxExemptionPreviousAttributes|null $tax_exemption
 * @property-read TaxReverseChargePreviousAttributes|null $tax_reverse_charge
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSnapshotPreviousAttributes extends Model {
    /** @param array{'billing_address'?: mixed, 'buyer_note'?: mixed, 'buyer_tax_identity'?: mixed, 'charges'?: mixed, 'customer_display_name'?: mixed, 'customer_email'?: mixed, 'discounts'?: mixed, 'internal_note'?: mixed, 'line_items'?: mixed, 'merchant_display_name'?: mixed, 'requested_tip'?: mixed, 'seller_tax_identity'?: mixed, 'tax_breakdowns'?: mixed, 'tax_currency_conversions'?: mixed, 'tax_exemption'?: mixed, 'tax_reverse_charge'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSnapshotPreviousAttributes')); }
    /** Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getBillingAddress(): AddressPreviousAttributes|null { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The backing order's buyer note, captured on the invoice. anyOf[1] (Value): string. The backing order's buyer note, captured on the invoice. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBuyerNote(): string|null { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. anyOf[1] (Value): {@see TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxIdentityPreviousAttributes|null
     */
    public function getBuyerTaxIdentity(): TaxIdentityPreviousAttributes|null { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** The backing order's service charges, frozen at issue. anyOf[1] (Value): Array of {@see OrderChargePreviousAttributes}. The backing order's service charges, frozen at issue. anyOf[1][] (Value): {@see OrderChargePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderChargePreviousAttributes>|null
     */
    public function getCharges(): array|null { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. anyOf[1] (Value): string. Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerDisplayName(): string|null { return $this->get('customer_display_name'); }
    public function hasCustomerDisplayName(): bool { return $this->has('customer_display_name'); }
    /** Buyer email captured on the invoice. anyOf[1] (Value): string. Buyer email captured on the invoice. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerEmail(): string|null { return $this->get('customer_email'); }
    public function hasCustomerEmail(): bool { return $this->has('customer_email'); }
    /** The discounts applied to the backing order, frozen at issue. anyOf[1] (Value): Array of {@see InvoiceDiscountPreviousAttributes}. The discounts applied to the backing order, frozen at issue. anyOf[1][] (Value): {@see InvoiceDiscountPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<InvoiceDiscountPreviousAttributes>|null
     */
    public function getDiscounts(): array|null { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. anyOf[1] (Value): string. The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** The billed line items, frozen at issue. A draft previews the backing order's lines. anyOf[1] (Value): Array of {@see InvoiceLineItemPreviousAttributes}. The billed line items, frozen at issue. A draft previews the backing order's lines. anyOf[1][] (Value): {@see InvoiceLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<InvoiceLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Your business name as shown on the invoice. A draft shows your current name; issue freezes it. anyOf[1] (Value): string. Your business name as shown on the invoice. A draft shows your current name; issue freezes it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantDisplayName(): string|null { return $this->get('merchant_display_name'); }
    public function hasMerchantDisplayName(): bool { return $this->has('merchant_display_name'); }
    /** The tip requested on the backing order, frozen at issue. Absent when none was requested. anyOf[1] (Value): {@see InvoiceTipPreviousAttributes}. anyOf[2] (Value): null.
     * @return InvoiceTipPreviousAttributes|null
     */
    public function getRequestedTip(): InvoiceTipPreviousAttributes|null { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. anyOf[1] (Value): {@see TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxIdentityPreviousAttributes|null
     */
    public function getSellerTaxIdentity(): TaxIdentityPreviousAttributes|null { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. anyOf[1] (Value): Array of {@see TaxBreakdownPreviousAttributes}. Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows, and so does automatic tax outside the US, one per national or provincial tax. US automatic tax doesn't, so a US automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to Invoice.pricing_amounts.tax_money, and rows with price_mode inclusive sum to Invoice.pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. anyOf[1][] (Value): {@see TaxBreakdownPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<\stdClass>|null
     */
    public function getTaxBreakdowns(): array|null { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
    /** VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. anyOf[1] (Value): Array of {@see TaxCurrencyConversionPreviousAttributes}. VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. anyOf[1][] (Value): {@see TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TaxCurrencyConversionPreviousAttributes>|null
     */
    public function getTaxCurrencyConversions(): array|null { return $this->get('tax_currency_conversions'); }
    public function hasTaxCurrencyConversions(): bool { return $this->has('tax_currency_conversions'); }
    /** Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. anyOf[1] (Value): {@see OrderTaxExemptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderTaxExemptionPreviousAttributes|null
     */
    public function getTaxExemption(): OrderTaxExemptionPreviousAttributes|null { return $this->get('tax_exemption'); }
    public function hasTaxExemption(): bool { return $this->has('tax_exemption'); }
    /** The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. anyOf[1] (Value): {@see TaxReverseChargePreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxReverseChargePreviousAttributes|null
     */
    public function getTaxReverseCharge(): TaxReverseChargePreviousAttributes|null { return $this->get('tax_reverse_charge'); }
    public function hasTaxReverseCharge(): bool { return $this->has('tax_reverse_charge'); }
}
