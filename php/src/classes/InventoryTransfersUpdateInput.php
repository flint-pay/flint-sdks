<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_transfer_id
 * @property-read array{'expected_version'?: string, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': string}|object>, 'note'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersUpdateInput extends Model {
    /** @param array{'inventory_transfer_id': string, 'Idempotency-Key'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': string}|object>, 'note'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_transfer_id is omitted; use hasInventoryTransferId() or valueOrDefault().
     */
    public function getInventoryTransferId(): string { return $this->get('inventory_transfer_id'); }
    public function hasInventoryTransferId(): bool { return $this->has('inventory_transfer_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update inventory transfer.
     * @return array{'expected_version'?: string, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': string}|object>, 'note'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
