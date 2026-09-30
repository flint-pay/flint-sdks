<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $billing_address
 * @property-read string $buyer_note
 * @property-read list<OrderChargeInput|array<array-key, mixed>|\stdClass> $charges
 * @property-read string $customer_display_name
 * @property-read string $customer_email
 * @property-read list<InvoiceDiscountInput|array<array-key, mixed>|\stdClass> $discounts
 * @property-read string $footer
 * @property-read string $internal_note
 * @property-read list<InvoiceLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $memo
 * @property-read string $merchant_display_name
 * @property-read PricingAmountsInput|array<array-key, mixed>|\stdClass $pricing_amounts
 * @property-read string $reference
 * @property-read InvoiceTipInput|array<array-key, mixed>|\stdClass $requested_tip
 * @property-read string|\DateTimeInterface $service_at
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceSnapshotInput extends Model {
    /** @param array{'billing_address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, 'buyer_note'?: string, 'charges'?: list<OrderChargeInput|array<array-key, mixed>|\stdClass>, 'customer_display_name'?: string, 'customer_email'?: string, 'discounts'?: list<InvoiceDiscountInput|array<array-key, mixed>|\stdClass>, 'footer'?: string, 'internal_note'?: string, 'line_items'?: list<InvoiceLineItemInput|array<array-key, mixed>|\stdClass>, 'memo'?: string, 'merchant_display_name'?: string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'reference'?: string, 'requested_tip'?: InvoiceTipInput|array<array-key, mixed>|\stdClass, 'service_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSnapshotInput')); }
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** @return list<OrderChargeInput|array<array-key, mixed>|\stdClass>
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
    /** @return list<InvoiceDiscountInput|array<array-key, mixed>|\stdClass>
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
    /** @return list<InvoiceLineItemInput|array<array-key, mixed>|\stdClass>
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
    /** @return PricingAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pricing_amounts is omitted; use hasPricingAmounts() or valueOrDefault().
     */
    public function getPricingAmounts(): mixed { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** @return string
     * @throws SdkError When reference is omitted; use hasReference() or valueOrDefault().
     */
    public function getReference(): string { return $this->get('reference'); }
    public function hasReference(): bool { return $this->has('reference'); }
    /** @return InvoiceTipInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When service_at is omitted; use hasServiceAt() or valueOrDefault().
     */
    public function getServiceAt(): string|\DateTimeInterface { return $this->get('service_at'); }
    public function hasServiceAt(): bool { return $this->has('service_at'); }
}
