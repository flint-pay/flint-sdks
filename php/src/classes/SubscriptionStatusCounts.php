<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active_count
 * @property-read int $canceled_count
 * @property-read int $incomplete_count
 * @property-read int $past_due_count
 * @property-read int $paused_count
 * @property-read int $scheduled_count
 * @property-read int $trialing_count
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionStatusCounts extends Model {
    /** @param array{'active_count': int, 'canceled_count': int, 'incomplete_count': int, 'past_due_count': int, 'paused_count': int, 'scheduled_count': int, 'trialing_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionStatusCounts')); }
    /** Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: int64.
     * @return int
     */
    public function getActiveCount(): int { return $this->get('active_count'); }
    public function hasActiveCount(): bool { return $this->has('active_count'); }
    /** Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: int64.
     * @return int
     */
    public function getCanceledCount(): int { return $this->get('canceled_count'); }
    public function hasCanceledCount(): bool { return $this->has('canceled_count'); }
    /** Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: int64.
     * @return int
     */
    public function getIncompleteCount(): int { return $this->get('incomplete_count'); }
    public function hasIncompleteCount(): bool { return $this->has('incomplete_count'); }
    /** Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: int64.
     * @return int
     */
    public function getPastDueCount(): int { return $this->get('past_due_count'); }
    public function hasPastDueCount(): bool { return $this->has('past_due_count'); }
    /** Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: int64.
     * @return int
     */
    public function getPausedCount(): int { return $this->get('paused_count'); }
    public function hasPausedCount(): bool { return $this->has('paused_count'); }
    /** Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: int64.
     * @return int
     */
    public function getScheduledCount(): int { return $this->get('scheduled_count'); }
    public function hasScheduledCount(): bool { return $this->has('scheduled_count'); }
    /** Current subscriptions with this status, across currencies. Selected by current subscription status, independent of the requested half-open period. Format: int64.
     * @return int
     */
    public function getTrialingCount(): int { return $this->get('trialing_count'); }
    public function hasTrialingCount(): bool { return $this->has('trialing_count'); }
}
