<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $detected_at
 * @property-read string $fixable_by
 * @property-read string $reason
 * @property-read string $renewal_at
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionUpcomingDeliveryHold extends Model {
    /** @param array{'detected_at': string, 'fixable_by': string, 'reason': string, 'renewal_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionUpcomingDeliveryHold')); }
    /** @return string
     * @throws SdkError When detected_at is omitted; use hasDetectedAt() or valueOrDefault().
     */
    public function getDetectedAt(): string { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** @return string
     * @throws SdkError When fixable_by is omitted; use hasFixableBy() or valueOrDefault().
     */
    public function getFixableBy(): string { return $this->get('fixable_by'); }
    public function hasFixableBy(): bool { return $this->has('fixable_by'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When renewal_at is omitted; use hasRenewalAt() or valueOrDefault().
     */
    public function getRenewalAt(): string { return $this->get('renewal_at'); }
    public function hasRenewalAt(): bool { return $this->has('renewal_at'); }
}
