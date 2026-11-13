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
    /** When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When ends_at is omitted; use hasEndsAt() or valueOrDefault().
     */
    public function getEndsAt(): string|\DateTimeInterface { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Value enum: "buyer", "merchant".
     * @return string
     * @throws SdkError When fixable_by is omitted; use hasFixableBy() or valueOrDefault().
     */
    public function getFixableBy(): string { return $this->get('fixable_by'); }
    public function hasFixableBy(): bool { return $this->has('fixable_by'); }
    /** Why the subscription's delivery needs attention. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint held the renewal. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): string|\DateTimeInterface { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
