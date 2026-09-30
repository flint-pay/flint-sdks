<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPaymentAttempt $active_payment_attempt
 * @property-read CheckoutBuyerContact $buyer_contact
 * @property-read string $checkout_session_id
 * @property-read string $closed_reason
 * @property-read string $created_at
 * @property-read CheckoutCustomTextWriteConfig $custom_text
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read CheckoutCustomerConfig $customer_collection
 * @property-read CheckoutCustomerPrefill $customer_prefill
 * @property-read list<string> $delivery_method_ids
 * @property-read list<CheckoutDeliveryPinnedDependency> $delivery_pinned_dependencies
 * @property-read bool $delivery_selection_required
 * @property-read CheckoutExpirationConfig $expiration
 * @property-read string $expires_at
 * @property-read string $external_reference_id
 * @property-read mixed $fulfillment
 * @property-read ExpandedInvoiceSummary|null $invoice
 * @property-read string $invoice_id
 * @property-read LegalSettings $legal
 * @property-read string $merchant_id
 * @property-read CheckoutMerchantSupport $merchant_support
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read string $origin
 * @property-read PaymentCollection $payment_collection
 * @property-read list<string> $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummary> $payment_intents
 * @property-read ExpandedPaymentLinkSummary|null $payment_link
 * @property-read string $payment_link_id
 * @property-read CheckoutPaymentMethodSave $payment_method_save
 * @property-read CheckoutPaymentConfig $payments
 * @property-read string $plan_id
 * @property-read list<CheckoutProblemResource> $problems
 * @property-read CheckoutPromotionConfig $promotion_config
 * @property-read string|null $recovery_expires_at
 * @property-read bool $recovery_mode
 * @property-read string $recovery_payment_attempt_id
 * @property-read CheckoutRedirectsConfig $redirects
 * @property-read bool $save_payment_method_offered
 * @property-read bool $save_payment_method_phone_offered
 * @property-read bool $save_payment_method_requires_verification
 * @property-read PaymentCollection $setup_collection
 * @property-read string $status
 * @property-read CheckoutSubscriptionTerms $subscription_terms
 * @property-read string $superseding_checkout_session_id
 * @property-read string $surface
 * @property-read CheckoutTaxConfig $tax
 * @property-read string $terminal_reason
 * @property-read ThemeConfig $theme
 * @property-read CheckoutTipConfig $tip
 * @property-read string $updated_at
 * @property-read string $url
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutSession extends Model {
    /** @param array{'active_payment_attempt'?: object{'completed_at'?: string, 'expected_outstanding_money': mixed, 'failure_code'?: string, 'failure_message'?: string, 'is_resumable': bool, 'mode': string, 'payment_attempt_id': string, 'payment_intents'?: list<mixed>, 'pending_actions'?: list<mixed>, 'started_at'?: string, 'status': string}, 'buyer_contact'?: object{'email': string|null, 'phone': string|null, 'updated_at': string}, 'checkout_session_id': string, 'closed_reason'?: string, 'created_at'?: string, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_collection'?: mixed, 'customer_prefill'?: object{'billing_address'?: object{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}, 'email': string, 'shipping_address'?: object{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}}, 'delivery_method_ids': list<string>, 'delivery_pinned_dependencies'?: list<mixed>, 'delivery_selection_required': bool, 'expiration'?: mixed, 'expires_at'?: string, 'external_reference_id'?: string, 'fulfillment'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'legal'?: mixed, 'merchant_id'?: string, 'merchant_support'?: object{'email'?: string, 'phone'?: string, 'url'?: string}, 'metadata'?: \stdClass, 'order'?: mixed, 'order_id'?: string, 'origin'?: string, 'payment_collection'?: object{'stripe'?: mixed}, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<mixed>, 'payment_link'?: mixed, 'payment_link_id'?: string, 'payment_method_save'?: object{'email_confirmation_required': bool, 'expires_at'?: string|null, 'phone_last_digits'?: string, 'saved_with'?: string, 'status': string}, 'payments'?: mixed, 'plan_id'?: string, 'problems': list<mixed>, 'promotion_config'?: mixed, 'recovery_expires_at'?: string|null, 'recovery_mode': bool, 'recovery_payment_attempt_id'?: string, 'redirects'?: mixed, 'save_payment_method_offered'?: bool, 'save_payment_method_phone_offered'?: bool, 'save_payment_method_requires_verification'?: bool, 'setup_collection'?: object{'stripe'?: mixed}, 'status': string, 'subscription_terms'?: object{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'early_termination_fee_money'?: object{'amount': string, 'currency': string}, 'plan_id': string, 'plan_name': string, 'recurring_total_money': object{'amount': string, 'currency': string}, 'setup_fee_money'?: object{'amount': string, 'currency': string}, 'trial_period_days'?: int}, 'superseding_checkout_session_id'?: string, 'surface': string, 'tax'?: mixed, 'terminal_reason'?: string, 'theme'?: mixed, 'tip'?: mixed, 'updated_at'?: string, 'url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSession')); }
    /** @return OrderPaymentAttempt
     * @throws SdkError When active_payment_attempt is omitted; use hasActivePaymentAttempt() or valueOrDefault().
     */
    public function getActivePaymentAttempt(): OrderPaymentAttempt { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** @return CheckoutBuyerContact
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): CheckoutBuyerContact { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return CheckoutCustomTextWriteConfig
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): CheckoutCustomTextWriteConfig { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return CheckoutCustomerConfig
     * @throws SdkError When customer_collection is omitted; use hasCustomerCollection() or valueOrDefault().
     */
    public function getCustomerCollection(): CheckoutCustomerConfig { return $this->get('customer_collection'); }
    public function hasCustomerCollection(): bool { return $this->has('customer_collection'); }
    /** @return CheckoutCustomerPrefill
     * @throws SdkError When customer_prefill is omitted; use hasCustomerPrefill() or valueOrDefault().
     */
    public function getCustomerPrefill(): CheckoutCustomerPrefill { return $this->get('customer_prefill'); }
    public function hasCustomerPrefill(): bool { return $this->has('customer_prefill'); }
    /** @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** @return list<CheckoutDeliveryPinnedDependency>
     * @throws SdkError When delivery_pinned_dependencies is omitted; use hasDeliveryPinnedDependencies() or valueOrDefault().
     */
    public function getDeliveryPinnedDependencies(): array { return $this->get('delivery_pinned_dependencies'); }
    public function hasDeliveryPinnedDependencies(): bool { return $this->has('delivery_pinned_dependencies'); }
    /** @return bool
     * @throws SdkError When delivery_selection_required is omitted; use hasDeliverySelectionRequired() or valueOrDefault().
     */
    public function getDeliverySelectionRequired(): bool { return $this->get('delivery_selection_required'); }
    public function hasDeliverySelectionRequired(): bool { return $this->has('delivery_selection_required'); }
    /** @return CheckoutExpirationConfig
     * @throws SdkError When expiration is omitted; use hasExpiration() or valueOrDefault().
     */
    public function getExpiration(): CheckoutExpirationConfig { return $this->get('expiration'); }
    public function hasExpiration(): bool { return $this->has('expiration'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return mixed
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** @return ExpandedInvoiceSummary|null
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): ExpandedInvoiceSummary|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** @return LegalSettings
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): LegalSettings { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return CheckoutMerchantSupport
     * @throws SdkError When merchant_support is omitted; use hasMerchantSupport() or valueOrDefault().
     */
    public function getMerchantSupport(): CheckoutMerchantSupport { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** @return PaymentCollection
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): PaymentCollection { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** @return list<ExpandedPaymentIntentSummary>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** @return ExpandedPaymentLinkSummary|null
     * @throws SdkError When payment_link is omitted; use hasPaymentLink() or valueOrDefault().
     */
    public function getPaymentLink(): ExpandedPaymentLinkSummary|null { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** @return CheckoutPaymentMethodSave
     * @throws SdkError When payment_method_save is omitted; use hasPaymentMethodSave() or valueOrDefault().
     */
    public function getPaymentMethodSave(): CheckoutPaymentMethodSave { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /** @return CheckoutPaymentConfig
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): CheckoutPaymentConfig { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** @return string
     * @throws SdkError When plan_id is omitted; use hasPlanId() or valueOrDefault().
     */
    public function getPlanId(): string { return $this->get('plan_id'); }
    public function hasPlanId(): bool { return $this->has('plan_id'); }
    /** @return list<CheckoutProblemResource>
     * @throws SdkError When problems is omitted; use hasProblems() or valueOrDefault().
     */
    public function getProblems(): array { return $this->get('problems'); }
    public function hasProblems(): bool { return $this->has('problems'); }
    /** @return CheckoutPromotionConfig
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): CheckoutPromotionConfig { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** @return string|null
     * @throws SdkError When recovery_expires_at is omitted; use hasRecoveryExpiresAt() or valueOrDefault().
     */
    public function getRecoveryExpiresAt(): string|null { return $this->get('recovery_expires_at'); }
    public function hasRecoveryExpiresAt(): bool { return $this->has('recovery_expires_at'); }
    /** @return bool
     * @throws SdkError When recovery_mode is omitted; use hasRecoveryMode() or valueOrDefault().
     */
    public function getRecoveryMode(): bool { return $this->get('recovery_mode'); }
    public function hasRecoveryMode(): bool { return $this->has('recovery_mode'); }
    /** @return string
     * @throws SdkError When recovery_payment_attempt_id is omitted; use hasRecoveryPaymentAttemptId() or valueOrDefault().
     */
    public function getRecoveryPaymentAttemptId(): string { return $this->get('recovery_payment_attempt_id'); }
    public function hasRecoveryPaymentAttemptId(): bool { return $this->has('recovery_payment_attempt_id'); }
    /** @return CheckoutRedirectsConfig
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): CheckoutRedirectsConfig { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** @return bool
     * @throws SdkError When save_payment_method_offered is omitted; use hasSavePaymentMethodOffered() or valueOrDefault().
     */
    public function getSavePaymentMethodOffered(): bool { return $this->get('save_payment_method_offered'); }
    public function hasSavePaymentMethodOffered(): bool { return $this->has('save_payment_method_offered'); }
    /** @return bool
     * @throws SdkError When save_payment_method_phone_offered is omitted; use hasSavePaymentMethodPhoneOffered() or valueOrDefault().
     */
    public function getSavePaymentMethodPhoneOffered(): bool { return $this->get('save_payment_method_phone_offered'); }
    public function hasSavePaymentMethodPhoneOffered(): bool { return $this->has('save_payment_method_phone_offered'); }
    /** @return bool
     * @throws SdkError When save_payment_method_requires_verification is omitted; use hasSavePaymentMethodRequiresVerification() or valueOrDefault().
     */
    public function getSavePaymentMethodRequiresVerification(): bool { return $this->get('save_payment_method_requires_verification'); }
    public function hasSavePaymentMethodRequiresVerification(): bool { return $this->has('save_payment_method_requires_verification'); }
    /** @return PaymentCollection
     * @throws SdkError When setup_collection is omitted; use hasSetupCollection() or valueOrDefault().
     */
    public function getSetupCollection(): PaymentCollection { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return CheckoutSubscriptionTerms
     * @throws SdkError When subscription_terms is omitted; use hasSubscriptionTerms() or valueOrDefault().
     */
    public function getSubscriptionTerms(): CheckoutSubscriptionTerms { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** @return string
     * @throws SdkError When superseding_checkout_session_id is omitted; use hasSupersedingCheckoutSessionId() or valueOrDefault().
     */
    public function getSupersedingCheckoutSessionId(): string { return $this->get('superseding_checkout_session_id'); }
    public function hasSupersedingCheckoutSessionId(): bool { return $this->has('superseding_checkout_session_id'); }
    /** @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** @return CheckoutTaxConfig
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): CheckoutTaxConfig { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** @return string
     * @throws SdkError When terminal_reason is omitted; use hasTerminalReason() or valueOrDefault().
     */
    public function getTerminalReason(): string { return $this->get('terminal_reason'); }
    public function hasTerminalReason(): bool { return $this->has('terminal_reason'); }
    /** @return ThemeConfig
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): ThemeConfig { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** @return CheckoutTipConfig
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): CheckoutTipConfig { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
