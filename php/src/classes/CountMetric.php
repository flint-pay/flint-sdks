<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $change_percent
 * @property-read string $current_count
 * @property-read string $previous_count
 * Presence-aware response; omitted fields throw when accessed. */
final class CountMetric extends Model {
    /** @param array{'change_percent'?: float, 'current_count': string, 'previous_count'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CountMetric')); }
    /** @return float
     * @throws SdkError When change_percent is omitted; use hasChangePercent() or valueOrDefault().
     */
    public function getChangePercent(): float { return $this->get('change_percent'); }
    public function hasChangePercent(): bool { return $this->has('change_percent'); }
    /** @return string
     * @throws SdkError When current_count is omitted; use hasCurrentCount() or valueOrDefault().
     */
    public function getCurrentCount(): string { return $this->get('current_count'); }
    public function hasCurrentCount(): bool { return $this->has('current_count'); }
    /** @return string
     * @throws SdkError When previous_count is omitted; use hasPreviousCount() or valueOrDefault().
     */
    public function getPreviousCount(): string { return $this->get('previous_count'); }
    public function hasPreviousCount(): bool { return $this->has('previous_count'); }
}
