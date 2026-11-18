<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $detected_at
 * @property-read string|null $reason
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionBillingHoldPreviousAttributes extends Model {
    /** @param array{'detected_at'?: mixed, 'reason'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingHoldPreviousAttributes')); }
    /** When Flint first detected this billing hold. anyOf[1] (Value): string. When Flint first detected this billing hold. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDetectedAt(): string|null { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Why subscription billing cannot proceed. Value enum: "configuration", "other". anyOf[1] (Value): string. Why subscription billing cannot proceed. Value enum: "configuration", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
