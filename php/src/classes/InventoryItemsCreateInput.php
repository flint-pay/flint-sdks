<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'sku'?: string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryItemsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'sku'?: string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryItemsCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create inventory item.
     * @return array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'sku'?: string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
