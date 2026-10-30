<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CapabilityReadinessInput|array<array-key, mixed>|\stdClass> $capabilities
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read ReadinessAxisInput|array<array-key, mixed>|\stdClass $payments
 * @property-read ReadinessAxisInput|array<array-key, mixed>|\stdClass $payouts
 * @property-read ReadinessRequirementsInput|array<array-key, mixed>|\stdClass $requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantReadinessInput extends Model {
    /** @param array{'capabilities': list<CapabilityReadinessInput|array<array-key, mixed>|\stdClass>, 'observed_at': string|\DateTimeInterface, 'payments': ReadinessAxisInput|array<array-key, mixed>|\stdClass, 'payouts': ReadinessAxisInput|array<array-key, mixed>|\stdClass, 'requirements': ReadinessRequirementsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantReadinessInput')); }
    /**  [] (Value): {@see CapabilityReadinessInput}. Merchant capability readiness for a payment or money movement capability.
     * @return list<CapabilityReadinessInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When capabilities is omitted; use hasCapabilities() or valueOrDefault().
     */
    public function getCapabilities(): array { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.
     * @return ReadinessAxisInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.
     * @return ReadinessAxisInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payouts is omitted; use hasPayouts() or valueOrDefault().
     */
    public function getPayouts(): mixed { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
    /** Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.
     * @return ReadinessRequirementsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
