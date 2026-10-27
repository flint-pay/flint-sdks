<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CapabilityReadiness> $capabilities
 * @property-read string $observed_at
 * @property-read ReadinessAxis $payments
 * @property-read ReadinessAxis $payouts
 * @property-read ReadinessRequirements $requirements
 * Presence-aware response; omitted optional fields return null. */
final class MerchantReadiness extends Model {
    /** @param array{'capabilities': list<mixed>, 'observed_at': string, 'payments': mixed, 'payouts': mixed, 'requirements': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantReadiness')); }
    /** Shape $ (Value): Array of {@see CapabilityReadiness}. Shape $[] (Value): {@see CapabilityReadiness}. Merchant capability readiness for a payment or money movement capability.
     * @return list<CapabilityReadiness>
     */
    public function getCapabilities(): array { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Shape $ (Value): {@see ReadinessAxis}. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.
     * @return ReadinessAxis
     */
    public function getPayments(): ReadinessAxis { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Shape $ (Value): {@see ReadinessAxis}. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.
     * @return ReadinessAxis
     */
    public function getPayouts(): ReadinessAxis { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
    /** Shape $ (Value): {@see ReadinessRequirements}. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.
     * @return ReadinessRequirements
     */
    public function getRequirements(): ReadinessRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
