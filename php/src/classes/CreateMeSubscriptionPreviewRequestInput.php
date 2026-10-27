<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class CreateMeSubscriptionPreviewRequestInput extends Model {
    /** @param array{'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription_id': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateMeSubscriptionPreviewRequestInput')); }
}
