<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CheckoutBuyerFields $buyer_fields
 * @property-read ?int $checkout_session_expires_in_seconds
 * @property-read int $completed_count
 * @property-read ?string $created_at
 * @property-read ?list<PaymentLinkCustomField> $custom_fields
 * @property-read ?CheckoutCustomTextConfig $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read ?string $description
 * @property-read ?MoneyValue $donation_max_amount_money
 * @property-read ?MoneyValue $donation_min_amount_money
 * @property-read ?list<MoneyValue> $donation_suggested_amount_money_options
 * @property-read ?PaymentLinkEventConfig $event_config
 * @property-read ?string $external_reference_id
 * @property-read ?ImageAttachment $image
 * @property-read ?string $inactive_message
 * @property-read ?InventoryRoutingSource $inventory_routing_source
 * @property-read ?CheckoutLegalConfig $legal
 * @property-read list<\stdClass|PaymentLinkLineItemsItemBundle|PaymentLinkLineItemsItemCustomFixed|PaymentLinkLineItemsItemCustomVariable>|null $line_items
 * @property-read ?int $max_completions
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $payment_link_id
 * @property-read ?string $payment_link_type
 * @property-read ?CheckoutPaymentConfig $payments
 * @property-read ?CheckoutPromotionConfig $promotion_config
 * @property-read ?CheckoutRedirects $redirects
 * @property-read ?string $sales_end_at
 * @property-read ?PaymentLinkSalesSummary $sales_summary
 * @property-read string $status
 * @property-read ExpandedSubscriptionPlanSummary|null $subscription_plan
 * @property-read ?string $subscription_plan_id
 * @property-read ?CheckoutTaxConfig $tax
 * @property-read ?ThemeConfig $theme
 * @property-read ?CheckoutTipConfig $tip
 * @property-read int $total_quantity_sold
 * @property-read ?string $updated_at
 * @property-read string $url
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLink extends Model {
    /** @param array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: int, 'completed_count': int, 'created_at'?: string, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids': list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'merchant_id'?: string, 'metadata'?: mixed, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string, 'sales_summary'?: mixed, 'status': string, 'subscription_plan'?: mixed, 'subscription_plan_id'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'total_quantity_sold': int, 'updated_at'?: string, 'url': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLink')); }
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return ?CheckoutBuyerFields
     */
    public function getBuyerFields(): ?CheckoutBuyerFields { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
     * @return ?int
     */
    public function getCheckoutSessionExpiresInSeconds(): ?int { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** Format: int32.
     * @return int
     */
    public function getCompletedCount(): int { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
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
    /** Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. [] (Value): string.
     * @return list<string>
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
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
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** An image attached to a resource, with its display properties and attachment metadata.
     * @return ?ImageAttachment
     */
    public function getImage(): ?ImageAttachment { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** inactive_message
     * @return ?string
     */
    public function getInactiveMessage(): ?string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
     * @return ?InventoryRoutingSource
     */
    public function getInventoryRoutingSource(): ?InventoryRoutingSource { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return ?CheckoutLegalConfig
     */
    public function getLegal(): ?CheckoutLegalConfig { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /**  [] (Value): {@see PaymentLinkLineItem}. A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.
     * @return list<\stdClass|PaymentLinkLineItemsItemBundle|PaymentLinkLineItemsItemCustomFixed|PaymentLinkLineItemsItemCustomVariable>|null
     */
    public function getLineItems(): ?array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Format: int32.
     * @return ?int
     */
    public function getMaxCompletions(): ?int { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** merchant_id
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
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
    /** Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return ?CheckoutPromotionConfig
     */
    public function getPromotionConfig(): ?CheckoutPromotionConfig { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * @return ?CheckoutRedirects
     */
    public function getRedirects(): ?CheckoutRedirects { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: date-time.
     * @return ?string
     */
    public function getSalesEndAt(): ?string { return $this->get('sales_end_at'); }
    public function hasSalesEndAt(): bool { return $this->has('sales_end_at'); }
    /** Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions.
     * @return ?PaymentLinkSalesSummary
     */
    public function getSalesSummary(): ?PaymentLinkSalesSummary { return $this->get('sales_summary'); }
    public function hasSalesSummary(): bool { return $this->has('sales_summary'); }
    /** Value enum: "active", "inactive".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded. anyOf[2] (Value): null.
     * @return ExpandedSubscriptionPlanSummary|null
     */
    public function getSubscriptionPlan(): ExpandedSubscriptionPlanSummary|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** subscription_plan_id
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Whether tax is collected for a checkout session or payment link.
     * @return ?CheckoutTaxConfig
     */
    public function getTax(): ?CheckoutTaxConfig { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Colors and title applied to a payment link's checkout page.
     * @return ?ThemeConfig
     */
    public function getTheme(): ?ThemeConfig { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return ?CheckoutTipConfig
     */
    public function getTip(): ?CheckoutTipConfig { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getTotalQuantitySold(): int { return $this->get('total_quantity_sold'); }
    public function hasTotalQuantitySold(): bool { return $this->has('total_quantity_sold'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** url
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
