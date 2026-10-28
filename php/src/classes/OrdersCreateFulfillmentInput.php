<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read array{'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'external_reference_id'?: string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: mixed, 'pickup_details'?: mixed, 'recipient'?: mixed, 'service_details'?: mixed, 'shipment'?: mixed, 'type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCreateFulfillmentInput extends Model {
    /** @param array{'order_id': string, 'Idempotency-Key'?: string, 'body': array{'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'external_reference_id'?: string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: mixed, 'pickup_details'?: mixed, 'recipient'?: mixed, 'service_details'?: mixed, 'shipment'?: mixed, 'type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreateFulfillmentInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.
     * @return array{'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'external_reference_id'?: string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: mixed, 'pickup_details'?: mixed, 'recipient'?: mixed, 'service_details'?: mixed, 'shipment'?: mixed, 'type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
