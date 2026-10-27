<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationOwnerInput extends Model {
    /** @param array{'key': string, 'type': string}|object|array{'order_id'?: string, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationOwnerInput')); }
}
