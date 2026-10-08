<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionPreviewRequestInput extends Model {
    /** @param array{'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription': CreateSubscriptionRequestInput|array<array-key, mixed>|\stdClass}|object|array{'delivery_method': UpdateDeliveryMethodRequestInput|array<array-key, mixed>|\stdClass, 'delivery_method_id': string, 'mode': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionPreviewRequestInput')); }
}
