<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $percent
 * @property-read int $release_delay_seconds
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformReserve extends Model {
    /** @param array{'percent': float, 'release_delay_seconds': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformReserve')); }
    /** Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return float
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. Format: int64. minimum: 0.
     * @return int
     */
    public function getReleaseDelaySeconds(): int { return $this->get('release_delay_seconds'); }
    public function hasReleaseDelaySeconds(): bool { return $this->has('release_delay_seconds'); }
}
