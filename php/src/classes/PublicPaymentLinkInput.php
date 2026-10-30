<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $completed_count
 * @property-read list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass> $custom_fields
 * @property-read CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_max_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_min_amount_money
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass $event_config
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $inactive_message
 * @property-read CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass $legal
 * @property-read list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $max_completions
 * @property-read string $name
 * @property-read string $payment_link_id
 * @property-read string $payment_link_type
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read string|\DateTimeInterface $sales_end_at
 * @property-read string $status
 * @property-read string $subscription_plan_id
 * @property-read ThemeConfigInput|array<array-key, mixed>|\stdClass $theme
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicPaymentLinkInput extends Model {
    /** @param array{'completed_count': int, 'custom_fields'?: list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass>, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'donation_max_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_min_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_suggested_amount_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'event_config'?: PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'inactive_message'?: string, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'line_items'?: list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass>, 'max_completions'?: int, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'sales_end_at'?: string|\DateTimeInterface, 'status': string, 'subscription_plan_id'?: string, 'theme'?: ThemeConfigInput|array<array-key, mixed>|\stdClass, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLinkInput')); }
    /** Format: int32.
     * @return int
     * @throws SdkError When completed_count is omitted; use hasCompletedCount() or valueOrDefault().
     */
    public function getCompletedCount(): int { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /**  [] (Value): {@see PaymentLinkCustomFieldInput}. A custom field on a payment link that collects an answer from the buyer, such as text, a dropdown, or a checkbox.
     * @return list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When custom_fields is omitted; use hasCustomFields() or valueOrDefault().
     */
    public function getCustomFields(): array { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** Custom text shown in checkout: an order summary message and a shipping address label.
     * @return CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** description
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When donation_max_amount_money is omitted; use hasDonationMaxAmountMoney() or valueOrDefault().
     */
    public function getDonationMaxAmountMoney(): mixed { return $this->get('donation_max_amount_money'); }
    public function hasDonationMaxAmountMoney(): bool { return $this->has('donation_max_amount_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When donation_min_amount_money is omitted; use hasDonationMinAmountMoney() or valueOrDefault().
     */
    public function getDonationMinAmountMoney(): mixed { return $this->get('donation_min_amount_money'); }
    public function hasDonationMinAmountMoney(): bool { return $this->has('donation_min_amount_money'); }
    /**  [] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When donation_suggested_amount_money_options is omitted; use hasDonationSuggestedAmountMoneyOptions() or valueOrDefault().
     */
    public function getDonationSuggestedAmountMoneyOptions(): array { return $this->get('donation_suggested_amount_money_options'); }
    public function hasDonationSuggestedAmountMoneyOptions(): bool { return $this->has('donation_suggested_amount_money_options'); }
    /** Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails.
     * @return PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When event_config is omitted; use hasEventConfig() or valueOrDefault().
     */
    public function getEventConfig(): mixed { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** inactive_message
     * @return string
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /**  [] (Value): {@see PaymentLinkLineItemInput}. A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.
     * @return list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When max_completions is omitted; use hasMaxCompletions() or valueOrDefault().
     */
    public function getMaxCompletions(): int { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** payment_link_id
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Value enum: "standard", "donation", "event".
     * @return string
     * @throws SdkError When payment_link_type is omitted; use hasPaymentLinkType() or valueOrDefault().
     */
    public function getPaymentLinkType(): string { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When sales_end_at is omitted; use hasSalesEndAt() or valueOrDefault().
     */
    public function getSalesEndAt(): string|\DateTimeInterface { return $this->get('sales_end_at'); }
    public function hasSalesEndAt(): bool { return $this->has('sales_end_at'); }
    /** Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** subscription_plan_id
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Colors and title applied to a payment link's checkout page.
     * @return ThemeConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
