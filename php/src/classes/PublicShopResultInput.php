<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicShopCategoryInput|array<array-key, mixed>|\stdClass> $categories
 * @property-read string|\DateTimeInterface $checkout_start_due_at
 * @property-read CheckoutThemeInput|array<array-key, mixed>|\stdClass $checkout_theme
 * @property-read CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass $legal
 * @property-read list<PublicShopListingSummaryInput|array<array-key, mixed>|\stdClass> $listings
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_icon
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_logo
 * @property-read string $merchant_name
 * @property-read CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass $merchant_support
 * @property-read string $resolution_context
 * @property-read string|\DateTimeInterface $resolution_context_expires_at
 * @property-read PublicShopInput|array<array-key, mixed>|\stdClass $shop
 * @property-read bool $show_flint_mark
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicShopResultInput extends Model {
    /** @param array{'categories': list<PublicShopCategoryInput|array<array-key, mixed>|\stdClass>, 'checkout_start_due_at': string|\DateTimeInterface, 'checkout_theme'?: CheckoutThemeInput|array<array-key, mixed>|\stdClass, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'listings': list<PublicShopListingSummaryInput|array<array-key, mixed>|\stdClass>, 'merchant_icon'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_logo'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_name'?: string, 'merchant_support'?: CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass, 'resolution_context': string, 'resolution_context_expires_at': string|\DateTimeInterface, 'shop': PublicShopInput|array<array-key, mixed>|\stdClass, 'show_flint_mark': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicShopResultInput')); }
    /** Active categories of the returned listings, sorted by name. [] (Value): {@see PublicShopCategoryInput}. Category shown on the shop.
     * @return list<PublicShopCategoryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Deadline for starting checkout. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When checkout_start_due_at is omitted; use hasCheckoutStartDueAt() or valueOrDefault().
     */
    public function getCheckoutStartDueAt(): string|\DateTimeInterface { return $this->get('checkout_start_due_at'); }
    public function hasCheckoutStartDueAt(): bool { return $this->has('checkout_start_due_at'); }
    /** Merchant checkout theme. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return CheckoutThemeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_theme is omitted; use hasCheckoutTheme() or valueOrDefault().
     */
    public function getCheckoutTheme(): mixed { return $this->get('checkout_theme'); }
    public function hasCheckoutTheme(): bool { return $this->has('checkout_theme'); }
    /** Checkout policy links and terms acceptance settings. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Sellable listings in display order. [] (Value): {@see PublicShopListingSummaryInput}. Summary of a public listing.
     * @return list<PublicShopListingSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When listings is omitted; use hasListings() or valueOrDefault().
     */
    public function getListings(): array { return $this->get('listings'); }
    public function hasListings(): bool { return $this->has('listings'); }
    /** Merchant icon. An image with its URL, size, and alt text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_icon is omitted; use hasMerchantIcon() or valueOrDefault().
     */
    public function getMerchantIcon(): mixed { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** Merchant logo. An image with its URL, size, and alt text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_logo is omitted; use hasMerchantLogo() or valueOrDefault().
     */
    public function getMerchantLogo(): mixed { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** Merchant display name.
     * @return string
     * @throws SdkError When merchant_name is omitted; use hasMerchantName() or valueOrDefault().
     */
    public function getMerchantName(): string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** Merchant support contact information. The merchant's support contact. Each field is omitted when the merchant has not set it.
     * @return CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_support is omitted; use hasMerchantSupport() or valueOrDefault().
     */
    public function getMerchantSupport(): mixed { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** Private context for starting checkout from this shop.
     * @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** Resolution context expiry. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When resolution_context_expires_at is omitted; use hasResolutionContextExpiresAt() or valueOrDefault().
     */
    public function getResolutionContextExpiresAt(): string|\DateTimeInterface { return $this->get('resolution_context_expires_at'); }
    public function hasResolutionContextExpiresAt(): bool { return $this->has('resolution_context_expires_at'); }
    /** Shop details. Buyer-facing shop.
     * @return PublicShopInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shop is omitted; use hasShop() or valueOrDefault().
     */
    public function getShop(): mixed { return $this->get('shop'); }
    public function hasShop(): bool { return $this->has('shop'); }
    /** Whether the hosted shop shows the Flint mark.
     * @return bool
     * @throws SdkError When show_flint_mark is omitted; use hasShowFlintMark() or valueOrDefault().
     */
    public function getShowFlintMark(): bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
}
