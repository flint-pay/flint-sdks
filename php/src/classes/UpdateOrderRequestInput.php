<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $buyer_note
 * @property-read string $customer_id
 * @property-read array{'address': OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null $delivery_destination
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string|null $internal_note
 * @property-read OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read mixed $requested_tip
 * @property-read OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass $tax
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateOrderRequestInput extends Model {
    /** @param array{'buyer_note'?: string|null, 'customer_id'?: string, 'delivery_destination'?: array{'address': OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'inventory_routing_source'?: OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: mixed, 'tax'?: OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateOrderRequestInput')); }
    /** Shape $ (Value): string or null. Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: 1. maxLength: 1000.
     * @return string|null
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string|null { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): {@see OrderDeliveryDestinationRequestInput} or null. Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. Shape $.anyOf[1] (Value): {@see OrderDeliveryDestinationRequestInput}. The delivery destination you set when creating or updating an order, with an address and an optional recipient. Shape $.anyOf[2] (Value): null.
     * @return array{'address': OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Shape $ (Value): integer string. Order version from the last order read. Required when correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string or null. Internal note about this order, visible only to the merchant. Send null to clear it. minLength: 1. maxLength: 1000.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Shape $ (Value): {@see OrderInventoryRoutingSourceRequestInput}. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision.
     * @return OrderInventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear caller-owned metadata and preserve Flint-managed keys. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see CreateOrderTipInput} or null. Requested tip to set or replace. Send null to clear the current requested tip. Shape $.anyOf[1] (Value): {@see CreateOrderTipInput}. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. Shape $.anyOf[2] (Value): null.
     * @return mixed
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Shape $ (Value): {@see OrderTaxUpdateRequestInput}. Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and per-line-item or per-charge calculations.
     * @return OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
}
