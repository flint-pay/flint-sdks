<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationOwnerPreviousAttributesInput extends Model {
    /** @param InventoryReservationOwnerMerchantPreviousAttributesInput|array<array-key, mixed>|\stdClass|InventoryReservationOwnerOrderPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationOwnerPreviousAttributesInput')); }
}
