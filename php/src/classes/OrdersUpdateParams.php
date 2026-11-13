<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $buyer_note
 * @property-read string $catalog_price_behavior
 * @property-read string $customer_id
 * @property-read array{'delivery_method_id': string, 'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'expected_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_ids'?: list<string>, 'recipient'?: DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null $delivery
 * @property-read array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null $delivery_destination
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array{'location_id': string}|object|null $handover
 * @property-read string|null $internal_note
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent': int|float}|object|null $requested_tip
 * @property-read OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass $tax
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateParams extends Model {
    /** @param array{'buyer_note'?: string|null, 'catalog_price_behavior'?: string, 'customer_id'?: string, 'delivery'?: array{'delivery_method_id': string, 'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'expected_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_ids'?: list<string>, 'recipient'?: DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null, 'delivery_destination'?: array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'handover'?: array{'location_id': string}|object|null, 'internal_note'?: string|null, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'requested_tip'?: array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent': int|float}|object|null, 'tax'?: OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateParams')); }
    /** Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: 1. maxLength: 1000.
     * @return string|null
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string|null { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Defaults to keep, preserving frozen prices. Send reprice with an explicit non-null customer_id to refresh every catalog variant line on an open, unpaid order. Reassigning resolves the new customer’s direct list, then segment list, then variant pricing. Subscription-owned prices remain locked. If any catalog line’s variant is no longer for sale, reprice is refused; remove that line first. Default: "keep". Value enum: "keep", "reprice".
     * @return string
     * @throws SdkError When catalog_price_behavior is omitted; use hasCatalogPriceBehavior() or valueOrDefault().
     */
    public function getCatalogPriceBehavior(): string { return $this->get('catalog_price_behavior'); }
    public function hasCatalogPriceBehavior(): bool { return $this->has('catalog_price_behavior'); }
    /** Customer to attach. Cannot be null or cleared. Reassignment requires catalog_price_behavior: reprice, which resolves the new customer’s direct list, then segment list, then variant pricing. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Complete replacement delivery preference. Omit to leave unchanged. Requires expected_version, orders-write and delivery-write. Send null to clear a provisional direct-order selection, its charge and hold. Draft invoice orders are allowed until issue; checkout-owned, subscription-owned, paid and locked orders are refused. Change delivery separately from delivery_destination, handover and shipping charge calculations. anyOf[1] (Value): {@see OrderDeliveryRequestInput}. Complete delivery preference to quote and select together with the order's delivery charge and inventory hold. anyOf[2] (Value): null.
     * @return array{'delivery_method_id': string, 'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'expected_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_ids'?: list<string>, 'recipient'?: DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. anyOf[1] (Value): {@see OrderDeliveryDestinationRequestInput}. The delivery destination you set when creating or updating an order, with an address and an optional recipient. anyOf[2] (Value): null.
     * @return array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Order version from the last order read. Required when sending delivery or correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Carry-out handover to set or replace. Allowed while the order is open, nothing is paid, and no checkout session or delivery selection controls its delivery. Can't be combined with delivery_destination. Send null to clear it. anyOf[1] (Value): {@see OrderHandoverRequestInput}. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection. anyOf[2] (Value): null.
     * @return array{'location_id': string}|object|null
     * @throws SdkError When handover is omitted; use hasHandover() or valueOrDefault().
     */
    public function getHandover(): mixed { return $this->get('handover'); }
    public function hasHandover(): bool { return $this->has('handover'); }
    /** Internal note about this order, visible only to the merchant. Send null to clear it. minLength: 1. maxLength: 1000.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** How Flint chooses the Locations that fill this order's inventory: one fixed Location, an allocation policy, or a specific policy revision. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
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
    /** Requested tip to set or replace. Send null to clear the current requested tip. Refused with ACTION_NOT_ALLOWED and reason payment_collected once a payment's capture has set its own tip. anyOf[1] (Value): {@see CreateOrderTipInput}. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. anyOf[2] (Value): null.
     * @return array{'amount_money': array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent'?: int|float}|object|array{'amount_money'?: array{'amount': string, 'currency': string}|object, 'calculation_type': string, 'description'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'percent': int|float}|object|null
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): mixed { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** Tax settings for the order. Changes to an order's tax settings: whether tax is enabled, the calculation, the location, the exemption selection, and per-line-item or per-charge calculations.
     * @return OrderTaxUpdateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
