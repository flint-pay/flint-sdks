<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $detected_at
 * @property-read string|null $reason
 * @property-read string|null $retry_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionBillingHoldPreviousAttributes extends Model {
    /** @param array{'detected_at'?: mixed, 'reason'?: mixed, 'retry_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingHoldPreviousAttributes')); }
    /** When Flint first detected this billing hold. anyOf[1] (Value): string. When Flint first detected this billing hold. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDetectedAt(): string|null { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Why subscription billing cannot proceed. Treat unrecognized values as other. Value enum: "configuration", "retrying", "other". anyOf[1] (Value): string. Why subscription billing cannot proceed. Treat unrecognized values as other. Value enum: "configuration", "retrying", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. anyOf[1] (Value): string. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRetryAt(): string|null { return $this->get('retry_at'); }
    public function hasRetryAt(): bool { return $this->has('retry_at'); }
}
