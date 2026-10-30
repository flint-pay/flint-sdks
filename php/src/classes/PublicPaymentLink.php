<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $completed_count
 * @property-read ?list<PaymentLinkCustomField> $custom_fields
 * @property-read ?CheckoutCustomTextConfig $custom_text
 * @property-read ?string $description
 * @property-read ?MoneyValue $donation_max_amount_money
 * @property-read ?MoneyValue $donation_min_amount_money
 * @property-read ?list<MoneyValue> $donation_suggested_amount_money_options
 * @property-read ?PaymentLinkEventConfig $event_config
 * @property-read ?Image $image
 * @property-read ?string $inactive_message
 * @property-read ?CheckoutLegalConfig $legal
 * @property-read list<\stdClass|PublicPaymentLinkLineItemsItemBundle|PublicPaymentLinkLineItemsItemCustomFixed|PublicPaymentLinkLineItemsItemCustomVariable>|null $line_items
 * @property-read ?int $max_completions
 * @property-read string $name
 * @property-read string $payment_link_id
 * @property-read ?string $payment_link_type
 * @property-read ?CheckoutPaymentConfig $payments
 * @property-read ?string $sales_end_at
 * @property-read string $status
 * @property-read ?string $subscription_plan_id
 * @property-read ?ThemeConfig $theme
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PublicPaymentLink extends Model {
    /** @param array{'completed_count': int, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'image'?: mixed, 'inactive_message'?: string, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'payments'?: mixed, 'sales_end_at'?: string, 'status': string, 'subscription_plan_id'?: string, 'theme'?: mixed, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLink')); }
    /** Format: int32.
     * @return int
     */
    public function getCompletedCount(): int { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /**  [] (Value): {@see PaymentLinkCustomField}. A custom field on a payment link that collects an answer from the buyer, such as text, a dropdown, or a checkbox.
     * @return ?list<PaymentLinkCustomField>
     */
    public function getCustomFields(): ?array { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** Custom text shown in checkout: an order summary message and a shipping address label.
     * @return ?CheckoutCustomTextConfig
     */
    public function getCustomText(): ?CheckoutCustomTextConfig { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getDonationMaxAmountMoney(): ?MoneyValue { return $this->get('donation_max_amount_money'); }
    public function hasDonationMaxAmountMoney(): bool { return $this->has('donation_max_amount_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getDonationMinAmountMoney(): ?MoneyValue { return $this->get('donation_min_amount_money'); }
    public function hasDonationMinAmountMoney(): bool { return $this->has('donation_min_amount_money'); }
    /**  [] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?list<MoneyValue>
     */
    public function getDonationSuggestedAmountMoneyOptions(): ?array { return $this->get('donation_suggested_amount_money_options'); }
    public function hasDonationSuggestedAmountMoneyOptions(): bool { return $this->has('donation_suggested_amount_money_options'); }
    /** Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails.
     * @return ?PaymentLinkEventConfig
     */
    public function getEventConfig(): ?PaymentLinkEventConfig { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** inactive_message
     * @return ?string
     */
    public function getInactiveMessage(): ?string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return ?CheckoutLegalConfig
     */
    public function getLegal(): ?CheckoutLegalConfig { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /**  [] (Value): {@see PaymentLinkLineItem}. A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.
     * @return list<\stdClass|PublicPaymentLinkLineItemsItemBundle|PublicPaymentLinkLineItemsItemCustomFixed|PublicPaymentLinkLineItemsItemCustomVariable>|null
     */
    public function getLineItems(): ?array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Format: int32.
     * @return ?int
     */
    public function getMaxCompletions(): ?int { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** payment_link_id
     * @return string
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Value enum: "standard", "donation", "event".
     * @return ?string
     */
    public function getPaymentLinkType(): ?string { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return ?CheckoutPaymentConfig
     */
    public function getPayments(): ?CheckoutPaymentConfig { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: date-time.
     * @return ?string
     */
    public function getSalesEndAt(): ?string { return $this->get('sales_end_at'); }
    public function hasSalesEndAt(): bool { return $this->has('sales_end_at'); }
    /** Value enum: "active", "inactive".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** subscription_plan_id
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Colors and title applied to a payment link's checkout page.
     * @return ?ThemeConfig
     */
    public function getTheme(): ?ThemeConfig { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
