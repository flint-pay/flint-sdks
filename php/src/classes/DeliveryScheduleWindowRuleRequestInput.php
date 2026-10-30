<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAvailabilityRequestInput|array<array-key, mixed>|\stdClass $availability
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryScheduleWindowRuleRequestInput extends Model {
    /** @param array{'availability': DeliveryAvailabilityRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryScheduleWindowRuleRequestInput')); }
    /** When a delivery method can be scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.
     * @return DeliveryAvailabilityRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): mixed { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
}
