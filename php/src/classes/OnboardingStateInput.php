<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_issue_api_key
 * @property-read string $country
 * @property-read string $default_sandbox_id
 * @property-read string $merchant_id
 * @property-read ReadinessActionInput|array<array-key, mixed>|\stdClass $next_step
 * @property-read OnboardingProfileInput|array<array-key, mixed>|\stdClass $profile
 * @property-read list<string> $requested_capabilities
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingStateInput extends Model {
    /** @param array{'can_issue_api_key': bool, 'country'?: string, 'default_sandbox_id'?: string, 'merchant_id': string, 'next_step'?: ReadinessActionInput|array<array-key, mixed>|\stdClass, 'profile': OnboardingProfileInput|array<array-key, mixed>|\stdClass, 'requested_capabilities'?: list<string>, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingStateInput')); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When can_issue_api_key is omitted; use hasCanIssueApiKey() or valueOrDefault().
     */
    public function getCanIssueApiKey(): bool { return $this->get('can_issue_api_key'); }
    public function hasCanIssueApiKey(): bool { return $this->has('can_issue_api_key'); }
    /** Shape $ (Value): string. Immutable business country for the selected stable provider-account target. Omitted until the target has selected an effective country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". Value enum: "US".
     * @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When default_sandbox_id is omitted; use hasDefaultSandboxId() or valueOrDefault().
     */
    public function getDefaultSandboxId(): string { return $this->get('default_sandbox_id'); }
    public function hasDefaultSandboxId(): bool { return $this->has('default_sandbox_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see ReadinessActionInput}. A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields.
     * @return ReadinessActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When next_step is omitted; use hasNextStep() or valueOrDefault().
     */
    public function getNextStep(): mixed { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** Shape $ (Value): {@see OnboardingProfileInput}. Contact and website details recorded for a merchant during onboarding.
     * @return OnboardingProfileInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): mixed { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Shape $ (Value): Array of string. Canonical Flint capability intent persisted on the selected stable provider-account target. The initial merchant-account configuration always includes accept_card_payments and receive_payouts and may also include accept_ach_debit_payments. minItems: 2. maxItems: 3. uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". Shape $[] (Value): string.  Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     * @return list<string>
     * @throws SdkError When requested_capabilities is omitted; use hasRequestedCapabilities() or valueOrDefault().
     */
    public function getRequestedCapabilities(): array { return $this->get('requested_capabilities'); }
    public function hasRequestedCapabilities(): bool { return $this->has('requested_capabilities'); }
    /** Shape $ (Value): string. Onboarding workflow status for activation and remediation, not a durable account-readiness boolean. Value enum: "complete", "waiting_for_review", "needs_external_action", "needs_input".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
