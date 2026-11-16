<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAvailabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $availability
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryScheduleWindowRulePreviousAttributesInput extends Model {
    /** @param array{'availability'?: DeliveryAvailabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryScheduleWindowRulePreviousAttributesInput')); }
    /** When windows can be offered. anyOf[1] (Value): {@see DeliveryAvailabilityPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryAvailabilityPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): mixed { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
}
