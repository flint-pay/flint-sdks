<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryDestinationRequestInput extends Model {
    /** @param array{'customer_address_id': string, 'type': string}|object|array{'address': OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryDestinationRequestInput')); }
}
