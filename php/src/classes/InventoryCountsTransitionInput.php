<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_count_id
 * @property-read array{'action': string, 'expected_version'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountsTransitionInput extends Model {
    /** @param array{'inventory_count_id': string, 'Idempotency-Key'?: string, 'body': array{'action': string, 'expected_version'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountsTransitionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_count_id is omitted; use hasInventoryCountId() or valueOrDefault().
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): Alternative shapes (see declared variants). The request body for: Transition inventory count.
     * @return array{'action': string, 'expected_version'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
