<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAvailability $availability
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryScheduleWindowRule extends Model {
    /** @param array{'availability': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryScheduleWindowRule')); }
    /** @return DeliveryAvailability
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): DeliveryAvailability { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
}
