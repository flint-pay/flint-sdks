<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read CheckoutCustomerConfigInput|array<array-key, mixed>|\stdClass $customer_collection
 * @property-read list<string> $delivery_method_ids
 * @property-read CheckoutExpirationConfigInput|array<array-key, mixed>|\stdClass $expiration
 * @property-read string $external_reference_id
 * @property-read LegalSettingsInput|array<array-key, mixed>|\stdClass $legal
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $surface
 * @property-read CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass $tax
 * @property-read ThemeConfigInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigInput|array<array-key, mixed>|\stdClass $tip
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionInput extends Model {
    /** @param array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'custom_text'?: CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass, 'customer_collection'?: CheckoutCustomerConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'expiration'?: CheckoutExpirationConfigInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'legal'?: LegalSettingsInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string>|\stdClass, 'order_id'?: string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects'?: CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass, 'surface': string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'theme'?: ThemeConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionInput')); }
    /** @return CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** @return CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** @return CheckoutCustomerConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_collection is omitted; use hasCustomerCollection() or valueOrDefault().
     */
    public function getCustomerCollection(): mixed { return $this->get('customer_collection'); }
    public function hasCustomerCollection(): bool { return $this->has('customer_collection'); }
    /** @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** @return CheckoutExpirationConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expiration is omitted; use hasExpiration() or valueOrDefault().
     */
    public function getExpiration(): mixed { return $this->get('expiration'); }
    public function hasExpiration(): bool { return $this->has('expiration'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return LegalSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** @return CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** @return CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** @return CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** @return ThemeConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** @return CheckoutTipConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
}
