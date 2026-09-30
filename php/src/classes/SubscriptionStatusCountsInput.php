<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $active_count
 * @property-read string $canceled_count
 * @property-read string $incomplete_count
 * @property-read string $past_due_count
 * @property-read string $paused_count
 * @property-read string $trialing_count
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionStatusCountsInput extends Model {
    /** @param array{'active_count': string, 'canceled_count': string, 'incomplete_count': string, 'past_due_count': string, 'paused_count': string, 'trialing_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionStatusCountsInput')); }
    /** @return string
     * @throws SdkError When active_count is omitted; use hasActiveCount() or valueOrDefault().
     */
    public function getActiveCount(): string { return $this->get('active_count'); }
    public function hasActiveCount(): bool { return $this->has('active_count'); }
    /** @return string
     * @throws SdkError When canceled_count is omitted; use hasCanceledCount() or valueOrDefault().
     */
    public function getCanceledCount(): string { return $this->get('canceled_count'); }
    public function hasCanceledCount(): bool { return $this->has('canceled_count'); }
    /** @return string
     * @throws SdkError When incomplete_count is omitted; use hasIncompleteCount() or valueOrDefault().
     */
    public function getIncompleteCount(): string { return $this->get('incomplete_count'); }
    public function hasIncompleteCount(): bool { return $this->has('incomplete_count'); }
    /** @return string
     * @throws SdkError When past_due_count is omitted; use hasPastDueCount() or valueOrDefault().
     */
    public function getPastDueCount(): string { return $this->get('past_due_count'); }
    public function hasPastDueCount(): bool { return $this->has('past_due_count'); }
    /** @return string
     * @throws SdkError When paused_count is omitted; use hasPausedCount() or valueOrDefault().
     */
    public function getPausedCount(): string { return $this->get('paused_count'); }
    public function hasPausedCount(): bool { return $this->has('paused_count'); }
    /** @return string
     * @throws SdkError When trialing_count is omitted; use hasTrialingCount() or valueOrDefault().
     */
    public function getTrialingCount(): string { return $this->get('trialing_count'); }
    public function hasTrialingCount(): bool { return $this->has('trialing_count'); }
}
