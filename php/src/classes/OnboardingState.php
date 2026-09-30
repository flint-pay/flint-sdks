<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OnboardingNextStep> $available_actions
 * @property-read bool $can_issue_api_key
 * @property-read string $capabilities_synced_at
 * @property-read string $country
 * @property-read string $default_sandbox_id
 * @property-read bool $email_verified
 * @property-read bool $merchant_created
 * @property-read string $merchant_id
 * @property-read OnboardingNextStep $next_step
 * @property-read list<OnboardingNextStep> $pending_steps
 * @property-read OnboardingProfile $profile
 * @property-read string $readiness_observed_at
 * @property-read mixed $requested_capabilities
 * @property-read OnboardingRequirements $requirements
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class OnboardingState extends Model {
    /** @param array{'available_actions'?: list<mixed>, 'can_issue_api_key': bool, 'capabilities_synced_at'?: string, 'country'?: string, 'default_sandbox_id'?: string, 'email_verified': bool, 'merchant_created': bool, 'merchant_id': string, 'next_step'?: mixed, 'pending_steps'?: list<mixed>, 'profile': mixed, 'readiness_observed_at'?: string, 'requested_capabilities'?: mixed, 'requirements': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingState')); }
    /** @return list<OnboardingNextStep>
     * @throws SdkError When available_actions is omitted; use hasAvailableActions() or valueOrDefault().
     */
    public function getAvailableActions(): array { return $this->get('available_actions'); }
    public function hasAvailableActions(): bool { return $this->has('available_actions'); }
    /** @return bool
     * @throws SdkError When can_issue_api_key is omitted; use hasCanIssueApiKey() or valueOrDefault().
     */
    public function getCanIssueApiKey(): bool { return $this->get('can_issue_api_key'); }
    public function hasCanIssueApiKey(): bool { return $this->has('can_issue_api_key'); }
    /** @return string
     * @throws SdkError When capabilities_synced_at is omitted; use hasCapabilitiesSyncedAt() or valueOrDefault().
     */
    public function getCapabilitiesSyncedAt(): string { return $this->get('capabilities_synced_at'); }
    public function hasCapabilitiesSyncedAt(): bool { return $this->has('capabilities_synced_at'); }
    /** @return string
     * @throws SdkError When country is omitted; use hasCountry() or valueOrDefault().
     */
    public function getCountry(): string { return $this->get('country'); }
    public function hasCountry(): bool { return $this->has('country'); }
    /** @return string
     * @throws SdkError When default_sandbox_id is omitted; use hasDefaultSandboxId() or valueOrDefault().
     */
    public function getDefaultSandboxId(): string { return $this->get('default_sandbox_id'); }
    public function hasDefaultSandboxId(): bool { return $this->has('default_sandbox_id'); }
    /** @return bool
     * @throws SdkError When email_verified is omitted; use hasEmailVerified() or valueOrDefault().
     */
    public function getEmailVerified(): bool { return $this->get('email_verified'); }
    public function hasEmailVerified(): bool { return $this->has('email_verified'); }
    /** @return bool
     * @throws SdkError When merchant_created is omitted; use hasMerchantCreated() or valueOrDefault().
     */
    public function getMerchantCreated(): bool { return $this->get('merchant_created'); }
    public function hasMerchantCreated(): bool { return $this->has('merchant_created'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return OnboardingNextStep
     * @throws SdkError When next_step is omitted; use hasNextStep() or valueOrDefault().
     */
    public function getNextStep(): OnboardingNextStep { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** @return list<OnboardingNextStep>
     * @throws SdkError When pending_steps is omitted; use hasPendingSteps() or valueOrDefault().
     */
    public function getPendingSteps(): array { return $this->get('pending_steps'); }
    public function hasPendingSteps(): bool { return $this->has('pending_steps'); }
    /** @return OnboardingProfile
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): OnboardingProfile { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** @return string
     * @throws SdkError When readiness_observed_at is omitted; use hasReadinessObservedAt() or valueOrDefault().
     */
    public function getReadinessObservedAt(): string { return $this->get('readiness_observed_at'); }
    public function hasReadinessObservedAt(): bool { return $this->has('readiness_observed_at'); }
    /** @return mixed
     * @throws SdkError When requested_capabilities is omitted; use hasRequestedCapabilities() or valueOrDefault().
     */
    public function getRequestedCapabilities(): mixed { return $this->get('requested_capabilities'); }
    public function hasRequestedCapabilities(): bool { return $this->has('requested_capabilities'); }
    /** @return OnboardingRequirements
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): OnboardingRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
