<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $completed_count
 * @property-read string $created_at
 * @property-read list<PaymentLinkCustomField> $custom_fields
 * @property-read CheckoutCustomTextWriteConfig $custom_text
 * @property-read PaymentLinkCustomerConfig $customer_collection
 * @property-read list<string> $delivery_method_ids
 * @property-read string $description
 * @property-read MoneyValue $donation_max_amount_money
 * @property-read MoneyValue $donation_min_amount_money
 * @property-read list<MoneyValue> $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfig $event_config
 * @property-read CheckoutExpirationConfig $expiration
 * @property-read string $external_reference_id
 * @property-read Image $image
 * @property-read string $inactive_message
 * @property-read PaymentLinkInventoryRoutingSourceFixedLocation|PaymentLinkInventoryRoutingSourcePolicy|PaymentLinkInventoryRoutingSourcePolicyVersion|\stdClass $inventory_routing_source
 * @property-read LegalSettings $legal
 * @property-read list<\stdClass> $line_items
 * @property-read int $max_completions
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $payment_link_id
 * @property-read string $payment_link_type
 * @property-read CheckoutPaymentConfig $payments
 * @property-read string $plan_id
 * @property-read CheckoutPromotionConfig $promotion_config
 * @property-read CheckoutRedirectsConfig $redirects
 * @property-read string $status
 * @property-read ExpandedSubscriptionPlanSummary|null $subscription_plan
 * @property-read CheckoutTaxConfig $tax
 * @property-read ThemeConfig $theme
 * @property-read CheckoutTipConfig $tip
 * @property-read int $total_quantity_sold
 * @property-read string $updated_at
 * @property-read string $url
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentLink extends Model {
    /** @param array{'completed_count': int, 'created_at'?: string, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'customer_collection'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expiration'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'merchant_id'?: string, 'metadata'?: \stdClass, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'payments'?: mixed, 'plan_id'?: string, 'promotion_config'?: mixed, 'redirects'?: mixed, 'status': string, 'subscription_plan'?: mixed, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'total_quantity_sold'?: int, 'updated_at'?: string, 'url': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLink')); }
    /** @return int
     * @throws SdkError When completed_count is omitted; use hasCompletedCount() or valueOrDefault().
     */
    public function getCompletedCount(): int { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return list<PaymentLinkCustomField>
     * @throws SdkError When custom_fields is omitted; use hasCustomFields() or valueOrDefault().
     */
    public function getCustomFields(): array { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** @return CheckoutCustomTextWriteConfig
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): CheckoutCustomTextWriteConfig { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** @return PaymentLinkCustomerConfig
     * @throws SdkError When customer_collection is omitted; use hasCustomerCollection() or valueOrDefault().
     */
    public function getCustomerCollection(): PaymentLinkCustomerConfig { return $this->get('customer_collection'); }
    public function hasCustomerCollection(): bool { return $this->has('customer_collection'); }
    /** @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return MoneyValue
     * @throws SdkError When donation_max_amount_money is omitted; use hasDonationMaxAmountMoney() or valueOrDefault().
     */
    public function getDonationMaxAmountMoney(): MoneyValue { return $this->get('donation_max_amount_money'); }
    public function hasDonationMaxAmountMoney(): bool { return $this->has('donation_max_amount_money'); }
    /** @return MoneyValue
     * @throws SdkError When donation_min_amount_money is omitted; use hasDonationMinAmountMoney() or valueOrDefault().
     */
    public function getDonationMinAmountMoney(): MoneyValue { return $this->get('donation_min_amount_money'); }
    public function hasDonationMinAmountMoney(): bool { return $this->has('donation_min_amount_money'); }
    /** @return list<MoneyValue>
     * @throws SdkError When donation_suggested_amount_money_options is omitted; use hasDonationSuggestedAmountMoneyOptions() or valueOrDefault().
     */
    public function getDonationSuggestedAmountMoneyOptions(): array { return $this->get('donation_suggested_amount_money_options'); }
    public function hasDonationSuggestedAmountMoneyOptions(): bool { return $this->has('donation_suggested_amount_money_options'); }
    /** @return PaymentLinkEventConfig
     * @throws SdkError When event_config is omitted; use hasEventConfig() or valueOrDefault().
     */
    public function getEventConfig(): PaymentLinkEventConfig { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
    /** @return CheckoutExpirationConfig
     * @throws SdkError When expiration is omitted; use hasExpiration() or valueOrDefault().
     */
    public function getExpiration(): CheckoutExpirationConfig { return $this->get('expiration'); }
    public function hasExpiration(): bool { return $this->has('expiration'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return Image
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** @return string
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** @return PaymentLinkInventoryRoutingSourceFixedLocation|PaymentLinkInventoryRoutingSourcePolicy|PaymentLinkInventoryRoutingSourcePolicyVersion|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): PaymentLinkInventoryRoutingSourceFixedLocation|PaymentLinkInventoryRoutingSourcePolicy|PaymentLinkInventoryRoutingSourcePolicyVersion|\stdClass { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return LegalSettings
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): LegalSettings { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** @return list<\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return int
     * @throws SdkError When max_completions is omitted; use hasMaxCompletions() or valueOrDefault().
     */
    public function getMaxCompletions(): int { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** @return string
     * @throws SdkError When payment_link_type is omitted; use hasPaymentLinkType() or valueOrDefault().
     */
    public function getPaymentLinkType(): string { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** @return CheckoutPaymentConfig
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): CheckoutPaymentConfig { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** @return string
     * @throws SdkError When plan_id is omitted; use hasPlanId() or valueOrDefault().
     */
    public function getPlanId(): string { return $this->get('plan_id'); }
    public function hasPlanId(): bool { return $this->has('plan_id'); }
    /** @return CheckoutPromotionConfig
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): CheckoutPromotionConfig { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** @return CheckoutRedirectsConfig
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): CheckoutRedirectsConfig { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return ExpandedSubscriptionPlanSummary|null
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): ExpandedSubscriptionPlanSummary|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** @return CheckoutTaxConfig
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): CheckoutTaxConfig { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** @return ThemeConfig
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): ThemeConfig { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** @return CheckoutTipConfig
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): CheckoutTipConfig { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** @return int
     * @throws SdkError When total_quantity_sold is omitted; use hasTotalQuantitySold() or valueOrDefault().
     */
    public function getTotalQuantitySold(): int { return $this->get('total_quantity_sold'); }
    public function hasTotalQuantitySold(): bool { return $this->has('total_quantity_sold'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
