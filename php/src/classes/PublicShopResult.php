<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicShopCategory> $categories
 * @property-read string $checkout_start_due_at
 * @property-read ?CheckoutTheme $checkout_theme
 * @property-read ?CheckoutLegalConfig $legal
 * @property-read list<PublicShopListingSummary> $listings
 * @property-read ?Image $merchant_icon
 * @property-read ?Image $merchant_logo
 * @property-read ?string $merchant_name
 * @property-read ?CheckoutMerchantSupport $merchant_support
 * @property-read string $resolution_context
 * @property-read string $resolution_context_expires_at
 * @property-read PublicShop $shop
 * @property-read bool $show_flint_mark
 * Presence-aware response; omitted optional fields return null. */
final class PublicShopResult extends Model {
    /** @param array{'categories': list<mixed>, 'checkout_start_due_at': string, 'checkout_theme'?: mixed, 'legal'?: mixed, 'listings': list<mixed>, 'merchant_icon'?: mixed, 'merchant_logo'?: mixed, 'merchant_name'?: string, 'merchant_support'?: mixed, 'resolution_context': string, 'resolution_context_expires_at': string, 'shop': mixed, 'show_flint_mark': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicShopResult')); }
    /** Active categories of the returned listings, sorted by name. [] (Value): {@see PublicShopCategory}. Category shown on the shop.
     * @return list<PublicShopCategory>
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Deadline for starting checkout. Format: date-time.
     * @return string
     */
    public function getCheckoutStartDueAt(): string { return $this->get('checkout_start_due_at'); }
    public function hasCheckoutStartDueAt(): bool { return $this->has('checkout_start_due_at'); }
    /** Merchant checkout theme. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return ?CheckoutTheme
     */
    public function getCheckoutTheme(): ?CheckoutTheme { return $this->get('checkout_theme'); }
    public function hasCheckoutTheme(): bool { return $this->has('checkout_theme'); }
    /** Checkout policy links and terms acceptance settings. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return ?CheckoutLegalConfig
     */
    public function getLegal(): ?CheckoutLegalConfig { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Sellable listings in display order. [] (Value): {@see PublicShopListingSummary}. Summary of a public listing.
     * @return list<PublicShopListingSummary>
     */
    public function getListings(): array { return $this->get('listings'); }
    public function hasListings(): bool { return $this->has('listings'); }
    /** Merchant icon. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getMerchantIcon(): ?Image { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** Merchant logo. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getMerchantLogo(): ?Image { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** Merchant display name.
     * @return ?string
     */
    public function getMerchantName(): ?string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** Merchant support contact information. The merchant's support contact. Each field is omitted when the merchant has not set it.
     * @return ?CheckoutMerchantSupport
     */
    public function getMerchantSupport(): ?CheckoutMerchantSupport { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** Private context for starting checkout from this shop.
     * @return string
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** Resolution context expiry. Format: date-time.
     * @return string
     */
    public function getResolutionContextExpiresAt(): string { return $this->get('resolution_context_expires_at'); }
    public function hasResolutionContextExpiresAt(): bool { return $this->has('resolution_context_expires_at'); }
    /** Shop details. Buyer-facing shop.
     * @return PublicShop
     */
    public function getShop(): PublicShop { return $this->get('shop'); }
    public function hasShop(): bool { return $this->has('shop'); }
    /** Whether the hosted shop shows the Flint mark.
     * @return bool
     */
    public function getShowFlintMark(): bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
}
