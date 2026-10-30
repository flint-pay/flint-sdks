<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $billing_address
 * @property-read ?string $buyer_note
 * @property-read TaxIdentity|null $buyer_tax_identity
 * @property-read ?list<OrderCharge> $charges
 * @property-read ?string $customer_display_name
 * @property-read ?string $customer_email
 * @property-read ?list<InvoiceDiscount> $discounts
 * @property-read ?string $internal_note
 * @property-read ?list<InvoiceLineItem> $line_items
 * @property-read ?string $merchant_display_name
 * @property-read PricingAmounts $pricing_amounts
 * @property-read ?InvoiceTip $requested_tip
 * @property-read TaxIdentity|null $seller_tax_identity
 * @property-read list<InvoiceSnapshotTaxBreakdownsItemPercentage|InvoiceSnapshotTaxBreakdownsItemFlatAmount|\stdClass> $tax_breakdowns
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSnapshot extends Model {
    /** @param array{'billing_address'?: mixed, 'buyer_note'?: string, 'buyer_tax_identity': mixed, 'charges'?: list<mixed>, 'customer_display_name'?: string, 'customer_email'?: string, 'discounts'?: list<mixed>, 'internal_note'?: string, 'line_items'?: list<mixed>, 'merchant_display_name'?: string, 'pricing_amounts': mixed, 'requested_tip'?: mixed, 'seller_tax_identity': mixed, 'tax_breakdowns': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSnapshot')); }
    /** Billing address captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getBillingAddress(): ?Address { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The backing order's buyer note, captured on the invoice.
     * @return ?string
     */
    public function getBuyerNote(): ?string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Buyer tax identity captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it. anyOf[1] (Value): {@see TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return TaxIdentity|null
     */
    public function getBuyerTaxIdentity(): TaxIdentity|null { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** The backing order's service charges, frozen at issue. [] (Value): {@see OrderCharge}. An additional charge applied to an order.
     * @return ?list<OrderCharge>
     */
    public function getCharges(): ?array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Buyer name captured on the invoice. Kept after the customer is deleted, because an issued invoice must keep it.
     * @return ?string
     */
    public function getCustomerDisplayName(): ?string { return $this->get('customer_display_name'); }
    public function hasCustomerDisplayName(): bool { return $this->has('customer_display_name'); }
    /** Buyer email captured on the invoice.
     * @return ?string
     */
    public function getCustomerEmail(): ?string { return $this->get('customer_email'); }
    public function hasCustomerEmail(): bool { return $this->has('customer_email'); }
    /** The discounts applied to the backing order, frozen at issue. [] (Value): {@see InvoiceDiscount}. A discount applied to an invoice, with its source, the discount amount, the amount actually applied, and any promotion.
     * @return ?list<InvoiceDiscount>
     */
    public function getDiscounts(): ?array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** The backing order's internal note, captured on the invoice. Merchant reads only; buyer reads leave it out.
     * @return ?string
     */
    public function getInternalNote(): ?string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** The billed line items, frozen at issue. A draft previews the backing order's lines. [] (Value): {@see InvoiceLineItem}. A line item on an invoice, with its quantity, unit price, discount, tax, and totals, and the product, variant, or bundle it came from.
     * @return ?list<InvoiceLineItem>
     */
    public function getLineItems(): ?array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Your business name as shown on the invoice. A draft shows your current name; issue freezes it.
     * @return ?string
     */
    public function getMerchantDisplayName(): ?string { return $this->get('merchant_display_name'); }
    public function hasMerchantDisplayName(): bool { return $this->has('merchant_display_name'); }
    /** The invoice's pricing totals. Its total_money is the invoice total that the top-level total_money reports. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     * @return PricingAmounts
     */
    public function getPricingAmounts(): PricingAmounts { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** The tip requested on the backing order, frozen at issue. Absent when none was requested. A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description.
     * @return ?InvoiceTip
     */
    public function getRequestedTip(): ?InvoiceTip { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. anyOf[1] (Value): {@see TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return TaxIdentity|null
     */
    public function getSellerTaxIdentity(): TaxIdentity|null { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** Tax jurisdiction rows for this invoice. A draft previews the backing order's current rows; issue freezes them, and the API, hosted invoice, and PDF share the frozen rows. External tax produces these rows. Automatic tax doesn't, so an automatic-tax invoice reports its tax in pricing_amounts and each line's tax_money. On a newly issued external-tax invoice, rows sum to pricing_amounts.tax_money, and rows with price_mode inclusive sum to pricing_amounts.inclusive_tax_money. A row's order_line_item_id matches the same field on InvoiceLineItem; order_charge_id names a charge in charges. Always [] when no tax rows apply. Some older external-tax invoices have no frozen rows. [] (Value): {@see TaxBreakdown}. The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.
     * @return list<InvoiceSnapshotTaxBreakdownsItemPercentage|InvoiceSnapshotTaxBreakdownsItemFlatAmount|\stdClass>
     */
    public function getTaxBreakdowns(): array { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
}
