<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutThemeInput|array<array-key, mixed>|\stdClass $checkout_theme
 * @property-read bool $is_sold_out
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_icon
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_logo
 * @property-read string $merchant_name
 * @property-read PublicPaymentLinkInput|array<array-key, mixed>|\stdClass $payment_link
 * @property-read int $remaining_quantity
 * @property-read string $resolution_context
 * @property-read string|\DateTimeInterface $resolution_context_expires_at
 * @property-read string|\DateTimeInterface $resolution_context_start_deadline_at
 * @property-read list<PublicResolvedLineItemInfoInput|array<array-key, mixed>|\stdClass> $resolved_line_items
 * @property-read bool $sales_ended
 * @property-read bool $show_flint_mark
 * @property-read PaymentLinkSubscriptionPreviewInput|array<array-key, mixed>|\stdClass $subscription_preview
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicPaymentLinkResultInput extends Model {
    /** @param array{'checkout_theme'?: CheckoutThemeInput|array<array-key, mixed>|\stdClass, 'is_sold_out': bool, 'merchant_icon'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_logo'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_name'?: string, 'payment_link': PublicPaymentLinkInput|array<array-key, mixed>|\stdClass, 'remaining_quantity'?: int, 'resolution_context': string, 'resolution_context_expires_at': string|\DateTimeInterface, 'resolution_context_start_deadline_at': string|\DateTimeInterface, 'resolved_line_items'?: list<PublicResolvedLineItemInfoInput|array<array-key, mixed>|\stdClass>, 'sales_ended': bool, 'show_flint_mark': bool, 'subscription_preview'?: PaymentLinkSubscriptionPreviewInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLinkResultInput')); }
    /** Shape $ (Value): {@see CheckoutThemeInput}. The theme a checkout opened from this link uses: your checkout branding settings, with the link's own `theme` over them. Use it to style a page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. It includes the branding settings' `background_color`, `text_color`, `font_family`, and `corner_radius`. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return CheckoutThemeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_theme is omitted; use hasCheckoutTheme() or valueOrDefault().
     */
    public function getCheckoutTheme(): mixed { return $this->get('checkout_theme'); }
    public function hasCheckoutTheme(): bool { return $this->has('checkout_theme'); }
    /** Shape $ (Value): boolean. True for an event with no tickets remaining. For other active links with inventory_routing_source, true when any catalog line cannot be bought at its minimum quantity from that source. Untracked and ad hoc lines do not count. A choice line counts only when every offered variant is sold out. Fixed locations use available stock; policies use their allocatable locations. Stock is not reserved by this read.
     * @return bool
     * @throws SdkError When is_sold_out is omitted; use hasIsSoldOut() or valueOrDefault().
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** Shape $ (Value): {@see ImageInput}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_icon is omitted; use hasMerchantIcon() or valueOrDefault().
     */
    public function getMerchantIcon(): mixed { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** Shape $ (Value): {@see ImageInput}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_logo is omitted; use hasMerchantLogo() or valueOrDefault().
     */
    public function getMerchantLogo(): mixed { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_name is omitted; use hasMerchantName() or valueOrDefault().
     */
    public function getMerchantName(): string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** Shape $ (Value): {@see PublicPaymentLinkInput}. The buyer-facing view of a payment link, with its line items, custom fields, legal and payment settings, and status.
     * @return PublicPaymentLinkInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_link is omitted; use hasPaymentLink() or valueOrDefault().
     */
    public function getPaymentLink(): mixed { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** Shape $ (Value): integer. Event links with a ticket limit: tickets left after tickets sold and tickets held by payments in progress. Absent when the event has no ticket limit. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When remaining_quantity is omitted; use hasRemainingQuantity() or valueOrDefault().
     */
    public function getRemainingQuantity(): int { return $this->get('remaining_quantity'); }
    public function hasRemainingQuantity(): bool { return $this->has('remaining_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When resolution_context_expires_at is omitted; use hasResolutionContextExpiresAt() or valueOrDefault().
     */
    public function getResolutionContextExpiresAt(): string|\DateTimeInterface { return $this->get('resolution_context_expires_at'); }
    public function hasResolutionContextExpiresAt(): bool { return $this->has('resolution_context_expires_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When resolution_context_start_deadline_at is omitted; use hasResolutionContextStartDeadlineAt() or valueOrDefault().
     */
    public function getResolutionContextStartDeadlineAt(): string|\DateTimeInterface { return $this->get('resolution_context_start_deadline_at'); }
    public function hasResolutionContextStartDeadlineAt(): bool { return $this->has('resolution_context_start_deadline_at'); }
    /** Shape $ (Value): Array of {@see PublicResolvedLineItemInfoInput}. Shape $[] (Value): {@see PublicResolvedLineItemInfoInput}. Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.
     * @return list<PublicResolvedLineItemInfoInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When resolved_line_items is omitted; use hasResolvedLineItems() or valueOrDefault().
     */
    public function getResolvedLineItems(): array { return $this->get('resolved_line_items'); }
    public function hasResolvedLineItems(): bool { return $this->has('resolved_line_items'); }
    /** Shape $ (Value): boolean. True when the link's sales end has passed: payment_link.sales_end_at, or event_config.event_at for an event link without sales_end_at. Resolve then returns PAYMENT_LINK_SALES_ENDED.
     * @return bool
     * @throws SdkError When sales_ended is omitted; use hasSalesEnded() or valueOrDefault().
     */
    public function getSalesEnded(): bool { return $this->get('sales_ended'); }
    public function hasSalesEnded(): bool { return $this->has('sales_ended'); }
    /** Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * @return bool
     * @throws SdkError When show_flint_mark is omitted; use hasShowFlintMark() or valueOrDefault().
     */
    public function getShowFlintMark(): bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
    /** Shape $ (Value): {@see PaymentLinkSubscriptionPreviewInput}. Present for active plan-backed payment links when authoritative subscription terms are available. Subscription terms shown before an active plan-backed payment link creates a checkout session.
     * @return PaymentLinkSubscriptionPreviewInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_preview is omitted; use hasSubscriptionPreview() or valueOrDefault().
     */
    public function getSubscriptionPreview(): mixed { return $this->get('subscription_preview'); }
    public function hasSubscriptionPreview(): bool { return $this->has('subscription_preview'); }
}
