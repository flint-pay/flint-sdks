<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutAccess $checkout_access
 * @property-read CheckoutSession $checkout_session
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutCustomerVerificationConfirmation extends Model {
    /** @param array{'checkout_access'?: object{'checkout_auth_token': string}, 'checkout_session': object{'active_payment_attempt'?: object{'completed_at'?: string, 'expected_outstanding_money': mixed, 'failure_code'?: string, 'failure_message'?: string, 'gift_card_redemptions'?: list<mixed>, 'is_resumable': bool, 'mode': string, 'order_payment_attempt_id': string, 'payment_intents'?: list<mixed>, 'pending_actions'?: list<mixed>, 'started_at'?: string, 'status': string}, 'buyer_contact'?: object{'email': string|null, 'is_email_cleared': bool, 'is_phone_cleared': bool, 'phone': string|null, 'updated_at'?: string}, 'checkout_session_id': string, 'closed_reason'?: string, 'created_at'?: string, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_collection'?: mixed, 'customer_prefill'?: object{'billing_address'?: object{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}, 'email': string, 'shipping_address'?: object{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}}, 'delivery_method_ids': list<string>, 'delivery_pinned_dependencies'?: list<mixed>, 'delivery_selection_required': bool, 'expiration'?: mixed, 'expires_at'?: string, 'external_reference_id'?: string, 'fulfillment'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'legal'?: mixed, 'merchant_id'?: string, 'merchant_support'?: object{'email'?: string, 'phone'?: string, 'url'?: string}, 'metadata'?: \stdClass, 'order'?: mixed, 'order_id'?: string, 'origin'?: string, 'payment_collection'?: object{'stripe'?: mixed}, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<mixed>, 'payment_link'?: mixed, 'payment_link_id'?: string, 'payment_method_save'?: object{'email_confirmation_required': bool, 'expires_at'?: string|null, 'phone_last_digits'?: string, 'saved_with'?: string, 'status': string}, 'payments'?: mixed, 'problems': list<mixed>, 'promotion_config'?: mixed, 'recovery_expires_at'?: string|null, 'recovery_mode': bool, 'recovery_payment_attempt_id'?: string, 'redirects'?: mixed, 'save_payment_method_offered'?: bool, 'save_payment_method_phone_offered'?: bool, 'save_payment_method_requires_verification'?: bool, 'setup_collection'?: object{'stripe'?: mixed}, 'status': string, 'subscription_plan_id'?: string, 'subscription_terms'?: object{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'early_termination_fee_money'?: object{'amount': string, 'currency': string}, 'plan_name': string, 'recurring_total_money': object{'amount': string, 'currency': string}, 'setup_fee_money'?: object{'amount': string, 'currency': string}, 'subscription_plan_id': string, 'trial_period_days'?: int}, 'superseding_checkout_session_id'?: string, 'surface': string, 'tax'?: mixed, 'terminal_reason'?: string, 'theme'?: mixed, 'tip'?: mixed, 'updated_at'?: string, 'url'?: string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomerVerificationConfirmation')); }
    /** @return CheckoutAccess
     * @throws SdkError When checkout_access is omitted; use hasCheckoutAccess() or valueOrDefault().
     */
    public function getCheckoutAccess(): CheckoutAccess { return $this->get('checkout_access'); }
    public function hasCheckoutAccess(): bool { return $this->has('checkout_access'); }
    /** @return CheckoutSession
     * @throws SdkError When checkout_session is omitted; use hasCheckoutSession() or valueOrDefault().
     */
    public function getCheckoutSession(): CheckoutSession { return $this->get('checkout_session'); }
    public function hasCheckoutSession(): bool { return $this->has('checkout_session'); }
}
