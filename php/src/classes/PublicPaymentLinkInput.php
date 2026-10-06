<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $completed_count
 * @property-read list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass> $custom_fields
 * @property-read CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_max_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_min_amount_money
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass $event_config
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $inactive_message
 * @property-read LegalSettingsInput|array<array-key, mixed>|\stdClass $legal
 * @property-read list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $max_completions
 * @property-read string $name
 * @property-read string $payment_link_id
 * @property-read string $payment_link_type
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read string $status
 * @property-read string $subscription_plan_id
 * @property-read ThemeConfigInput|array<array-key, mixed>|\stdClass $theme
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicPaymentLinkInput extends Model {
    /** @param array{'completed_count': int, 'custom_fields'?: list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass>, 'custom_text'?: CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'donation_max_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_min_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_suggested_amount_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'event_config'?: PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'inactive_message'?: string, 'legal'?: LegalSettingsInput|array<array-key, mixed>|\stdClass, 'line_items'?: list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass>, 'max_completions'?: int, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id'?: string, 'theme'?: ThemeConfigInput|array<array-key, mixed>|\stdClass, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLinkInput')); }
    /** @return int
     * @throws SdkError When completed_count is omitted; use hasCompletedCount() or valueOrDefault().
     */
    public function getCompletedCount(): int { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
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
    /** @return CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** @return ThemeConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
