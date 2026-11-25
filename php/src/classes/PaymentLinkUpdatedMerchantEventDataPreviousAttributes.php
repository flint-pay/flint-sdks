<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerFieldsPreviousAttributes|null $buyer_fields
 * @property-read int|null $checkout_session_expires_in_seconds
 * @property-read int|null $completed_count
 * @property-read string|null $created_at
 * @property-read list<PaymentLinkCustomFieldPreviousAttributes>|null $custom_fields
 * @property-read CheckoutCustomTextConfigPreviousAttributes|null $custom_text
 * @property-read list<string>|null $delivery_method_ids
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributes|null $donation_max_amount_money
 * @property-read MoneyValuePreviousAttributes|null $donation_min_amount_money
 * @property-read list<MoneyValuePreviousAttributes>|null $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfigPreviousAttributes|null $event_config
 * @property-read string|null $external_reference_id
 * @property-read ImageAttachmentPreviousAttributes|null $image
 * @property-read string|null $inactive_message
 * @property-read InventoryRoutingSourcePreviousAttributes|null $inventory_routing_source
 * @property-read CheckoutLegalConfigPreviousAttributes|null $legal
 * @property-read list<\stdClass>|null $line_items
 * @property-read int|null $max_completions
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $payment_link_id
 * @property-read string|null $payment_link_type
 * @property-read CheckoutPaymentConfigPreviousAttributes|null $payments
 * @property-read PlatformFeeRulePreviousAttributes|null $platform_fee_rule
 * @property-read CheckoutPromotionConfigPreviousAttributes|null $promotion_config
 * @property-read CheckoutRedirectsPreviousAttributes|null $redirects
 * @property-read string|null $sales_end_at
 * @property-read string|null $sales_start_at
 * @property-read PaymentLinkSalesSummaryPreviousAttributes|null $sales_summary
 * @property-read string|null $status
 * @property-read ExpandedSubscriptionPlanSummaryPreviousAttributes|null $subscription_plan
 * @property-read string|null $subscription_plan_id
 * @property-read CheckoutTaxConfigPreviousAttributes|null $tax
 * @property-read ThemeConfigPreviousAttributes|null $theme
 * @property-read CheckoutTipConfigPreviousAttributes|null $tip
 * @property-read int|null $total_quantity_sold
 * @property-read string|null $updated_at
 * @property-read string|null $url
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: mixed, 'completed_count'?: mixed, 'created_at'?: mixed, 'custom_fields'?: mixed, 'custom_text'?: mixed, 'delivery_method_ids'?: mixed, 'description'?: mixed, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: mixed, 'event_config'?: mixed, 'external_reference_id'?: mixed, 'image'?: mixed, 'inactive_message'?: mixed, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: mixed, 'max_completions'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'payment_link_id'?: mixed, 'payment_link_type'?: mixed, 'payments'?: mixed, 'platform_fee_rule'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: mixed, 'sales_start_at'?: mixed, 'sales_summary'?: mixed, 'status'?: mixed, 'subscription_plan'?: mixed, 'subscription_plan_id'?: mixed, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'total_quantity_sold'?: mixed, 'updated_at'?: mixed, 'url'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkUpdatedMerchantEventDataPreviousAttributes')); }
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. anyOf[1] (Value): {@see CheckoutBuyerFieldsPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutBuyerFieldsPreviousAttributes|null
     */
    public function getBuyerFields(): CheckoutBuyerFieldsPreviousAttributes|null { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. anyOf[1] (Value): integer. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum: 60. maximum: 86400. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCheckoutSessionExpiresInSeconds(): int|null { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** Number of paid checkout sessions started from this link. anyOf[1] (Value): integer. Number of paid checkout sessions started from this link. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCompletedCount(): int|null { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. anyOf[1] (Value): Array of {@see PaymentLinkCustomFieldPreviousAttributes}. Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. anyOf[1][] (Value): {@see PaymentLinkCustomFieldPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PaymentLinkCustomFieldPreviousAttributes>|null
     */
    public function getCustomFields(): array|null { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** Custom text for checkouts started from this link. anyOf[1] (Value): {@see CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutCustomTextConfigPreviousAttributes|null
     */
    public function getCustomText(): CheckoutCustomTextConfigPreviousAttributes|null { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. anyOf[1] (Value): Array of string. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDeliveryMethodIds(): array|null { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Text about what the link sells, returned to buyers when they open it. anyOf[1] (Value): string. Text about what the link sells, returned to buyers when they open it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Largest amount a buyer can give on a donation link. Must be greater than zero and greater than or equal to donation_min_amount_money. Omit on create for no maximum. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDonationMaxAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('donation_max_amount_money'); }
    public function hasDonationMaxAmountMoney(): bool { return $this->has('donation_max_amount_money'); }
    /** Smallest amount a buyer can give on a donation link. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDonationMinAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('donation_min_amount_money'); }
    public function hasDonationMinAmountMoney(): bool { return $this->has('donation_min_amount_money'); }
    /** Amounts a donation link offers as one-tap choices. Use the same currency for all suggested amounts and both bounds. anyOf[1] (Value): Array of {@see MoneyValuePreviousAttributes}. Amounts a donation link offers as one-tap choices. Use the same currency for all suggested amounts and both bounds. anyOf[1][] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<MoneyValuePreviousAttributes>|null
     */
    public function getDonationSuggestedAmountMoneyOptions(): array|null { return $this->get('donation_suggested_amount_money_options'); }
    public function hasDonationSuggestedAmountMoneyOptions(): bool { return $this->has('donation_suggested_amount_money_options'); }
    /** Event details for an `event` link: when and where it takes place and how many tickets it sells. anyOf[1] (Value): {@see PaymentLinkEventConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentLinkEventConfigPreviousAttributes|null
     */
    public function getEventConfig(): PaymentLinkEventConfigPreviousAttributes|null { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Image shown to buyers with the link. anyOf[1] (Value): {@see ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
     * @return ImageAttachmentPreviousAttributes|null
     */
    public function getImage(): ImageAttachmentPreviousAttributes|null { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Message to show the buyer when the link is inactive. anyOf[1] (Value): string. Message to show the buyer when the link is inactive. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInactiveMessage(): string|null { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** The inventory location or routing policy that supplies stock for the link's catalog lines. Absent when using the implicit single-Location fallback, which is evaluated again on use. anyOf[1] (Value): {@see InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return InventoryRoutingSourcePreviousAttributes|null
     */
    public function getInventoryRoutingSource(): InventoryRoutingSourcePreviousAttributes|null { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** The terms and policy links checkouts started from this link show the buyer. anyOf[1] (Value): {@see CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutLegalConfigPreviousAttributes|null
     */
    public function getLegal(): CheckoutLegalConfigPreviousAttributes|null { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** What the link sells. anyOf[1] (Value): Array of {@see PaymentLinkLineItemPreviousAttributes}. What the link sells. anyOf[1][] (Value): {@see PaymentLinkLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<\stdClass>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. anyOf[1] (Value): integer. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxCompletions(): int|null { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name of the payment link. anyOf[1] (Value): string. Name of the payment link. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this payment link, prefixed `pl_`. anyOf[1] (Value): string. Unique identifier for this payment link, prefixed `pl_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkId(): string|null { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** What kind of link this is. Value enum: "standard", "donation", "event". anyOf[1] (Value): string. What kind of link this is. Value enum: "standard", "donation", "event". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkType(): string|null { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Payment options for checkouts started from this link. anyOf[1] (Value): {@see CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutPaymentConfigPreviousAttributes|null
     */
    public function getPayments(): CheckoutPaymentConfigPreviousAttributes|null { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** The platform fee rule copied to checkouts started from this link. anyOf[1] (Value): {@see PlatformFeeRulePreviousAttributes}. anyOf[2] (Value): null.
     * @return PlatformFeeRulePreviousAttributes|null
     */
    public function getPlatformFeeRule(): PlatformFeeRulePreviousAttributes|null { return $this->get('platform_fee_rule'); }
    public function hasPlatformFeeRule(): bool { return $this->has('platform_fee_rule'); }
    /** Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. anyOf[1] (Value): {@see CheckoutPromotionConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutPromotionConfigPreviousAttributes|null
     */
    public function getPromotionConfig(): CheckoutPromotionConfigPreviousAttributes|null { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. anyOf[1] (Value): {@see CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutRedirectsPreviousAttributes|null
     */
    public function getRedirects(): CheckoutRedirectsPreviousAttributes|null { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. anyOf[1] (Value): string. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSalesEndAt(): string|null { return $this->get('sales_end_at'); }
    public function hasSalesEndAt(): bool { return $this->has('sales_end_at'); }
    /** RFC3339 timestamp when buyers can first start a checkout from this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end, including the event start when no explicit end is set. anyOf[1] (Value): string. RFC3339 timestamp when buyers can first start a checkout from this link. Stored to nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end, including the event start when no explicit end is set. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSalesStartAt(): string|null { return $this->get('sales_start_at'); }
    public function hasSalesStartAt(): bool { return $this->has('sales_start_at'); }
    /** Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. anyOf[1] (Value): {@see PaymentLinkSalesSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentLinkSalesSummaryPreviousAttributes|null
     */
    public function getSalesSummary(): PaymentLinkSalesSummaryPreviousAttributes|null { return $this->get('sales_summary'); }
    public function hasSalesSummary(): bool { return $this->has('sales_summary'); }
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[1] (Value): string. Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedSubscriptionPlanSummaryPreviousAttributes|null
     */
    public function getSubscriptionPlan(): ExpandedSubscriptionPlanSummaryPreviousAttributes|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. anyOf[1] (Value): string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Tax settings for checkouts started from this link. anyOf[1] (Value): {@see CheckoutTaxConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutTaxConfigPreviousAttributes|null
     */
    public function getTax(): CheckoutTaxConfigPreviousAttributes|null { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** The title and colors for checkouts started from this link, over your branding settings. anyOf[1] (Value): {@see ThemeConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return ThemeConfigPreviousAttributes|null
     */
    public function getTheme(): ThemeConfigPreviousAttributes|null { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Tip options for checkouts started from this link. anyOf[1] (Value): {@see CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutTipConfigPreviousAttributes|null
     */
    public function getTip(): CheckoutTipConfigPreviousAttributes|null { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getTotalQuantitySold(): int|null { return $this->get('total_quantity_sold'); }
    public function hasTotalQuantitySold(): bool { return $this->has('total_quantity_sold'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** URL buyers open to use the link. anyOf[1] (Value): string. URL buyers open to use the link. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUrl(): string|null { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
