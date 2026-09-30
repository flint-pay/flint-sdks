<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class InventoryRoutingSourceRequestInput extends Model {
    /** @param array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_version_id': string, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingSourceRequestInput')); }
}
