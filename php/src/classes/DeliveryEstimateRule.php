<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryScheduleWindowRule $schedule_window
 * @property-read DeliveryTransitTimeRule $transit_time
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryEstimateRule extends Model {
    /** @param array{'schedule_window'?: mixed, 'transit_time'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEstimateRule')); }
    /** @return DeliveryScheduleWindowRule
     * @throws SdkError When schedule_window is omitted; use hasScheduleWindow() or valueOrDefault().
     */
    public function getScheduleWindow(): DeliveryScheduleWindowRule { return $this->get('schedule_window'); }
    public function hasScheduleWindow(): bool { return $this->has('schedule_window'); }
    /** @return DeliveryTransitTimeRule
     * @throws SdkError When transit_time is omitted; use hasTransitTime() or valueOrDefault().
     */
    public function getTransitTime(): DeliveryTransitTimeRule { return $this->get('transit_time'); }
    public function hasTransitTime(): bool { return $this->has('transit_time'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
