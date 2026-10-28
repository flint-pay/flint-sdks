<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access
 * @property-read string $api_key_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $created_by
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $key_prefix
 * @property-read string|\DateTimeInterface $last_used_at
 * @property-read string $merchant_id
 * @property-read string $name
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * @property-read string $secret_key
 * Presence-aware input; omitted fields throw when accessed. */
final class APIKeyWithSecretInput extends Model {
    /** @param array{'access': string, 'api_key_id': string, 'created_at'?: string|\DateTimeInterface, 'created_by'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'key_prefix': string, 'last_used_at'?: string|\DateTimeInterface, 'merchant_id'?: string, 'name': string, 'revoked_at'?: string|\DateTimeInterface, 'sandbox_id'?: string, 'scopes': list<string>, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'secret_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIKeyWithSecretInput')); }
    /** Shape $ (Value): string. Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Value enum: "full", "read_only", "restricted".
     * @return string
     * @throws SdkError When access is omitted; use hasAccess() or valueOrDefault().
     */
    public function getAccess(): string { return $this->get('access'); }
    public function hasAccess(): bool { return $this->has('access'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When api_key_id is omitted; use hasApiKeyId() or valueOrDefault().
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ResourceReferenceInput}. The API key or user that created this key. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When key_prefix is omitted; use hasKeyPrefix() or valueOrDefault().
     */
    public function getKeyPrefix(): string { return $this->get('key_prefix'); }
    public function hasKeyPrefix(): bool { return $this->has('key_prefix'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When last_used_at is omitted; use hasLastUsedAt() or valueOrDefault().
     */
    public function getLastUsedAt(): string|\DateTimeInterface { return $this->get('last_used_at'); }
    public function hasLastUsedAt(): bool { return $this->has('last_used_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Shape $ (Value): Array of string. The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.allocation.write", "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.returns.operations.write", "commerce.returns.policies.write", "commerce.returns.read", "commerce.returns.reasons.write", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write". Shape $[] (Value): string.  Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.allocation.write", "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.returns.operations.write", "commerce.returns.policies.write", "commerce.returns.read", "commerce.returns.reasons.write", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** Shape $ (Value): string. Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Value enum: "active", "expired", "revoked".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string. One-time secret returned only when the API key is created.
     * @return string
     * @throws SdkError When secret_key is omitted; use hasSecretKey() or valueOrDefault().
     */
    public function getSecretKey(): string { return $this->get('secret_key'); }
    public function hasSecretKey(): bool { return $this->has('secret_key'); }
}
