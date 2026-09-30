<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxLocationRequestInput extends Model {
    /** @param array{'address': OrderTaxLocationPostalAddressRequestInput|array<array-key, mixed>|\stdClass, 'address_source'?: string, 'address_type': string}|object|array{'address': OrderTaxLocationFullAddressRequestInput|array<array-key, mixed>|\stdClass, 'address_source'?: string, 'address_type': string}|object|array{'address': OrderTaxLocationPostalAddressRequestInput|array<array-key, mixed>|\stdClass, 'address_source'?: string}|object|array{'address': OrderTaxLocationFullAddressRequestInput|array<array-key, mixed>|\stdClass, 'address_source'?: string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocationRequestInput')); }
}
