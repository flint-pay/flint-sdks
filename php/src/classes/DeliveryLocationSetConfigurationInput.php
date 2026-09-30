<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $location_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryLocationSetConfigurationInput extends Model {
    /** @param array{'location_ids': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSetConfigurationInput')); }
    /** @return list<string>
     * @throws SdkError When location_ids is omitted; use hasLocationIds() or valueOrDefault().
     */
    public function getLocationIds(): array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
}
