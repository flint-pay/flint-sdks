<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $detected_at
 * @property-read string $reason
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionBillingHold extends Model {
    /** @param array{'detected_at': string, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingHold')); }
    /** When Flint first detected this billing hold. Format: date-time.
     * @return string
     */
    public function getDetectedAt(): string { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Why subscription billing cannot proceed. Value enum: "configuration", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
