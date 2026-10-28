<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read string $device_id
 * @property-read CreateDigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $digital_details
 * @property-read string $external_reference_id
 * @property-read list<FulfillmentLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read CreateDeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $local_delivery_details
 * @property-read string $location_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read CreatePickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $pickup_details
 * @property-read FulfillmentRecipientRequestInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read CreateServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $service_details
 * @property-read FulfillmentPackagingRequestInput|array<array-key, mixed>|\stdClass $shipment
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateFulfillmentRequestPickupInput extends Model {
    /** @param array{'customer_id'?: string, 'device_id'?: string, 'digital_details'?: CreateDigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'line_items': list<FulfillmentLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: CreateDeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'pickup_details'?: CreatePickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientRequestInput|array<array-key, mixed>|\stdClass, 'service_details'?: CreateServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipment'?: FulfillmentPackagingRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateFulfillmentRequestPickupInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Shape $ (Value): {@see CreateDigitalFulfillmentDetailsInput}. Digital fulfillment details you supply when creating a fulfillment: the delivery URL.
     * @return CreateDigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When digital_details is omitted; use hasDigitalDetails() or valueOrDefault().
     */
    public function getDigitalDetails(): mixed { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Array of {@see FulfillmentLineItemRequestInput}. minItems: 1. Shape $[] (Value): {@see FulfillmentLineItemRequestInput}. An order line item and quantity to include when creating a fulfillment.
     * @return list<FulfillmentLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): {@see CreateDeliveryFulfillmentDetailsInput}. Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking.
     * @return CreateDeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When local_delivery_details is omitted; use hasLocalDeliveryDetails() or valueOrDefault().
     */
    public function getLocalDeliveryDetails(): mixed { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): {@see MetadataRequestInput}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see CreatePickupFulfillmentDetailsInput}. Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details.
     * @return CreatePickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pickup_details is omitted; use hasPickupDetails() or valueOrDefault().
     */
    public function getPickupDetails(): mixed { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /** Shape $ (Value): {@see FulfillmentRecipientRequestInput}. Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions.
     * @return FulfillmentRecipientRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): {@see CreateServiceFulfillmentDetailsInput}. Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes.
     * @return CreateServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_details is omitted; use hasServiceDetails() or valueOrDefault().
     */
    public function getServiceDetails(): mixed { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
    /** Shape $ (Value): {@see FulfillmentPackagingRequestInput}. Creates an outbound shipment and packages atomically with a shipment fulfillment. single_package assigns every submitted line quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in the same call. Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`. External reference and metadata are optional.
     * @return FulfillmentPackagingRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment is omitted; use hasShipment() or valueOrDefault().
     */
    public function getShipment(): mixed { return $this->get('shipment'); }
    public function hasShipment(): bool { return $this->has('shipment'); }
    /** Shape $ (Value): string.  Value enum: "pickup".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
