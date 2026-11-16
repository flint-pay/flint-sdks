<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CapabilityReadinessPreviousAttributes>|null $capabilities
 * @property-read string|null $observed_at
 * @property-read ReadinessAxisPreviousAttributes|null $payments
 * @property-read ReadinessAxisPreviousAttributes|null $payouts
 * @property-read ReadinessRequirementsPreviousAttributes|null $requirements
 * Presence-aware response; omitted optional fields return null. */
final class MerchantReadinessPreviousAttributes extends Model {
    /** @param array{'capabilities'?: mixed, 'observed_at'?: mixed, 'payments'?: mixed, 'payouts'?: mixed, 'requirements'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantReadinessPreviousAttributes')); }
    /** Readiness of each payment and money movement capability, with its own status, requirements, and next actions. anyOf[1] (Value): Array of {@see CapabilityReadinessPreviousAttributes}. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. anyOf[1][] (Value): {@see CapabilityReadinessPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CapabilityReadinessPreviousAttributes>|null
     */
    public function getCapabilities(): array|null { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getObservedAt(): string|null { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Readiness to accept payments. anyOf[1] (Value): {@see ReadinessAxisPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReadinessAxisPreviousAttributes|null
     */
    public function getPayments(): ReadinessAxisPreviousAttributes|null { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Readiness to receive payouts. anyOf[1] (Value): {@see ReadinessAxisPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReadinessAxisPreviousAttributes|null
     */
    public function getPayouts(): ReadinessAxisPreviousAttributes|null { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
    /** Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. anyOf[1] (Value): {@see ReadinessRequirementsPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReadinessRequirementsPreviousAttributes|null
     */
    public function getRequirements(): ReadinessRequirementsPreviousAttributes|null { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
