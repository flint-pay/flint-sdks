<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string|null $external_reference
 * @property-read list<array{'inventory_item_id': string, 'operation': string, 'physical_condition'?: string, 'requested_quantity': string}|object|array{'inventory_transfer_line_id': string, 'operation': string, 'requested_quantity': string}|object|array{'inventory_transfer_line_id': string, 'operation': string}|object> $line_changes
 * @property-read string|null $note
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateInventoryTransferRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'external_reference'?: string|null, 'line_changes'?: list<array{'inventory_item_id': string, 'operation': string, 'physical_condition'?: string, 'requested_quantity': string}|object|array{'inventory_transfer_line_id': string, 'operation': string, 'requested_quantity': string}|object|array{'inventory_transfer_line_id': string, 'operation': string}|object>, 'note'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateInventoryTransferRequestInput')); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return string|null
     * @throws SdkError When external_reference is omitted; use hasExternalReference() or valueOrDefault().
     */
    public function getExternalReference(): string|null { return $this->get('external_reference'); }
    public function hasExternalReference(): bool { return $this->has('external_reference'); }
    /** @return list<array{'inventory_item_id': string, 'operation': string, 'physical_condition'?: string, 'requested_quantity': string}|object|array{'inventory_transfer_line_id': string, 'operation': string, 'requested_quantity': string}|object|array{'inventory_transfer_line_id': string, 'operation': string}|object>
     * @throws SdkError When line_changes is omitted; use hasLineChanges() or valueOrDefault().
     */
    public function getLineChanges(): array { return $this->get('line_changes'); }
    public function hasLineChanges(): bool { return $this->has('line_changes'); }
    /** @return string|null
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string|null { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
}
