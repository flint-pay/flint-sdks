<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountTransitionRequestInput extends Model {
    /** @param array{'action': string, 'expected_version'?: string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountTransitionRequestInput')); }
}
