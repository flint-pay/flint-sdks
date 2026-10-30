<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $barcode
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $sku
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryItemCreateRequestInput extends Model {
    /** @param array{'barcode'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'sku'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryItemCreateRequestInput')); }
    /** Barcode assigned to the new inventory item. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When barcode is omitted; use hasBarcode() or valueOrDefault().
     */
    public function getBarcode(): string { return $this->get('barcode'); }
    public function hasBarcode(): bool { return $this->has('barcode'); }
    /** Caller-owned metadata for the new inventory item. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name of the inventory item to create for this variant. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stock keeping unit assigned to the new inventory item. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
}
