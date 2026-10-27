<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $ends_at
 * @property-read string $fixable_by
 * @property-read string $reason
 * @property-read string $started_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryHold extends Model {
    /** @param array{'ends_at': string, 'fixable_by': string, 'reason': string, 'started_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryHold')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEndsAt(): string { return $this->get('ends_at'); }
    public function hasEndsAt(): bool { return $this->has('ends_at'); }
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant".
     * @return string
     */
    public function getFixableBy(): string { return $this->get('fixable_by'); }
    public function hasFixableBy(): bool { return $this->has('fixable_by'); }
    /** Shape $ (Value): string.  Value enum: "method_unavailable", "destination_not_served", "rate_unavailable".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
