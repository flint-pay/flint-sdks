<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass> $blocked_reasons
 * @property-read string $capability
 * @property-read string $domain
 * @property-read list<NextActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read CapabilityRequirementsInput|array<array-key, mixed>|\stdClass $requirements
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CapabilityInput extends Model {
    /** @param array{'blocked_reasons'?: list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'capability': string, 'domain': string, 'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'observed_at'?: string|\DateTimeInterface, 'requirements': CapabilityRequirementsInput|array<array-key, mixed>|\stdClass, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CapabilityInput')); }
    /** @return list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>
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
    /** @return list<NextActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** @return CapabilityRequirementsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
