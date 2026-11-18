<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class RemoveLicenseKeyPoolKeysRequestInput extends Model {
    /** @param array{'keys': list<string>}|object|array{'license_key_pool_key_ids': list<string>}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RemoveLicenseKeyPoolKeysRequestInput')); }
}
