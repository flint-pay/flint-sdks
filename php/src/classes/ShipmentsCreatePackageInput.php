<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $shipment_id
 * @property-read array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<mixed>, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsCreatePackageInput extends Model {
    /** @param array{'shipment_id': string, 'Idempotency-Key'?: string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<mixed>, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsCreatePackageInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Create package.
     * @return array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<mixed>, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
