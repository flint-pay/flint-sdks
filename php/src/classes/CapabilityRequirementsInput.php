<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $current_deadline_at
 * @property-read list<string> $currently_due_fields
 * @property-read string|null $disabled_reason
 * @property-read list<string> $eventually_due_fields
 * @property-read list<string> $past_due_fields
 * @property-read list<string> $pending_verification_fields
 * Presence-aware input; omitted fields throw when accessed. */
final class CapabilityRequirementsInput extends Model {
    /** @param array{'current_deadline_at'?: string|\DateTimeInterface, 'currently_due_fields'?: list<string>, 'disabled_reason'?: string|null, 'eventually_due_fields'?: list<string>, 'past_due_fields'?: list<string>, 'pending_verification_fields'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CapabilityRequirementsInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When current_deadline_at is omitted; use hasCurrentDeadlineAt() or valueOrDefault().
     */
    public function getCurrentDeadlineAt(): string|\DateTimeInterface { return $this->get('current_deadline_at'); }
    public function hasCurrentDeadlineAt(): bool { return $this->has('current_deadline_at'); }
    /** @return list<string>
     * @throws SdkError When currently_due_fields is omitted; use hasCurrentlyDueFields() or valueOrDefault().
     */
    public function getCurrentlyDueFields(): array { return $this->get('currently_due_fields'); }
    public function hasCurrentlyDueFields(): bool { return $this->has('currently_due_fields'); }
    /** @return string|null
     * @throws SdkError When disabled_reason is omitted; use hasDisabledReason() or valueOrDefault().
     */
    public function getDisabledReason(): string|null { return $this->get('disabled_reason'); }
    public function hasDisabledReason(): bool { return $this->has('disabled_reason'); }
    /** @return list<string>
     * @throws SdkError When eventually_due_fields is omitted; use hasEventuallyDueFields() or valueOrDefault().
     */
    public function getEventuallyDueFields(): array { return $this->get('eventually_due_fields'); }
    public function hasEventuallyDueFields(): bool { return $this->has('eventually_due_fields'); }
    /** @return list<string>
     * @throws SdkError When past_due_fields is omitted; use hasPastDueFields() or valueOrDefault().
     */
    public function getPastDueFields(): array { return $this->get('past_due_fields'); }
    public function hasPastDueFields(): bool { return $this->has('past_due_fields'); }
    /** @return list<string>
     * @throws SdkError When pending_verification_fields is omitted; use hasPendingVerificationFields() or valueOrDefault().
     */
    public function getPendingVerificationFields(): array { return $this->get('pending_verification_fields'); }
    public function hasPendingVerificationFields(): bool { return $this->has('pending_verification_fields'); }
}
