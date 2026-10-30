<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_count_id
 * @property-read array{'action': string, 'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountsTransitionInput extends Model {
    /** @param array{'inventory_count_id': string, 'body': array{'action': string, 'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountsTransitionInput')); }
    /** Flint inventory count ID. Example: "invc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_count_id is omitted; use hasInventoryCountId() or valueOrDefault().
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
    /** The request body for: Transition inventory count. Example: {"action":"apply","expected_version":2}.
     * @return array{'action': string, 'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
