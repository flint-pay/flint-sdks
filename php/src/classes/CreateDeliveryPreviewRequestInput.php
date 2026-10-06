<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryPreviewRequestInput extends Model {
    /** @param array{'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'inventory_routing_source'?: DeliveryPreviewRoutingSourceInput|array<array-key, mixed>|\stdClass, 'line_items': list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object|array{'buyer_location'?: DeliveryBuyerLocationRequestInput|array<array-key, mixed>|\stdClass, 'checkout_session_id': string, 'expected_delivery_selection_id'?: string|null, 'maximum_distance'?: DeliveryPickupAvailabilityMaximumDistanceRequestInput|array<array-key, mixed>|\stdClass, 'mode': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryPreviewRequestInput')); }
}
