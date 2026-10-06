<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass> $custom_fields
 * @property-read CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read PaymentLinkCustomerConfigInput|array<array-key, mixed>|\stdClass $customer_collection
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_max_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_min_amount_money
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass $event_config
 * @property-read CheckoutExpirationConfigInput|array<array-key, mixed>|\stdClass $expiration
 * @property-read string $external_reference_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $inactive_message
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read LegalSettingsInput|array<array-key, mixed>|\stdClass $legal
 * @property-read list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $max_completions
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $payment_link_type
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $subscription_plan_id
 * @property-read CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass $tax
 * @property-read ThemeConfigInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigInput|array<array-key, mixed>|\stdClass $tip
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkInput extends Model {
    /** @param array{'custom_fields'?: list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass>, 'custom_text'?: CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass, 'customer_collection'?: PaymentLinkCustomerConfigInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'donation_max_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_min_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_suggested_amount_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'event_config'?: PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass, 'expiration'?: CheckoutExpirationConfigInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'inactive_message'?: string, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'legal'?: LegalSettingsInput|array<array-key, mixed>|\stdClass, 'line_items'?: list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass>, 'max_completions'?: int, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'payment_link_type'?: string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects'?: CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass, 'subscription_plan_id'?: string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'theme'?: ThemeConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkInput')); }
    /** @return list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When custom_fields is omitted; use hasCustomFields() or valueOrDefault().
     */
    public function getCustomFields(): array { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** @return CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** @return PaymentLinkCustomerConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_collection is omitted; use hasCustomerCollection() or valueOrDefault().
     */
    public function getCustomerCollection(): mixed { return $this->get('customer_collection'); }
    public function hasCustomerCollection(): bool { return $this->has('customer_collection'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When donation_max_amount_money is omitted; use hasDonationMaxAmountMoney() or valueOrDefault().
     */
    public function getDonationMaxAmountMoney(): mixed { return $this->get('donation_max_amount_money'); }
    public function hasDonationMaxAmountMoney(): bool { return $this->has('donation_max_amount_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When donation_min_amount_money is omitted; use hasDonationMinAmountMoney() or valueOrDefault().
     */
    public function getDonationMinAmountMoney(): mixed { return $this->get('donation_min_amount_money'); }
    public function hasDonationMinAmountMoney(): bool { return $this->has('donation_min_amount_money'); }
    /** @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When donation_suggested_amount_money_options is omitted; use hasDonationSuggestedAmountMoneyOptions() or valueOrDefault().
     */
    public function getDonationSuggestedAmountMoneyOptions(): array { return $this->get('donation_suggested_amount_money_options'); }
    public function hasDonationSuggestedAmountMoneyOptions(): bool { return $this->has('donation_suggested_amount_money_options'); }
    /** @return PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When event_config is omitted; use hasEventConfig() or valueOrDefault().
     */
    public function getEventConfig(): mixed { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
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
    /** @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** @return string
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return LegalSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** @return list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return int
     * @throws SdkError When max_completions is omitted; use hasMaxCompletions() or valueOrDefault().
     */
    public function getMaxCompletions(): int { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When payment_link_type is omitted; use hasPaymentLinkType() or valueOrDefault().
     */
    public function getPaymentLinkType(): string { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
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
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
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
