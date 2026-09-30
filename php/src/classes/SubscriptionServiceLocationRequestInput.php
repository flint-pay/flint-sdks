<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionServiceLocationRequestInput extends Model {
    /** @param array{'customer_address_id': string, 'source': string}|object|array{'address': PostalAddressInput|array<array-key, mixed>|\stdClass, 'source': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionServiceLocationRequestInput')); }
}
