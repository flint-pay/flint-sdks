<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float|null $percent
 * @property-read int|null $release_delay_seconds
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformReservePreviousAttributes extends Model {
    /** @param array{'percent'?: mixed, 'release_delay_seconds'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformReservePreviousAttributes')); }
    /** Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. anyOf[1] (Value): number. Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. minimum: 0. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercent(): float|null { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. anyOf[1] (Value): integer. How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReleaseDelaySeconds(): int|null { return $this->get('release_delay_seconds'); }
    public function hasReleaseDelaySeconds(): bool { return $this->has('release_delay_seconds'); }
}
