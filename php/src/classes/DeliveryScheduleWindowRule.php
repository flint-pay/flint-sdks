<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAvailability $availability
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryScheduleWindowRule extends Model {
    /** @param array{'availability': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryScheduleWindowRule')); }
    /** When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.
     * @return DeliveryAvailability
     */
    public function getAvailability(): DeliveryAvailability { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
}
