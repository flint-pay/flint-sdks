<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read ?string $expires_at
 * @property-read ?NextActionMerchantAccountSession $merchant_account_session
 * @property-read ?string $reason_code
 * @property-read ?string $reason_message
 * @property-read ?list<string> $required_fields
 * @property-read ?string $required_scope
 * @property-read ?bool $requires_human_confirmation
 * @property-read ?int $suggested_delay_milliseconds
 * @property-read ?string $url
 * Presence-aware response; omitted optional fields return null. */
final class NextAction extends Model {
    /** @param array{'action_type': string, 'expires_at'?: string, 'merchant_account_session'?: mixed, 'reason_code'?: string, 'reason_message'?: string, 'required_fields'?: list<string>, 'required_scope'?: string, 'requires_human_confirmation'?: bool, 'suggested_delay_milliseconds'?: int, 'url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('NextAction')); }
    /** Shape $ (Value): string. Action to take next. Use its target resource and required_fields to prepare the request. Value enum: "get_operation", "get_checkout_session", "get_payment_intent", "confirm_payment_intent", "capture_payment_intent", "cancel_payment_intent", "get_order", "capture_order_payment", "cancel_order_payment", "pay_order", "close_order", "add_line_items", "update_checkout_session", "close_checkout_session", "create_refund", "get_refund", "get_dispute", "review_onboarding_state", "review_merchant_readiness", "recreate_delivery_quote", "create_merchant_account_session", "issue_developer_sandbox_test_key", "start_new_image_ingestion", "get_payout_settings", "payment_authentication", "complete_gift_card_challenge".
     * @return string
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** Shape $ (Value): string. When this suggested action expires, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): {@see NextActionMerchantAccountSession}. Request body fields to send to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. Recommended request body fields for creating a merchant account session when a next action is `create_merchant_account_session`.
     * @return ?NextActionMerchantAccountSession
     */
    public function getMerchantAccountSession(): ?NextActionMerchantAccountSession { return $this->get('merchant_account_session'); }
    public function hasMerchantAccountSession(): bool { return $this->has('merchant_account_session'); }
    /** Shape $ (Value): string. Machine-readable reason this action is suggested.
     * @return ?string
     */
    public function getReasonCode(): ?string { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** Shape $ (Value): string. Explanation of why this action is suggested.
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): Array of string. Field names that must be supplied to perform this action. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getRequiredFields(): ?array { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
    /** Shape $ (Value): string. API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.inventory_locations.write", "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.return_policies.write", "commerce.return_reasons.write", "commerce.returns.operations.write", "commerce.returns.read", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     * @return ?string
     */
    public function getRequiredScope(): ?string { return $this->get('required_scope'); }
    public function hasRequiredScope(): bool { return $this->has('required_scope'); }
    /** Shape $ (Value): boolean. Whether a person must approve the action before it is performed.
     * @return ?bool
     */
    public function getRequiresHumanConfirmation(): ?bool { return $this->get('requires_human_confirmation'); }
    public function hasRequiresHumanConfirmation(): bool { return $this->has('requires_human_confirmation'); }
    /** Shape $ (Value): integer. Suggested wait before performing the action, in milliseconds. Format: int32.
     * @return ?int
     */
    public function getSuggestedDelayMilliseconds(): ?int { return $this->get('suggested_delay_milliseconds'); }
    public function hasSuggestedDelayMilliseconds(): bool { return $this->has('suggested_delay_milliseconds'); }
    /** Shape $ (Value): string. Public endpoint or launch URL for this remediation action, when applicable.
     * @return ?string
     */
    public function getUrl(): ?string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
