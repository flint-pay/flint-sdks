<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_receipt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReceiptsGetInput extends Model {
    /** @param array{'inventory_receipt_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_receipt_id is omitted; use hasInventoryReceiptId() or valueOrDefault().
     */
    public function getInventoryReceiptId(): string { return $this->get('inventory_receipt_id'); }
    public function hasInventoryReceiptId(): bool { return $this->has('inventory_receipt_id'); }
}
