<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass $buyer_fields
 * @property-read string $checkout_session_expires_in_seconds
 * @property-read list<PaymentLinkCustomFieldRequestInput|array<array-key, mixed>|\stdClass> $custom_fields
 * @property-read PaymentLinkCustomTextConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_max_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_min_amount_money
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfigRequestInput|array<array-key, mixed>|\stdClass $event_config
 * @property-read string $external_reference_id
 * @property-read ImageRequestInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $inactive_message
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read PaymentLinkLegalConfigInput|array<array-key, mixed>|\stdClass $legal
 * @property-read list<PaymentLinkLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $max_completions
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $payment_link_type
 * @property-read PaymentLinkPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string|\DateTimeInterface $sales_end_at
 * @property-read string $subscription_plan_id
 * @property-read CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass $tax
 * @property-read PaymentLinkThemeConfigInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigInput|array<array-key, mixed>|\stdClass $tip
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePaymentLinkRequestInput extends Model {
    /** @param array{'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'checkout_session_expires_in_seconds'?: string, 'custom_fields'?: list<PaymentLinkCustomFieldRequestInput|array<array-key, mixed>|\stdClass>, 'custom_text'?: PaymentLinkCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids'?: list<string>, 'description'?: string, 'donation_max_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_min_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_suggested_amount_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'event_config'?: PaymentLinkEventConfigRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'image'?: ImageRequestInput|array<array-key, mixed>|\stdClass, 'inactive_message'?: string, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'legal'?: PaymentLinkLegalConfigInput|array<array-key, mixed>|\stdClass, 'line_items'?: list<PaymentLinkLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'max_completions'?: int, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'payment_link_type'?: string, 'payments'?: PaymentLinkPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects'?: CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass, 'sales_end_at'?: string|\DateTimeInterface, 'subscription_plan_id'?: string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'theme'?: PaymentLinkThemeConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePaymentLinkRequestInput')); }
    /** Shape $ (Value): {@see CheckoutBuyerFieldsInput}. What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_fields is omitted; use hasBuyerFields() or valueOrDefault().
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Shape $ (Value): integer string. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     * @return string
     * @throws SdkError When checkout_session_expires_in_seconds is omitted; use hasCheckoutSessionExpiresInSeconds() or valueOrDefault().
     */
    public function getCheckoutSessionExpiresInSeconds(): string { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** Shape $ (Value): Array of {@see PaymentLinkCustomFieldRequestInput}. maxItems: 20. Shape $[] (Value): {@see PaymentLinkCustomFieldRequestInput}. A custom field you add to a payment link when creating it.
     * @return list<PaymentLinkCustomFieldRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When custom_fields is omitted; use hasCustomFields() or valueOrDefault().
     */
    public function getCustomFields(): array { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** Shape $ (Value): {@see PaymentLinkCustomTextConfigInput}. Custom text shown on a payment link's checkout, such as the order summary message and shipping address label.
     * @return PaymentLinkCustomTextConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Shape $ (Value): Array of string. Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When donation_max_amount_money is omitted; use hasDonationMaxAmountMoney() or valueOrDefault().
     */
    public function getDonationMaxAmountMoney(): mixed { return $this->get('donation_max_amount_money'); }
    public function hasDonationMaxAmountMoney(): bool { return $this->has('donation_max_amount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When donation_min_amount_money is omitted; use hasDonationMinAmountMoney() or valueOrDefault().
     */
    public function getDonationMinAmountMoney(): mixed { return $this->get('donation_min_amount_money'); }
    public function hasDonationMinAmountMoney(): bool { return $this->has('donation_min_amount_money'); }
    /** Shape $ (Value): Array of {@see MoneyValueInput}. Shape $[] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When donation_suggested_amount_money_options is omitted; use hasDonationSuggestedAmountMoneyOptions() or valueOrDefault().
     */
    public function getDonationSuggestedAmountMoneyOptions(): array { return $this->get('donation_suggested_amount_money_options'); }
    public function hasDonationSuggestedAmountMoneyOptions(): bool { return $this->has('donation_suggested_amount_money_options'); }
    /** Shape $ (Value): {@see PaymentLinkEventConfigRequestInput}. Event settings you supply when creating an event payment link.
     * @return PaymentLinkEventConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When event_config is omitted; use hasEventConfig() or valueOrDefault().
     */
    public function getEventConfig(): mixed { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference.
     * @return ImageRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Shape $ (Value): {@see InventoryRoutingSourceRequestInput}. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Shape $ (Value): {@see PaymentLinkLegalConfigInput}. Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.
     * @return PaymentLinkLegalConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Shape $ (Value): Array of {@see PaymentLinkLineItemRequestInput}. Shape $[] (Value): {@see PaymentLinkLineItemRequestInput}. A line item you add to a payment link when creating it, from a catalog variant, a bundle, or an ad hoc name and price.
     * @return list<PaymentLinkLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When max_completions is omitted; use hasMaxCompletions() or valueOrDefault().
     */
    public function getMaxCompletions(): int { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: 44. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Payment link type. Omit to use standard. Explicit values must be standard, donation, or event; empty or padded values are invalid. Default: "standard". Value enum: "standard", "donation", "event".
     * @return string
     * @throws SdkError When payment_link_type is omitted; use hasPaymentLinkType() or valueOrDefault().
     */
    public function getPaymentLinkType(): string { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Shape $ (Value): {@see PaymentLinkPaymentConfigInput}. Payment settings on a payment link: the enabled payment options and a note shown with payment.
     * @return PaymentLinkPaymentConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Shape $ (Value): {@see CheckoutPromotionConfigInput}. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Shape $ (Value): {@see CheckoutRedirectsRequestInput}. Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * @return CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When sales_end_at is omitted; use hasSalesEndAt() or valueOrDefault().
     */
    public function getSalesEndAt(): string|\DateTimeInterface { return $this->get('sales_end_at'); }
    public function hasSalesEndAt(): bool { return $this->has('sales_end_at'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): {@see CheckoutTaxConfigInput}. Whether tax is collected for a checkout session or payment link.
     * @return CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see PaymentLinkThemeConfigInput}. Theme settings for a payment link's checkout: accent color, primary color, and title.
     * @return PaymentLinkThemeConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Shape $ (Value): {@see CheckoutTipConfigInput}. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return CheckoutTipConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
}
