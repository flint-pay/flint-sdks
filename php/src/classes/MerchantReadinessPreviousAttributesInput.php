<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CapabilityReadinessPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $capabilities
 * @property-read string|\DateTimeInterface|null $observed_at
 * @property-read ReadinessAxisPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payments
 * @property-read ReadinessAxisPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payouts
 * @property-read ReadinessRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantReadinessPreviousAttributesInput extends Model {
    /** @param array{'capabilities'?: list<CapabilityReadinessPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'observed_at'?: string|\DateTimeInterface|null, 'payments'?: ReadinessAxisPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payouts'?: ReadinessAxisPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'requirements'?: ReadinessRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantReadinessPreviousAttributesInput')); }
    /** Readiness of each payment and money movement capability, with its own status, requirements, and next actions. anyOf[1] (Value): Array of {@see CapabilityReadinessPreviousAttributesInput}. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. anyOf[1][] (Value): {@see CapabilityReadinessPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CapabilityReadinessPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When capabilities is omitted; use hasCapabilities() or valueOrDefault().
     */
    public function getCapabilities(): mixed { return $this->get('capabilities'); }
    public function hasCapabilities(): bool { return $this->has('capabilities'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): mixed { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Readiness to accept payments. anyOf[1] (Value): {@see ReadinessAxisPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReadinessAxisPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Readiness to receive payouts. anyOf[1] (Value): {@see ReadinessAxisPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReadinessAxisPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payouts is omitted; use hasPayouts() or valueOrDefault().
     */
    public function getPayouts(): mixed { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
    /** Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. anyOf[1] (Value): {@see ReadinessRequirementsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReadinessRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): mixed { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
