<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $range
 * @property-read SubscriptionSnapshotMetricsInput|array<array-key, mixed>|\stdClass $snapshot_metrics
 * @property-read string $timezone
 * @property-read SubscriptionWindowMetricsInput|array<array-key, mixed>|\stdClass $window_metrics
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionAnalyticsInput extends Model {
    /** @param array{'range': string, 'snapshot_metrics': SubscriptionSnapshotMetricsInput|array<array-key, mixed>|\stdClass, 'timezone': string, 'window_metrics': SubscriptionWindowMetricsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAnalyticsInput')); }
    /** @return string
     * @throws SdkError When range is omitted; use hasRange() or valueOrDefault().
     */
    public function getRange(): string { return $this->get('range'); }
    public function hasRange(): bool { return $this->has('range'); }
    /** @return SubscriptionSnapshotMetricsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When snapshot_metrics is omitted; use hasSnapshotMetrics() or valueOrDefault().
     */
    public function getSnapshotMetrics(): mixed { return $this->get('snapshot_metrics'); }
    public function hasSnapshotMetrics(): bool { return $this->has('snapshot_metrics'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return SubscriptionWindowMetricsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When window_metrics is omitted; use hasWindowMetrics() or valueOrDefault().
     */
    public function getWindowMetrics(): mixed { return $this->get('window_metrics'); }
    public function hasWindowMetrics(): bool { return $this->has('window_metrics'); }
}
