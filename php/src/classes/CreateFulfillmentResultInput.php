<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_note
 * @property-read string $customer_id
 * @property-read array{'address': OrderDeliveryDestinationAddressInput|array<array-key, mixed>|\stdClass, 'delivery_selection_id'?: string, 'frozen_at'?: string|\DateTimeInterface, 'recipient'?: OrderDeliveryDestinationRecipientInput|array<array-key, mixed>|\stdClass, 'source': string, ...}|object $delivery_destination
 * @property-read string $external_reference_id
 * @property-read string $fulfillment_id
 * @property-read string $internal_note
 * @property-read array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_version_id'?: string, 'location_id'?: string, 'location_ids'?: list<string>, 'type': string, ...}|object $inventory_routing_source
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $package_id
 * @property-read list<PackageItemInput|array<array-key, mixed>|\stdClass> $package_items
 * @property-read RequestedTipInput|array<array-key, mixed>|\stdClass $requested_tip
 * @property-read string $shipment_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateFulfillmentResultInput extends Model {
    /** @param array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: array{'address': OrderDeliveryDestinationAddressInput|array<array-key, mixed>|\stdClass, 'delivery_selection_id'?: string, 'frozen_at'?: string|\DateTimeInterface, 'recipient'?: OrderDeliveryDestinationRecipientInput|array<array-key, mixed>|\stdClass, 'source': string, ...}|object, 'external_reference_id'?: string, 'fulfillment_id': string, 'internal_note'?: string, 'inventory_routing_source'?: array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_version_id'?: string, 'location_id'?: string, 'location_ids'?: list<string>, 'type': string, ...}|object, 'metadata'?: array<array-key, string>|\stdClass, 'package_id'?: string, 'package_items': list<PackageItemInput|array<array-key, mixed>|\stdClass>, 'requested_tip'?: RequestedTipInput|array<array-key, mixed>|\stdClass, 'shipment_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateFulfillmentResultInput')); }
    /** @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return array{'address': OrderDeliveryDestinationAddressInput|array<array-key, mixed>|\stdClass, 'delivery_selection_id'?: string, 'frozen_at'?: string|\DateTimeInterface, 'recipient'?: OrderDeliveryDestinationRecipientInput|array<array-key, mixed>|\stdClass, 'source': string, ...}|object
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): array|object { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** @return array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_version_id'?: string, 'location_id'?: string, 'location_ids'?: list<string>, 'type': string, ...}|object
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): array|object { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** @return list<PackageItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When package_items is omitted; use hasPackageItems() or valueOrDefault().
     */
    public function getPackageItems(): array { return $this->get('package_items'); }
    public function hasPackageItems(): bool { return $this->has('package_items'); }
    /** @return RequestedTipInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
}
