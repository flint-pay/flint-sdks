<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $detected_at
 * @property-read string|null $fixable_by
 * @property-read string|null $reason
 * @property-read string|\DateTimeInterface|null $renewal_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionUpcomingDeliveryHoldPreviousAttributesInput extends Model {
    /** @param array{'detected_at'?: string|\DateTimeInterface|null, 'fixable_by'?: string|null, 'reason'?: string|null, 'renewal_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionUpcomingDeliveryHoldPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When detected_at is omitted; use hasDetectedAt() or valueOrDefault().
     */
    public function getDetectedAt(): mixed { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Value enum: "buyer", "merchant". anyOf[1] (Value): string. Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update delivery and another offered method can serve the subscription. They are `merchant` when your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method was revoked and no other offered method can serve the subscription. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
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
    /** Time of the next renewal affected by this delivery issue. anyOf[1] (Value): string. Time of the next renewal affected by this delivery issue. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When renewal_at is omitted; use hasRenewalAt() or valueOrDefault().
     */
    public function getRenewalAt(): mixed { return $this->get('renewal_at'); }
    public function hasRenewalAt(): bool { return $this->has('renewal_at'); }
}
