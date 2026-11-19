<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $detected_at
 * @property-read string $reason
 * @property-read ?string $retry_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionBillingHold extends Model {
    /** @param array{'detected_at': string, 'reason': string, 'retry_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingHold')); }
    /** When Flint first detected this billing hold. Format: date-time.
     * @return string
     */
    public function getDetectedAt(): string { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Why subscription billing cannot proceed. Treat unrecognized values as other. Value enum: "configuration", "retrying", "platform_review", "flint_restriction", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: date-time.
     * @return ?string
     */
    public function getRetryAt(): ?string { return $this->get('retry_at'); }
    public function hasRetryAt(): bool { return $this->has('retry_at'); }
}
