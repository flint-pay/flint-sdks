<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $ends_at
 * @property-read string|null $fixable_by
 * @property-read string|null $reason
 * @property-read string|\DateTimeInterface|null $started_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryHoldPreviousAttributesInput extends Model {
    /** @param array{'ends_at'?: string|\DateTimeInterface|null, 'fixable_by'?: string|null, 'reason'?: string|null, 'started_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryHoldPreviousAttributesInput')); }
    /** When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. anyOf[1] (Value): string. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When ends_at is omitted; use hasEndsAt() or valueOrDefault().
     */
    public function getEndsAt(): mixed { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Value enum: "buyer", "merchant". anyOf[1] (Value): string. Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fixable_by is omitted; use hasFixableBy() or valueOrDefault().
     */
    public function getFixableBy(): mixed { return $this->get('fixable_by'); }
    public function hasFixableBy(): bool { return $this->has('fixable_by'); }
    /** Why the subscription's delivery needs attention. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1] (Value): string. Why the subscription's delivery needs attention. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint held the renewal. anyOf[1] (Value): string. When Flint held the renewal. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): mixed { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
