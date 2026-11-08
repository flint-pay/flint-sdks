<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|float $percent
 * @property-read int $release_delay_seconds
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformReserveInput extends Model {
    /** @param array{'percent': int|float, 'release_delay_seconds': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformReserveInput')); }
    /** Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When release_delay_seconds is omitted; use hasReleaseDelaySeconds() or valueOrDefault().
     */
    public function getReleaseDelaySeconds(): int { return $this->get('release_delay_seconds'); }
    public function hasReleaseDelaySeconds(): bool { return $this->has('release_delay_seconds'); }
}
