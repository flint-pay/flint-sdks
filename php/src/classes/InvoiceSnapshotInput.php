<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $billing_address
 * @property-read string $buyer_note
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $buyer_tax_identity
 * @property-read list<OrderChargeInput|array<array-key, mixed>|\stdClass> $charges
 * @property-read string $customer_display_name
 * @property-read string $customer_email
 * @property-read list<InvoiceDiscountInput|array<array-key, mixed>|\stdClass> $discounts
 * @property-read string $internal_note
 * @property-read list<InvoiceLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchant_display_name
 * @property-read InvoiceTipInput|array<array-key, mixed>|\stdClass $requested_tip
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $seller_tax_identity
 * @property-read list<TaxBreakdownInput|array<array-key, mixed>|\stdClass> $tax_breakdowns
 * @property-read list<TaxCurrencyConversionInput|array<array-key, mixed>|\stdClass> $tax_currency_conversions
 * @property-read OrderTaxExemptionInput|array<array-key, mixed>|\stdClass $tax_exemption
 * @property-read array{'customer_tax_id': array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object|null, ...}|object|null $tax_reverse_charge
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceSnapshotInput extends Model {
    /** @param array{'billing_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'buyer_note'?: string, 'buyer_tax_identity': array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'charges'?: list<OrderChargeInput|array<array-key, mixed>|\stdClass>, 'customer_display_name'?: string, 'customer_email'?: string, 'discounts'?: list<InvoiceDiscountInput|array<array-key, mixed>|\stdClass>, 'internal_note'?: string, 'line_items'?: list<InvoiceLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_display_name'?: string, 'requested_tip'?: InvoiceTipInput|array<array-key, mixed>|\stdClass, 'seller_tax_identity': array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'tax_breakdowns': list<TaxBreakdownInput|array<array-key, mixed>|\stdClass>, 'tax_currency_conversions': list<TaxCurrencyConversionInput|array<array-key, mixed>|\stdClass>, 'tax_exemption'?: OrderTaxExemptionInput|array<array-key, mixed>|\stdClass, 'tax_reverse_charge'?: array{'customer_tax_id': array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object|null, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSnapshotInput')); }
    /** Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The backing order's buyer note, captured on the invoice.
     * @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Buyer tax identity for this invoice. Drafts preview the customer's current identity. Issue freezes the identity, which later profile edits and customer deletion preserve. `null` when no buyer tax identity is available, including after customer deletion while the invoice is a draft. anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When buyer_tax_identity is omitted; use hasBuyerTaxIdentity() or valueOrDefault().
     */
    public function getBuyerTaxIdentity(): mixed { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** The backing order's service charges, frozen at issue. [] (Value): {@see OrderChargeInput}. An additional charge applied to an order.
     * @return list<OrderChargeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it.
     * @return string
     * @throws SdkError When customer_display_name is omitted; use hasCustomerDisplayName() or valueOrDefault().
     */
    public function getCustomerDisplayName(): string { return $this->get('customer_display_name'); }
    public function hasCustomerDisplayName(): bool { return $this->has('customer_display_name'); }
    /** Buyer email captured on the invoice.
     * @return string
     * @throws SdkError When customer_email is omitted; use hasCustomerEmail() or valueOrDefault().
     */
    public function getCustomerEmail(): string { return $this->get('customer_email'); }
    public function hasCustomerEmail(): bool { return $this->has('customer_email'); }
    /** The discounts applied to the backing order, frozen at issue. [] (Value): {@see InvoiceDiscountInput}. A discount applied to an invoice, with its source, the discount amount, the amount actually applied, and any promotion.
     * @return list<InvoiceDiscountInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out.
     * @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** The billed line items, frozen at issue. A draft previews the backing order's lines. [] (Value): {@see InvoiceLineItemInput}. A line item on an invoice.
     * @return list<InvoiceLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Your business name as shown on the invoice. A draft shows your current name; issue freezes it.
     * @return string
     * @throws SdkError When merchant_display_name is omitted; use hasMerchantDisplayName() or valueOrDefault().
     */
    public function getMerchantDisplayName(): string { return $this->get('merchant_display_name'); }
    public function hasMerchantDisplayName(): bool { return $this->has('merchant_display_name'); }
    /** The tip requested on the backing order, frozen at issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description.
     * @return InvoiceTipInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When seller_tax_identity is omitted; use hasSellerTaxIdentity() or valueOrDefault().
     */
    public function getSellerTaxIdentity(): mixed { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money, and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. [] (Value): {@see TaxBreakdownInput}. The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.
     * @return list<TaxBreakdownInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_breakdowns is omitted; use hasTaxBreakdowns() or valueOrDefault().
     */
    public function getTaxBreakdowns(): array { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
    /** VAT stated in the currency of the country that charges it, one entry per currency, frozen at issue. EU member states require their national currency and the UK requires sterling. Each entry gives the converted VAT, the converted taxable amount, and the rate with its source and date. Present for VAT above zero charged by an EU member state or the UK; always [] otherwise, including reverse charge, invoices in that currency already, and invoices issued before conversions were recorded. The invoice PDF prints the same figures. [] (Value): {@see TaxCurrencyConversionInput}. VAT on an issued document converted into the currency of the country whose VAT is charged.
     * @return list<TaxCurrencyConversionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_currency_conversions is omitted; use hasTaxCurrencyConversions() or valueOrDefault().
     */
    public function getTaxCurrencyConversions(): array { return $this->get('tax_currency_conversions'); }
    public function hasTaxCurrencyConversions(): bool { return $this->has('tax_currency_conversions'); }
    /** Exemption assessment captured on this invoice. A draft previews the backing order's assessment; issue freezes it. Omitted when no assessment was recorded, including on older invoices. Buyer views omit evidence_reference. An exemption and a reverse charge never apply to the same invoice: when an exemption applies, Flint calculates no tax, so tax_reverse_charge is null. The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay omitted.
     * @return OrderTaxExemptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_exemption is omitted; use hasTaxExemption() or valueOrDefault().
     */
    public function getTaxExemption(): mixed { return $this->get('tax_exemption'); }
    public function hasTaxExemption(): bool { return $this->has('tax_exemption'); }
    /** The order's reverse charge, frozen when the invoice is issued: the buyer accounts for the tax, and documents print "Reverse charge" with the buyer's tax ID. `null` when no reverse charge applies, including when an exemption applies: Flint calculates no tax for an exempt sale, so the two never appear on the same invoice. Drafts preview the order's current value. anyOf[1] (Value): {@see TaxReverseChargeInput}. The buyer accounts for the tax under the reverse charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2] (Value): null.
     * @return array{'customer_tax_id': array{'country': string, 'identifier_type': string, 'region': string|null, 'value': string, ...}|object|null, ...}|object|null
     * @throws SdkError When tax_reverse_charge is omitted; use hasTaxReverseCharge() or valueOrDefault().
     */
    public function getTaxReverseCharge(): mixed { return $this->get('tax_reverse_charge'); }
    public function hasTaxReverseCharge(): bool { return $this->has('tax_reverse_charge'); }
}
