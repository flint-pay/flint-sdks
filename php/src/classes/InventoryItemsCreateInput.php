<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'sku'?: string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryItemsCreateInput extends Model {
    /** @param array{'body': array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'sku'?: string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryItemsCreateInput')); }
    /** The request body for: Create inventory item. Example: {"barcode":"0781234567890","name":"Ceramic mug, 12oz","sku":"mug-12-white","status":"active"}.
     * @return array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'sku'?: string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
