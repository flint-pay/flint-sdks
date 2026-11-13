<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderHandoverInput extends Model {
    /** @param array{'location_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderHandoverInput')); }
    /** Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}
