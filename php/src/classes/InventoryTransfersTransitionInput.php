<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_transfer_id
 * @property-read array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<mixed>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': string}|object>, 'provenance': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersTransitionInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'inventory_transfer_id': string, 'Flint-Version'?: string, 'body': array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<mixed>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': string}|object>, 'provenance': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersTransitionInput')); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When inventory_transfer_id is omitted; use hasInventoryTransferId() or valueOrDefault().
     */
    public function getInventoryTransferId(): string { return $this->get('inventory_transfer_id'); }
    public function hasInventoryTransferId(): bool { return $this->has('inventory_transfer_id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<mixed>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': string}|object>, 'provenance': mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': string}|object>, 'provenance': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
