<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_level_id
 * @property-read array{'expected_version'?: int, 'safety_stock_quantity': int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryLevelsUpdateInput extends Model {
    /** @param array{'inventory_level_id': string, 'body': array{'expected_version'?: int, 'safety_stock_quantity': int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelsUpdateInput')); }
    /** Flint inventory level ID. Example: "invl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_level_id is omitted; use hasInventoryLevelId() or valueOrDefault().
     */
    public function getInventoryLevelId(): string { return $this->get('inventory_level_id'); }
    public function hasInventoryLevelId(): bool { return $this->has('inventory_level_id'); }
    /** The request body for: Update inventory level. Example: {"expected_version":4,"safety_stock_quantity":5}.
     * @return array{'expected_version'?: int, 'safety_stock_quantity': int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
