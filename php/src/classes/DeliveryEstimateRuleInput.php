<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryScheduleWindowRuleInput|array<array-key, mixed>|\stdClass $schedule_window
 * @property-read DeliveryTransitTimeRuleInput|array<array-key, mixed>|\stdClass $transit_time
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryEstimateRuleInput extends Model {
    /** @param array{'schedule_window'?: DeliveryScheduleWindowRuleInput|array<array-key, mixed>|\stdClass, 'transit_time'?: DeliveryTransitTimeRuleInput|array<array-key, mixed>|\stdClass, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEstimateRuleInput')); }
    /** @return DeliveryScheduleWindowRuleInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When schedule_window is omitted; use hasScheduleWindow() or valueOrDefault().
     */
    public function getScheduleWindow(): mixed { return $this->get('schedule_window'); }
    public function hasScheduleWindow(): bool { return $this->has('schedule_window'); }
    /** @return DeliveryTransitTimeRuleInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When transit_time is omitted; use hasTransitTime() or valueOrDefault().
     */
    public function getTransitTime(): mixed { return $this->get('transit_time'); }
    public function hasTransitTime(): bool { return $this->has('transit_time'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
