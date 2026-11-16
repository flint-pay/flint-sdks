<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BackorderPolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $backorder
 * @property-read string|null $barcode
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $external_reference_id
 * @property-read string|null $inventory_item_id
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read string|null $name
 * @property-read string|null $sku
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryItemPreviousAttributesInput extends Model {
    /** @param array{'backorder'?: BackorderPolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'barcode'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string|null, 'inventory_item_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'sku'?: string|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryItemPreviousAttributesInput')); }
    /** Backorder settings shared by every variant using this inventory item. anyOf[1] (Value): {@see BackorderPolicyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return BackorderPolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When backorder is omitted; use hasBackorder() or valueOrDefault().
     */
    public function getBackorder(): mixed { return $this->get('backorder'); }
    public function hasBackorder(): bool { return $this->has('backorder'); }
    /** Optional searchable barcode. anyOf[1] (Value): string. Optional searchable barcode. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): mixed { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Time the inventory item was created. anyOf[1] (Value): string. Time the inventory item was created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Stable inventory item ID. anyOf[1] (Value): string. Stable inventory item ID. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): mixed { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Caller-owned metadata. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Merchant-facing inventory item name. anyOf[1] (Value): string. Merchant-facing inventory item name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Optional searchable stock-keeping unit. anyOf[1] (Value): string. Optional searchable stock-keeping unit. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Current inventory item lifecycle status. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Current inventory item lifecycle status. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Time the inventory item last changed. anyOf[1] (Value): string. Time the inventory item last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Optimistic-concurrency version for item writes. anyOf[1] (Value): integer. Optimistic-concurrency version for item writes. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
