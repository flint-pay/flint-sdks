<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAvailabilityPreviousAttributes|null $availability
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryScheduleWindowRulePreviousAttributes extends Model {
    /** @param array{'availability'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryScheduleWindowRulePreviousAttributes')); }
    /** When windows can be offered. anyOf[1] (Value): {@see DeliveryAvailabilityPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryAvailabilityPreviousAttributes|null
     */
    public function getAvailability(): DeliveryAvailabilityPreviousAttributes|null { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
}
