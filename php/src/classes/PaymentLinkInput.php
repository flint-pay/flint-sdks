<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass $buyer_fields
 * @property-read string $checkout_session_expires_in_seconds
 * @property-read int $completed_count
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass> $custom_fields
 * @property-read CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_max_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $donation_min_amount_money
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass $event_config
 * @property-read string $external_reference_id
 * @property-read ImageAttachmentInput|array<array-key, mixed>|\stdClass $image
 * @property-read string $inactive_message
 * @property-read InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass $legal
 * @property-read list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $max_completions
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $payment_link_id
 * @property-read string $payment_link_type
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutRedirectsInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string|\DateTimeInterface $sales_end_at
 * @property-read PaymentLinkSalesSummaryInput|array<array-key, mixed>|\stdClass $sales_summary
 * @property-read string $status
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $subscription_plan
 * @property-read string $subscription_plan_id
 * @property-read CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass $tax
 * @property-read ThemeConfigInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigInput|array<array-key, mixed>|\stdClass $tip
 * @property-read int $total_quantity_sold
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $url
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkInput extends Model {
    /** @param array{'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'checkout_session_expires_in_seconds'?: string, 'completed_count': int, 'created_at'?: string|\DateTimeInterface, 'custom_fields'?: list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass>, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'description'?: string, 'donation_max_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_min_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'donation_suggested_amount_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'event_config'?: PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'image'?: ImageAttachmentInput|array<array-key, mixed>|\stdClass, 'inactive_message'?: string, 'inventory_routing_source'?: InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'line_items'?: list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass>, 'max_completions'?: int, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects'?: CheckoutRedirectsInput|array<array-key, mixed>|\stdClass, 'sales_end_at'?: string|\DateTimeInterface, 'sales_summary'?: PaymentLinkSalesSummaryInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan'?: array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'subscription_plan_id'?: string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'theme'?: ThemeConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, 'total_quantity_sold': int, 'updated_at'?: string|\DateTimeInterface, 'url': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkInput')); }
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
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When completed_count is omitted; use hasCompletedCount() or valueOrDefault().
     */
    public function getCompletedCount(): int { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Array of {@see PaymentLinkCustomFieldInput}. Shape $[] (Value): {@see PaymentLinkCustomFieldInput}. A custom field on a payment link that collects an answer from the buyer, such as text, a dropdown, or a checkbox.
     * @return list<PaymentLinkCustomFieldInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When custom_fields is omitted; use hasCustomFields() or valueOrDefault().
     */
    public function getCustomFields(): array { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** Shape $ (Value): {@see CheckoutCustomTextConfigInput}. Custom text shown in checkout: an order summary message and a shipping address label.
     * @return CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Shape $ (Value): Array of string. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shape $ (Value): string.
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
    /** Shape $ (Value): {@see PaymentLinkEventConfigInput}. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails.
     * @return PaymentLinkEventConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When event_config is omitted; use hasEventConfig() or valueOrDefault().
     */
    public function getEventConfig(): mixed { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata.
     * @return ImageAttachmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Shape $ (Value): {@see InventoryRoutingSourceInput}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
     * @return InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Shape $ (Value): {@see CheckoutLegalConfigInput}. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Shape $ (Value): Array of {@see PaymentLinkLineItemInput}. Shape $[] (Value): {@see PaymentLinkLineItemInput}. A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.
     * @return list<PaymentLinkLineItemInput|array<array-key, mixed>|\stdClass>
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
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Shape $ (Value): string.  Value enum: "standard", "donation", "event".
     * @return string
     * @throws SdkError When payment_link_type is omitted; use hasPaymentLinkType() or valueOrDefault().
     */
    public function getPaymentLinkType(): string { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Shape $ (Value): {@see CheckoutPaymentConfigInput}. Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass
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
    /** Shape $ (Value): {@see CheckoutRedirectsInput}. Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * @return CheckoutRedirectsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When sales_end_at is omitted; use hasSalesEndAt() or valueOrDefault().
     */
    public function getSalesEndAt(): string|\DateTimeInterface { return $this->get('sales_end_at'); }
    public function hasSalesEndAt(): bool { return $this->has('sales_end_at'); }
    /** Shape $ (Value): {@see PaymentLinkSalesSummaryInput}. Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions.
     * @return PaymentLinkSalesSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When sales_summary is omitted; use hasSalesSummary() or valueOrDefault().
     */
    public function getSalesSummary(): mixed { return $this->get('sales_summary'); }
    public function hasSalesSummary(): bool { return $this->has('sales_summary'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see ExpandedSubscriptionPlanSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummaryInput}. A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): mixed { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** Shape $ (Value): string.
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
    /** Shape $ (Value): {@see ThemeConfigInput}. Colors and title applied to a payment link's checkout page.
     * @return ThemeConfigInput|array<array-key, mixed>|\stdClass
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
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When total_quantity_sold is omitted; use hasTotalQuantitySold() or valueOrDefault().
     */
    public function getTotalQuantitySold(): int { return $this->get('total_quantity_sold'); }
    public function hasTotalQuantitySold(): bool { return $this->has('total_quantity_sold'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
