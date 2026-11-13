<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class CreateMeSubscriptionPreviewRequestInput extends Model {
    /** @param array{'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string}|object|array{'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string}|object|array{'billing_interval'?: string, 'billing_interval_count'?: int, 'mode': string, 'quantity'?: int, 'subscription_id': string, 'subscription_plan_id': string}|object|array{'billing_starts': string, 'expected_version'?: int, 'line_items': list<SubscriptionQuantityChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'subscription_id': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateMeSubscriptionPreviewRequestInput')); }
}
