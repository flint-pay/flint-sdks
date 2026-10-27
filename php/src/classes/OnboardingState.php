<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_issue_api_key
 * @property-read ?string $country
 * @property-read ?string $default_sandbox_id
 * @property-read string $merchant_id
 * @property-read ?OnboardingNextStep $next_step
 * @property-read OnboardingProfile $profile
 * @property-read mixed $requested_capabilities
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class OnboardingState extends Model {
    /** @param array{'can_issue_api_key': bool, 'country'?: string, 'default_sandbox_id'?: string, 'merchant_id': string, 'next_step'?: mixed, 'profile': mixed, 'requested_capabilities'?: mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingState')); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getCanIssueApiKey(): bool { return $this->get('can_issue_api_key'); }
    public function hasCanIssueApiKey(): bool { return $this->has('can_issue_api_key'); }
    /** Shape $ (Value): string. Immutable business country for the selected stable provider-account target. Omitted until the target has selected an effective country. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Value enum: "US".
     * @return ?string
     */
    public function getCountry(): ?string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDefaultSandboxId(): ?string { return $this->get('default_sandbox_id'); }
    public function hasDefaultSandboxId(): bool { return $this->has('default_sandbox_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see OnboardingNextStep}. The next step to move onboarding forward, with who owns it, whether a machine can complete it, and the endpoint to submit to.
     * @return ?OnboardingNextStep
     */
    public function getNextStep(): ?OnboardingNextStep { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** Shape $ (Value): {@see OnboardingProfile}. Contact and website details recorded for a merchant during onboarding.
     * @return OnboardingProfile
     */
    public function getProfile(): OnboardingProfile { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Shape $ (Value): Array of string. Canonical Flint capability intent persisted on the selected stable provider-account target. The initial merchant-account configuration always includes accept_card_payments and receive_payouts and may also include accept_ach_debit_payments. [] enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". Shape $.oneOf[1] (Value): Array of string. minItems: 2. maxItems: 2. uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts". Shape $.oneOf[1][] (Value): string.  Value enum: "accept_card_payments", "receive_payouts". Shape $.oneOf[2] (Value): Array of string. minItems: 3. maxItems: 3. uniqueItems: true. [] enum: "accept_ach_debit_payments", "accept_card_payments", "receive_payouts". Shape $.oneOf[2][] (Value): string.  Value enum: "accept_ach_debit_payments", "accept_card_payments", "receive_payouts".
     * @return mixed
     */
    public function getRequestedCapabilities(): mixed { return $this->get('requested_capabilities'); }
    public function hasRequestedCapabilities(): bool { return $this->has('requested_capabilities'); }
    /** Shape $ (Value): string. Onboarding workflow status for activation and remediation, not a durable account-readiness boolean. Value enum: "complete", "waiting_for_review", "needs_external_action", "needs_input".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
