<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'accent_color'?: string, 'primary_color'?: string, 'title'?: string, ...}|object $checkout_theme
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
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'early_termination_fee_money'?: array{'amount': string, 'currency': string}|object, 'plan_image'?: array{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int, ...}|object, 'plan_name': string, 'recurring_total_money': array{'amount': string, 'currency': string}|object, 'setup_fee_money'?: array{'amount': string, 'currency': string}|object, 'trial_period_days'?: int, ...}|object $subscription_preview
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicPaymentLinkResultInput extends Model {
    /** @param array{'checkout_theme'?: array{'accent_color'?: string, 'primary_color'?: string, 'title'?: string, ...}|object, 'is_sold_out'?: bool, 'merchant_icon'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_logo'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_name'?: string, 'payment_link': PublicPaymentLinkInput|array<array-key, mixed>|\stdClass, 'remaining_quantity'?: int, 'resolution_context': string, 'resolution_context_expires_at': string|\DateTimeInterface, 'resolution_context_start_deadline_at': string|\DateTimeInterface, 'resolved_line_items'?: list<PublicResolvedLineItemInfoInput|array<array-key, mixed>|\stdClass>, 'subscription_preview'?: array{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'early_termination_fee_money'?: array{'amount': string, 'currency': string}|object, 'plan_image'?: array{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int, ...}|object, 'plan_name': string, 'recurring_total_money': array{'amount': string, 'currency': string}|object, 'setup_fee_money'?: array{'amount': string, 'currency': string}|object, 'trial_period_days'?: int, ...}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicPaymentLinkResultInput')); }
    /** @return array{'accent_color'?: string, 'primary_color'?: string, 'title'?: string, ...}|object
     * @throws SdkError When checkout_theme is omitted; use hasCheckoutTheme() or valueOrDefault().
     */
    public function getCheckoutTheme(): array|object { return $this->get('checkout_theme'); }
    public function hasCheckoutTheme(): bool { return $this->has('checkout_theme'); }
    /** @return bool
     * @throws SdkError When is_sold_out is omitted; use hasIsSoldOut() or valueOrDefault().
     */
    public function getIsSoldOut(): bool { return $this->get('is_sold_out'); }
    public function hasIsSoldOut(): bool { return $this->has('is_sold_out'); }
    /** @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_icon is omitted; use hasMerchantIcon() or valueOrDefault().
     */
    public function getMerchantIcon(): mixed { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_logo is omitted; use hasMerchantLogo() or valueOrDefault().
     */
    public function getMerchantLogo(): mixed { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** @return string
     * @throws SdkError When merchant_name is omitted; use hasMerchantName() or valueOrDefault().
     */
    public function getMerchantName(): string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** @return PublicPaymentLinkInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_link is omitted; use hasPaymentLink() or valueOrDefault().
     */
    public function getPaymentLink(): mixed { return $this->get('payment_link'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When resolution_context_expires_at is omitted; use hasResolutionContextExpiresAt() or valueOrDefault().
     */
    public function getResolutionContextExpiresAt(): string|\DateTimeInterface { return $this->get('resolution_context_expires_at'); }
    public function hasResolutionContextExpiresAt(): bool { return $this->has('resolution_context_expires_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When resolution_context_start_deadline_at is omitted; use hasResolutionContextStartDeadlineAt() or valueOrDefault().
     */
    public function getResolutionContextStartDeadlineAt(): string|\DateTimeInterface { return $this->get('resolution_context_start_deadline_at'); }
    public function hasResolutionContextStartDeadlineAt(): bool { return $this->has('resolution_context_start_deadline_at'); }
    /** @return list<PublicResolvedLineItemInfoInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When resolved_line_items is omitted; use hasResolvedLineItems() or valueOrDefault().
     */
    public function getResolvedLineItems(): array { return $this->get('resolved_line_items'); }
    public function hasResolvedLineItems(): bool { return $this->has('resolved_line_items'); }
    /** @return array{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'early_termination_fee_money'?: array{'amount': string, 'currency': string}|object, 'plan_image'?: array{'alt'?: string, 'external_reference_id'?: string, 'height': int, 'url': string, 'width': int, ...}|object, 'plan_name': string, 'recurring_total_money': array{'amount': string, 'currency': string}|object, 'setup_fee_money'?: array{'amount': string, 'currency': string}|object, 'trial_period_days'?: int, ...}|object
     * @throws SdkError When subscription_preview is omitted; use hasSubscriptionPreview() or valueOrDefault().
     */
    public function getSubscriptionPreview(): array|object { return $this->get('subscription_preview'); }
    public function hasSubscriptionPreview(): bool { return $this->has('subscription_preview'); }
}
