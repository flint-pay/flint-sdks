<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $current_deadline_at
 * @property-read list<string> $currently_due
 * @property-read string $disabled_reason
 * @property-read list<string> $eventually_due
 * @property-read list<string> $past_due
 * @property-read list<string> $pending_verification
 * Presence-aware response; omitted fields throw when accessed. */
final class OnboardingRequirements extends Model {
    /** @param array{'current_deadline_at'?: string, 'currently_due'?: list<string>, 'disabled_reason'?: string, 'eventually_due'?: list<string>, 'past_due'?: list<string>, 'pending_verification'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingRequirements')); }
    /** @return string
     * @throws SdkError When current_deadline_at is omitted; use hasCurrentDeadlineAt() or valueOrDefault().
     */
    public function getCurrentDeadlineAt(): string { return $this->get('current_deadline_at'); }
    public function hasCurrentDeadlineAt(): bool { return $this->has('current_deadline_at'); }
    /** @return list<string>
     * @throws SdkError When currently_due is omitted; use hasCurrentlyDue() or valueOrDefault().
     */
    public function getCurrentlyDue(): array { return $this->get('currently_due'); }
    public function hasCurrentlyDue(): bool { return $this->has('currently_due'); }
    /** @return string
     * @throws SdkError When disabled_reason is omitted; use hasDisabledReason() or valueOrDefault().
     */
    public function getDisabledReason(): string { return $this->get('disabled_reason'); }
    public function hasDisabledReason(): bool { return $this->has('disabled_reason'); }
    /** @return list<string>
     * @throws SdkError When eventually_due is omitted; use hasEventuallyDue() or valueOrDefault().
     */
    public function getEventuallyDue(): array { return $this->get('eventually_due'); }
    public function hasEventuallyDue(): bool { return $this->has('eventually_due'); }
    /** @return list<string>
     * @throws SdkError When past_due is omitted; use hasPastDue() or valueOrDefault().
     */
    public function getPastDue(): array { return $this->get('past_due'); }
    public function hasPastDue(): bool { return $this->has('past_due'); }
    /** @return list<string>
     * @throws SdkError When pending_verification is omitted; use hasPendingVerification() or valueOrDefault().
     */
    public function getPendingVerification(): array { return $this->get('pending_verification'); }
    public function hasPendingVerification(): bool { return $this->has('pending_verification'); }
}
