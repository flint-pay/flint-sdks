<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $fulfillment_id
 * @property-read array{'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'package_id'?: string, 'shipment_id'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsCreateEventInput extends Model {
    /** @param array{'fulfillment_id': string, 'body': array{'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'package_id'?: string, 'shipment_id'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsCreateEventInput')); }
    /** Flint fulfillment ID. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** The request body for: Create fulfillment event. Example: {"custom_details":{"facility":"east"},"event_type":"custom","external_event_id":"evt_7f3df2","external_status":"work_started","external_system":"shippo","message":"The fulfillment partner started work.","occurred_at":"2026-05-13T16:05:00Z","package_id":"pkg_01KEZF7C008VJBE6BT0CWZT296","shipment_id":"shp_01KEZF7C006DZPA7FGH42HTBY8"}.
     * @return array{'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'package_id'?: string, 'shipment_id'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
