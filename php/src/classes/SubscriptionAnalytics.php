<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $range
 * @property-read SubscriptionSnapshotMetrics $snapshot_metrics
 * @property-read string $timezone
 * @property-read SubscriptionWindowMetrics $window_metrics
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionAnalytics extends Model {
    /** @param array{'range': string, 'snapshot_metrics': mixed, 'timezone': string, 'window_metrics': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAnalytics')); }
    /** @return string
     * @throws SdkError When range is omitted; use hasRange() or valueOrDefault().
     */
    public function getRange(): string { return $this->get('range'); }
    public function hasRange(): bool { return $this->has('range'); }
    /** @return SubscriptionSnapshotMetrics
     * @throws SdkError When snapshot_metrics is omitted; use hasSnapshotMetrics() or valueOrDefault().
     */
    public function getSnapshotMetrics(): SubscriptionSnapshotMetrics { return $this->get('snapshot_metrics'); }
    public function hasSnapshotMetrics(): bool { return $this->has('snapshot_metrics'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return SubscriptionWindowMetrics
     * @throws SdkError When window_metrics is omitted; use hasWindowMetrics() or valueOrDefault().
     */
    public function getWindowMetrics(): SubscriptionWindowMetrics { return $this->get('window_metrics'); }
    public function hasWindowMetrics(): bool { return $this->has('window_metrics'); }
}
