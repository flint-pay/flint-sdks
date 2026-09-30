<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddress $billing_address
 * @property-read string $buyer_note
 * @property-read TaxIdentity|null $buyer_tax_identity
 * @property-read list<OrderCharge> $charges
 * @property-read string $customer_display_name
 * @property-read string $customer_email
 * @property-read list<InvoiceDiscount> $discounts
 * @property-read string $footer
 * @property-read string $internal_note
 * @property-read list<InvoiceLineItem> $line_items
 * @property-read string $memo
 * @property-read string $merchant_display_name
 * @property-read PricingAmounts $pricing_amounts
 * @property-read string $reference
 * @property-read InvoiceTip $requested_tip
 * @property-read TaxIdentity|null $seller_tax_identity
 * @property-read string $service_at
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoiceSnapshot extends Model {
    /** @param array{'billing_address'?: mixed, 'buyer_note'?: string, 'buyer_tax_identity'?: mixed, 'charges'?: list<mixed>, 'customer_display_name'?: string, 'customer_email'?: string, 'discounts'?: list<mixed>, 'footer'?: string, 'internal_note'?: string, 'line_items'?: list<mixed>, 'memo'?: string, 'merchant_display_name'?: string, 'pricing_amounts': mixed, 'reference'?: string, 'requested_tip'?: mixed, 'seller_tax_identity'?: mixed, 'service_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSnapshot')); }
    /** @return PostalAddress
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): PostalAddress { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** @return TaxIdentity|null
     * @throws SdkError When buyer_tax_identity is omitted; use hasBuyerTaxIdentity() or valueOrDefault().
     */
    public function getBuyerTaxIdentity(): TaxIdentity|null { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** @return list<OrderCharge>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** @return string
     * @throws SdkError When customer_display_name is omitted; use hasCustomerDisplayName() or valueOrDefault().
     */
    public function getCustomerDisplayName(): string { return $this->get('customer_display_name'); }
    public function hasCustomerDisplayName(): bool { return $this->has('customer_display_name'); }
    /** @return string
     * @throws SdkError When customer_email is omitted; use hasCustomerEmail() or valueOrDefault().
     */
    public function getCustomerEmail(): string { return $this->get('customer_email'); }
    public function hasCustomerEmail(): bool { return $this->has('customer_email'); }
    /** @return list<InvoiceDiscount>
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** @return string
     * @throws SdkError When footer is omitted; use hasFooter() or valueOrDefault().
     */
    public function getFooter(): string { return $this->get('footer'); }
    public function hasFooter(): bool { return $this->has('footer'); }
    /** @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** @return list<InvoiceLineItem>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When memo is omitted; use hasMemo() or valueOrDefault().
     */
    public function getMemo(): string { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** @return string
     * @throws SdkError When merchant_display_name is omitted; use hasMerchantDisplayName() or valueOrDefault().
     */
    public function getMerchantDisplayName(): string { return $this->get('merchant_display_name'); }
    public function hasMerchantDisplayName(): bool { return $this->has('merchant_display_name'); }
    /** @return PricingAmounts
     * @throws SdkError When pricing_amounts is omitted; use hasPricingAmounts() or valueOrDefault().
     */
    public function getPricingAmounts(): PricingAmounts { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** @return string
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** @return InvoiceTip
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): InvoiceTip { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** @return TaxIdentity|null
     * @throws SdkError When seller_tax_identity is omitted; use hasSellerTaxIdentity() or valueOrDefault().
     */
    public function getSellerTaxIdentity(): TaxIdentity|null { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** @return string
     * @throws SdkError When service_at is omitted; use hasServiceAt() or valueOrDefault().
     */
    public function getServiceAt(): string { return $this->get('service_at'); }
    public function hasServiceAt(): bool { return $this->has('service_at'); }
}
