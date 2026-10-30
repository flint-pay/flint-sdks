<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $shipment_id
 * @property-read array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<array{'metadata'?: mixed, 'order_line_item_id': string, 'quantity': int}|object>, 'label_url'?: string, 'metadata'?: mixed, 'return_line_items'?: list<array{'quantity': int, 'return_line_item_id': string}|object>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsCreatePackageInput extends Model {
    /** @param array{'shipment_id': string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<array{'metadata'?: mixed, 'order_line_item_id': string, 'quantity': int}|object>, 'label_url'?: string, 'metadata'?: mixed, 'return_line_items'?: list<array{'quantity': int, 'return_line_item_id': string}|object>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsCreatePackageInput')); }
    /** Flint shipment ID. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** The request body for: Create package. Example: {"carrier":"ups","dimensions":{"height":4,"length":8,"unit":"inch","width":6},"expected_delivery_at":"2026-05-15T18:00:00Z","external_reference_id":"pkg_789","external_system":"merchant_wms","metadata":{"box":"small"},"service_code":"ground","status":"shipped","tracking_number":"1Z999AA10123456784","tracking_url":"https://track.example.com/1Z999AA10123456784","weight":{"unit":"pound","value":1.2}}.
     * @return array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<array{'metadata'?: mixed, 'order_line_item_id': string, 'quantity': int}|object>, 'label_url'?: string, 'metadata'?: mixed, 'return_line_items'?: list<array{'quantity': int, 'return_line_item_id': string}|object>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
