<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $ends_at
 * @property-read string|null $fixable_by
 * @property-read string|null $reason
 * @property-read string|null $started_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryHoldPreviousAttributes extends Model {
    /** @param array{'ends_at'?: mixed, 'fixable_by'?: mixed, 'reason'?: mixed, 'started_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryHoldPreviousAttributes')); }
    /** When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. anyOf[1] (Value): string. When the hold runs out: 14 days or one billing interval after the billing date, whichever is sooner. A hold that runs out pauses the subscription with `pause_reason: delivery_action_required`. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEndsAt(): string|null { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Value enum: "buyer", "merchant". anyOf[1] (Value): string. Who can clear the hold. `method_unavailable` holds are `buyer` unless your `customer_account.buyer_capabilities.can_update_delivery` is false. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFixableBy(): string|null { return $this->get('fixable_by'); }
    public function hasFixableBy(): bool { return $this->has('fixable_by'); }
    /** Why the subscription's delivery needs attention. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[1] (Value): string. Why the subscription's delivery needs attention. Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint held the renewal. anyOf[1] (Value): string. When Flint held the renewal. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartedAt(): string|null { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
