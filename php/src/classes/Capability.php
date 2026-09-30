<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyMovementBlockedReason> $blocked_reasons
 * @property-read string $capability
 * @property-read string $domain
 * @property-read list<NextAction> $next_actions
 * @property-read string $observed_at
 * @property-read CapabilityRequirements $requirements
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class Capability extends Model {
    /** @param array{'blocked_reasons'?: list<mixed>, 'capability': string, 'domain': string, 'next_actions'?: list<mixed>, 'observed_at'?: string, 'requirements': object{'current_deadline_at'?: string, 'currently_due_fields'?: list<string>, 'disabled_reason'?: string|null, 'eventually_due_fields'?: list<string>, 'past_due_fields'?: list<string>, 'pending_verification_fields'?: list<string>}, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Capability')); }
    /** @return list<MoneyMovementBlockedReason>
     * @throws SdkError When blocked_reasons is omitted; use hasBlockedReasons() or valueOrDefault().
     */
    public function getBlockedReasons(): array { return $this->get('blocked_reasons'); }
    public function hasBlockedReasons(): bool { return $this->has('blocked_reasons'); }
    /** @return string
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** @return string
     * @throws SdkError When domain is omitted; use hasDomain() or valueOrDefault().
     */
    public function getDomain(): string { return $this->get('domain'); }
    public function hasDomain(): bool { return $this->has('domain'); }
    /** @return list<NextAction>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** @return string
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** @return CapabilityRequirements
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): CapabilityRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
