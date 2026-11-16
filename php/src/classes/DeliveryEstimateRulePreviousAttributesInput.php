<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryScheduleWindowRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $schedule_window
 * @property-read DeliveryTransitTimeRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $transit_time
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryEstimateRulePreviousAttributesInput extends Model {
    /** @param array{'schedule_window'?: DeliveryScheduleWindowRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'transit_time'?: DeliveryTransitTimeRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEstimateRulePreviousAttributesInput')); }
    /** Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. anyOf[1] (Value): {@see DeliveryScheduleWindowRulePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryScheduleWindowRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When schedule_window is omitted; use hasScheduleWindow() or valueOrDefault().
     */
    public function getScheduleWindow(): mixed { return $this->get('schedule_window'); }
    public function hasScheduleWindow(): bool { return $this->has('schedule_window'); }
    /** Handling and transit time. Set only when `type` is `transit_time`. anyOf[1] (Value): {@see DeliveryTransitTimeRulePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryTransitTimeRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When transit_time is omitted; use hasTransitTime() or valueOrDefault().
     */
    public function getTransitTime(): mixed { return $this->get('transit_time'); }
    public function hasTransitTime(): bool { return $this->has('transit_time'); }
    /** How Flint estimates timing. Set the property named by this value. Value enum: "none", "transit_time", "schedule_window". anyOf[1] (Value): string. How Flint estimates timing. Set the property named by this value. Value enum: "none", "transit_time", "schedule_window". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
