<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $active_count
 * @property-read string $canceled_count
 * @property-read string $incomplete_count
 * @property-read string $past_due_count
 * @property-read string $paused_count
 * @property-read string $scheduled_count
 * @property-read string $trialing_count
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionStatusCounts extends Model {
    /** @param array{'active_count': string, 'canceled_count': string, 'incomplete_count': string, 'past_due_count': string, 'paused_count': string, 'scheduled_count': string, 'trialing_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionStatusCounts')); }
    /** Shape $ (Value): integer string. Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getActiveCount(): string { return $this->get('active_count'); }
    public function hasActiveCount(): bool { return $this->has('active_count'); }
    /** Shape $ (Value): integer string. Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getCanceledCount(): string { return $this->get('canceled_count'); }
    public function hasCanceledCount(): bool { return $this->has('canceled_count'); }
    /** Shape $ (Value): integer string. Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getIncompleteCount(): string { return $this->get('incomplete_count'); }
    public function hasIncompleteCount(): bool { return $this->has('incomplete_count'); }
    /** Shape $ (Value): integer string. Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getPastDueCount(): string { return $this->get('past_due_count'); }
    public function hasPastDueCount(): bool { return $this->has('past_due_count'); }
    /** Shape $ (Value): integer string. Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getPausedCount(): string { return $this->get('paused_count'); }
    public function hasPausedCount(): bool { return $this->has('paused_count'); }
    /** Shape $ (Value): integer string. Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getScheduledCount(): string { return $this->get('scheduled_count'); }
    public function hasScheduledCount(): bool { return $this->has('scheduled_count'); }
    /** Shape $ (Value): integer string. Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getTrialingCount(): string { return $this->get('trialing_count'); }
    public function hasTrialingCount(): bool { return $this->has('trialing_count'); }
}
