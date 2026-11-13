<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access
 * @property-read string $initial_onboarding
 * @property-read bool $issue_test_key
 * @property-read string $name
 * @property-read list<string> $scopes
 * @property-read string|\DateTimeInterface $test_key_expires_at
 * @property-read string $test_key_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSandboxRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSandboxRequestInput')); }
    /** Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     * @return string
     * @throws SdkError When access is omitted; use hasAccess() or valueOrDefault().
     */
    public function getAccess(): string { return $this->get('access'); }
    public function hasAccess(): bool { return $this->has('access'); }
    /** The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: "complete". Value enum: "complete", "not_started".
     * @return string
     * @throws SdkError When initial_onboarding is omitted; use hasInitialOnboarding() or valueOrDefault().
     */
    public function getInitialOnboarding(): string { return $this->get('initial_onboarding'); }
    public function hasInitialOnboarding(): bool { return $this->has('initial_onboarding'); }
    /** issue_test_key
     * @return bool
     * @throws SdkError When issue_test_key is omitted; use hasIssueTestKey() or valueOrDefault().
     */
    public function getIssueTestKey(): bool { return $this->get('issue_test_key'); }
    public function hasIssueTestKey(): bool { return $this->has('issue_test_key'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.allocation.write", "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.returns.operations.write", "commerce.returns.policies.write", "commerce.returns.read", "commerce.returns.reasons.write", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read", "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.merchant_signups.read", "developer.merchant_signups.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payment_splits.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "money_movement.platform_fees.read", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "payments.readers.read", "payments.readers.write", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.  Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.allocation.write", "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.returns.operations.write", "commerce.returns.policies.write", "commerce.returns.read", "commerce.returns.reasons.write", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read", "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.merchant_signups.read", "developer.merchant_signups.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payment_splits.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "money_movement.platform_fees.read", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "payments.readers.read", "payments.readers.write", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When test_key_expires_at is omitted; use hasTestKeyExpiresAt() or valueOrDefault().
     */
    public function getTestKeyExpiresAt(): string|\DateTimeInterface { return $this->get('test_key_expires_at'); }
    public function hasTestKeyExpiresAt(): bool { return $this->has('test_key_expires_at'); }
    /** minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When test_key_name is omitted; use hasTestKeyName() or valueOrDefault().
     */
    public function getTestKeyName(): string { return $this->get('test_key_name'); }
    public function hasTestKeyName(): bool { return $this->has('test_key_name'); }
}
