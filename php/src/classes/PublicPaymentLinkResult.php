<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_start_due_at
 * @property-read ?CheckoutTheme $checkout_theme
 * @property-read bool $is_past_sales_end
 * @property-read bool $is_sold_out
 * @property-read ?Image $merchant_icon
 * @property-read ?Image $merchant_logo
 * @property-read ?string $merchant_name
 * @property-read ?CheckoutMerchantSupport $merchant_support
 * @property-read PublicPaymentLink $payment_link
 * @property-read ?int $remaining_quantity
 * @property-read string $resolution_context
 * @property-read string $resolution_context_expires_at
 * @property-read ?list<PublicResolvedLineItemInfo> $resolved_line_items
 * @property-read bool $show_flint_mark
 * @property-read ?PaymentLinkSubscriptionPreview $subscription_preview
 * Presence-aware response; omitted optional fields return null. */
final class PublicPaymentLinkResult extends Model {
    /** @param array{'checkout_start_due_at': string, 'checkout_theme'?: mixed, 'is_past_sales_end': bool, 'is_sold_out': bool, 'merchant_icon'?: mixed, 'merchant_logo'?: mixed, 'merchant_name'?: string, 'merchant_support'?: mixed, 'payment_link': mixed, 'remaining_quantity'?: int, 'resolution_context': string, 'resolution_context_expires_at': string, 'resolved_line_items'?: list<mixed>, 'show_flint_mark': bool, 'subscription_preview'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLinkResult')); }
    /** Start a new checkout before this instant. At or after it, read the public payment link again for a new resolution_context; its credential expiry is resolution_context_expires_at. Format: date-time.
     * @return string
     */
    public function getCheckoutStartDueAt(): string { return $this->get('checkout_start_due_at'); }
    public function hasCheckoutStartDueAt(): bool { return $this->has('checkout_start_due_at'); }
    /** The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. It includes the branding settings' `background_color`, `text_color`, `font_family`, and `corner_radius`. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return ?CheckoutTheme
     */
    public function getCheckoutTheme(): ?CheckoutTheme { return $this->get('checkout_theme'); }
    public function hasCheckoutTheme(): bool { return $this->has('checkout_theme'); }
    /** True when the link's sales end has passed: payment_link.sales_end_at, or event_config.event_at for an event link without sales_end_at. Resolve then fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * @return bool
     */
    public function getIsPastSalesEnd(): bool { return $this->get('is_past_sales_end'); }
    public function hasIsPastSalesEnd(): bool { return $this->has('is_past_sales_end'); }
    /** True for an event with no tickets remaining. For other active links with inventory_routing_source, true when any catalog line cannot be bought at its minimum quantity from that source. Untracked and ad hoc lines do not count. A choice line counts only when every offered variant is sold out. Fixed locations use available stock; policies use their allocatable locations. Stock is not reserved by this read.
     * @return bool
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** The merchant's icon. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getMerchantIcon(): ?Image { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** The merchant's logo. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getMerchantLogo(): ?Image { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** The merchant's name.
     * @return ?string
     */
    public function getMerchantName(): ?string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Omitted when the merchant set none. The merchant's support contact. Each field is omitted when the merchant has not set it.
     * @return ?CheckoutMerchantSupport
     */
    public function getMerchantSupport(): ?CheckoutMerchantSupport { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** The payment link that was resolved. The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.
     * @return PublicPaymentLink
     */
    public function getPaymentLink(): PublicPaymentLink { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** Event links with a ticket limit: tickets left after tickets sold and tickets held by payments in progress. Absent when the event has no ticket limit. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return ?int
     */
    public function getRemainingQuantity(): ?int { return $this->get('remaining_quantity'); }
    public function hasRemainingQuantity(): bool { return $this->has('remaining_quantity'); }
    /** Private resolution context for this payment link. Send it unchanged to resolve the same link before checkout_start_due_at. The credential expires at resolution_context_expires_at. Keep the context private and do not cache this response; it is returned with Cache-Control: private, no-store.
     * @return string
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** RFC3339 timestamp when the resolution_context credential expires. The earlier checkout_start_due_at governs starting new checkouts; committed replay remains available until this expiry. Format: date-time.
     * @return string
     */
    public function getResolutionContextExpiresAt(): string { return $this->get('resolution_context_expires_at'); }
    public function hasResolutionContextExpiresAt(): bool { return $this->has('resolution_context_expires_at'); }
    /** The link's line items with their current catalog values. [] (Value): {@see PublicResolvedLineItemInfo}. Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.
     * @return ?list<PublicResolvedLineItemInfo>
     */
    public function getResolvedLineItems(): ?array { return $this->get('resolved_line_items'); }
    public function hasResolvedLineItems(): bool { return $this->has('resolved_line_items'); }
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
