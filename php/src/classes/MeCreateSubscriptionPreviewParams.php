<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class MeCreateSubscriptionPreviewParams extends Model {
    /** @param array{'destination': array{'customer_address_id': string, 'type': string}|object|array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateSubscriptionPreviewParams')); }
}
