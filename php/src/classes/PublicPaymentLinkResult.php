<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CheckoutTheme $checkout_theme
 * @property-read bool $is_sold_out
 * @property-read ?Image $merchant_icon
 * @property-read ?Image $merchant_logo
 * @property-read ?string $merchant_name
 * @property-read PublicPaymentLink $payment_link
 * @property-read ?int $remaining_quantity
 * @property-read string $resolution_context
 * @property-read string $resolution_context_expires_at
 * @property-read string $resolution_context_start_deadline_at
 * @property-read ?list<PublicResolvedLineItemInfo> $resolved_line_items
 * @property-read bool $sales_ended
 * @property-read bool $show_flint_mark
 * @property-read ?PaymentLinkSubscriptionPreview $subscription_preview
 * Presence-aware response; omitted optional fields return null. */
final class PublicPaymentLinkResult extends Model {
    /** @param array{'checkout_theme'?: mixed, 'is_sold_out': bool, 'merchant_icon'?: mixed, 'merchant_logo'?: mixed, 'merchant_name'?: string, 'payment_link': mixed, 'remaining_quantity'?: int, 'resolution_context': string, 'resolution_context_expires_at': string, 'resolution_context_start_deadline_at': string, 'resolved_line_items'?: list<mixed>, 'sales_ended': bool, 'show_flint_mark': bool, 'subscription_preview'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLinkResult')); }
    /** The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. It includes the branding settings' `background_color`, `text_color`, `font_family`, and `corner_radius`. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return ?CheckoutTheme
     */
    public function getCheckoutTheme(): ?CheckoutTheme { return $this->get('checkout_theme'); }
    public function hasCheckoutTheme(): bool { return $this->has('checkout_theme'); }
    /** True for an event with no tickets remaining. For other active links with inventory_routing_source, true when any catalog line cannot be bought at its minimum quantity from that source. Untracked and ad hoc lines do not count. A choice line counts only when every offered variant is sold out. Fixed locations use available stock; policies use their allocatable locations. Stock is not reserved by this read.
     * @return bool
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getMerchantIcon(): ?Image { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getMerchantLogo(): ?Image { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** merchant_name
     * @return ?string
     */
    public function getMerchantName(): ?string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.
     * @return PublicPaymentLink
     */
    public function getPaymentLink(): PublicPaymentLink { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** Event links with a ticket limit: tickets left after tickets sold and tickets held by payments in progress. Absent when the event has no ticket limit. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return ?int
     */
    public function getRemainingQuantity(): ?int { return $this->get('remaining_quantity'); }
    public function hasRemainingQuantity(): bool { return $this->has('remaining_quantity'); }
    /** resolution_context
     * @return string
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getResolutionContextExpiresAt(): string { return $this->get('resolution_context_expires_at'); }
    public function hasResolutionContextExpiresAt(): bool { return $this->has('resolution_context_expires_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getResolutionContextStartDeadlineAt(): string { return $this->get('resolution_context_start_deadline_at'); }
    public function hasResolutionContextStartDeadlineAt(): bool { return $this->has('resolution_context_start_deadline_at'); }
    /**  [] (Value): {@see PublicResolvedLineItemInfo}. Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.
     * @return ?list<PublicResolvedLineItemInfo>
     */
    public function getResolvedLineItems(): ?array { return $this->get('resolved_line_items'); }
    public function hasResolvedLineItems(): bool { return $this->has('resolved_line_items'); }
    /** True when the link's sales end has passed: payment_link.sales_end_at, or event_config.event_at for an event link without sales_end_at. Resolve then returns PAYMENT_LINK_SALES_ENDED.
     * @return bool
     */
    public function getSalesEnded(): bool { return $this->get('sales_ended'); }
    public function hasSalesEnded(): bool { return $this->has('sales_ended'); }
    /** Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * @return bool
     */
    public function getShowFlintMark(): bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
    /** Present for active plan-backed payment links when authoritative subscription terms are available. Subscription terms shown before an active plan-backed payment link creates a checkout session.
     * @return ?PaymentLinkSubscriptionPreview
     */
    public function getSubscriptionPreview(): ?PaymentLinkSubscriptionPreview { return $this->get('subscription_preview'); }
    public function hasSubscriptionPreview(): bool { return $this->has('subscription_preview'); }
}
