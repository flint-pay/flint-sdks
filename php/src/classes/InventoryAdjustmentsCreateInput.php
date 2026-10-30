<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentsCreateInput extends Model {
    /** @param array{'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentsCreateInput')); }
    /** The request body for: Create inventory adjustment. Example: {"lines":[{"expected_physical_version":7,"inventory_item_id":"invi_01K0P7W6A4N9F3J2T8Q5R1C6XM","location_id":"loc_01K0P7W6A4N9F3J2T8Q5R1C6XM","on_hand_quantity":40}],"reason":"counted"}.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
