<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ThemeConfig $checkout_theme
 * @property-read bool $is_sold_out
 * @property-read Image $merchant_icon
 * @property-read Image $merchant_logo
 * @property-read string $merchant_name
 * @property-read PublicPaymentLink $payment_link
 * @property-read int $remaining_quantity
 * @property-read string $resolution_context
 * @property-read string $resolution_context_expires_at
 * @property-read string $resolution_context_start_deadline_at
 * @property-read list<PublicResolvedLineItemInfo> $resolved_line_items
 * @property-read PaymentLinkSubscriptionPreview $subscription_preview
 * Presence-aware response; omitted fields throw when accessed. */
final class PublicPaymentLinkResult extends Model {
    /** @param array{'checkout_theme'?: object{'accent_color'?: string, 'primary_color'?: string, 'title'?: string}, 'is_sold_out'?: bool, 'merchant_icon'?: mixed, 'merchant_logo'?: mixed, 'merchant_name'?: string, 'payment_link': mixed, 'remaining_quantity'?: int, 'resolution_context': string, 'resolution_context_expires_at': string, 'resolution_context_start_deadline_at': string, 'resolved_line_items'?: list<mixed>, 'subscription_preview'?: object{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'early_termination_fee_money'?: object{'amount': string, 'currency': string}, 'plan_image'?: object{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int}, 'plan_name': string, 'recurring_total_money': object{'amount': string, 'currency': string}, 'setup_fee_money'?: object{'amount': string, 'currency': string}, 'trial_period_days'?: int}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLinkResult')); }
    /** @return ThemeConfig
     * @throws SdkError When checkout_theme is omitted; use hasCheckoutTheme() or valueOrDefault().
     */
    public function getCheckoutTheme(): ThemeConfig { return $this->get('checkout_theme'); }
    public function hasCheckoutTheme(): bool { return $this->has('checkout_theme'); }
    /** @return bool
     * @throws SdkError When is_sold_out is omitted; use hasIsSoldOut() or valueOrDefault().
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** @return Image
     * @throws SdkError When merchant_icon is omitted; use hasMerchantIcon() or valueOrDefault().
     */
    public function getMerchantIcon(): Image { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** @return Image
     * @throws SdkError When merchant_logo is omitted; use hasMerchantLogo() or valueOrDefault().
     */
    public function getMerchantLogo(): Image { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** @return string
     * @throws SdkError When merchant_name is omitted; use hasMerchantName() or valueOrDefault().
     */
    public function getMerchantName(): string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** @return PublicPaymentLink
     * @throws SdkError When payment_link is omitted; use hasPaymentLink() or valueOrDefault().
     */
    public function getPaymentLink(): PublicPaymentLink { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** @return int
     * @throws SdkError When remaining_quantity is omitted; use hasRemainingQuantity() or valueOrDefault().
     */
    public function getRemainingQuantity(): int { return $this->get('remaining_quantity'); }
    public function hasRemainingQuantity(): bool { return $this->has('remaining_quantity'); }
    /** @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** @return string
     * @throws SdkError When resolution_context_expires_at is omitted; use hasResolutionContextExpiresAt() or valueOrDefault().
     */
    public function getResolutionContextExpiresAt(): string { return $this->get('resolution_context_expires_at'); }
    public function hasResolutionContextExpiresAt(): bool { return $this->has('resolution_context_expires_at'); }
    /** @return string
     * @throws SdkError When resolution_context_start_deadline_at is omitted; use hasResolutionContextStartDeadlineAt() or valueOrDefault().
     */
    public function getResolutionContextStartDeadlineAt(): string { return $this->get('resolution_context_start_deadline_at'); }
    public function hasResolutionContextStartDeadlineAt(): bool { return $this->has('resolution_context_start_deadline_at'); }
    /** @return list<PublicResolvedLineItemInfo>
     * @throws SdkError When resolved_line_items is omitted; use hasResolvedLineItems() or valueOrDefault().
     */
    public function getResolvedLineItems(): array { return $this->get('resolved_line_items'); }
    public function hasResolvedLineItems(): bool { return $this->has('resolved_line_items'); }
    /** @return PaymentLinkSubscriptionPreview
     * @throws SdkError When subscription_preview is omitted; use hasSubscriptionPreview() or valueOrDefault().
     */
    public function getSubscriptionPreview(): PaymentLinkSubscriptionPreview { return $this->get('subscription_preview'); }
    public function hasSubscriptionPreview(): bool { return $this->has('subscription_preview'); }
}
