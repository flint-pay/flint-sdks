<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $buyer_note
 * @property-read string $customer_id
 * @property-read array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null $delivery_destination
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string|null $internal_note
 * @property-read OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent': int|float}|object|null $requested_tip
 * @property-read OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass $tax
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateOrderRequestInput extends Model {
    /** @param array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateOrderRequestInput')); }
    /** Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: 1. maxLength: 1000.
     * @return string|null
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string|null { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. anyOf[1] (Value): {@see OrderDeliveryDestinationRequestInput}. The delivery destination you set when creating or updating an order, with an address and an optional recipient. anyOf[2] (Value): null.
     * @return array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Order version from the last order read. Required when correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Internal note about this order, visible only to the merchant. Send null to clear it. minLength: 1. maxLength: 1000.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision.
     * @return OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear caller-owned metadata and preserve Flint-managed keys. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Requested tip to set or replace. Send null to clear the current requested tip. anyOf[1] (Value): {@see CreateOrderTipInput}. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. anyOf[2] (Value): null.
     * @return array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent': int|float}|object|null
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and per-line-item or per-charge calculations.
     * @return OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
}
