<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $ends_at
 * @property-read string $fixable_by
 * @property-read string $reason
 * @property-read string|\DateTimeInterface $started_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryHoldInput extends Model {
    /** @param array{'ends_at': string|\DateTimeInterface, 'fixable_by': string, 'reason': string, 'started_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryHoldInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When ends_at is omitted; use hasEndsAt() or valueOrDefault().
     */
    public function getEndsAt(): string|\DateTimeInterface { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
