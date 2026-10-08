<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read CheckoutCustomerConfigInput|array<array-key, mixed>|\stdClass $customer_collection
 * @property-read list<string> $delivery_method_ids
 * @property-read CheckoutExpirationConfigInput|array<array-key, mixed>|\stdClass $expiration
 * @property-read string $external_reference_id
 * @property-read LegalSettingsInput|array<array-key, mixed>|\stdClass $legal
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read string $page_origin
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutQuickPayItemRequestInput|array<array-key, mixed>|\stdClass $quick_pay_item
 * @property-read CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $replace_checkout_session_id
 * @property-read string $subscription_plan_id
 * @property-read CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass $subscription_terms
 * @property-read string $surface
 * @property-read CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass $tax
 * @property-read ThemeConfigInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigInput|array<array-key, mixed>|\stdClass $tip
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionRequestInput')); }
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
    /** @return string
     * @throws SdkError When page_origin is omitted; use hasPageOrigin() or valueOrDefault().
     */
    public function getPageOrigin(): string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
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
    /** @return CheckoutQuickPayItemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When quick_pay_item is omitted; use hasQuickPayItem() or valueOrDefault().
     */
    public function getQuickPayItem(): mixed { return $this->get('quick_pay_item'); }
    public function hasQuickPayItem(): bool { return $this->has('quick_pay_item'); }
    /** @return CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** @return string
     * @throws SdkError When replace_checkout_session_id is omitted; use hasReplaceCheckoutSessionId() or valueOrDefault().
     */
    public function getReplaceCheckoutSessionId(): string { return $this->get('replace_checkout_session_id'); }
    public function hasReplaceCheckoutSessionId(): bool { return $this->has('replace_checkout_session_id'); }
    /** @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** @return CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_terms is omitted; use hasSubscriptionTerms() or valueOrDefault().
     */
    public function getSubscriptionTerms(): mixed { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
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
