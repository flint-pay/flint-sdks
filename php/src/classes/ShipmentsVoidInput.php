<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $shipment_id
 * @property-read array{'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsVoidInput extends Model {
    /** @param array{'shipment_id': string, 'body'?: array{'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsVoidInput')); }
    /** Flint shipment ID. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** The request body for: Void shipment. Example: {"buyer_notification_behavior":"suppress","expected_version":2,"occurred_at":"2026-05-13T16:08:00Z","reason_message":"Label canceled before carrier pickup."}.
     * @return array{'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
