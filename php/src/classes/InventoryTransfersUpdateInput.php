<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_transfer_id
 * @property-read array{'expected_version'?: int, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': int}|object>, 'note'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersUpdateInput extends Model {
    /** @param array{'inventory_transfer_id': string, 'body': array{'expected_version'?: int, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': int}|object>, 'note'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersUpdateInput')); }
    /** Flint inventory transfer ID. Example: "invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_transfer_id is omitted; use hasInventoryTransferId() or valueOrDefault().
     */
    public function getInventoryTransferId(): string { return $this->get('inventory_transfer_id'); }
    public function hasInventoryTransferId(): bool { return $this->has('inventory_transfer_id'); }
    /** The request body for: Update inventory transfer. Example: {}.
     * @return array{'expected_version'?: int, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': int}|object>, 'note'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
