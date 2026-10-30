<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read int $expected_version
 * @property-read list<array{'inventory_transfer_line_id': string, 'target_received_damaged_quantity'?: int, 'target_received_quality_control_quantity'?: int, 'target_received_quantity': int, 'target_received_quarantined_quantity'?: int, 'target_received_sellable_quantity'?: int}|object> $lines
 * @property-read InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass $provenance
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferTransitionRequestReceiveInput extends Model {
    /** @param array{'action': string, 'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_received_damaged_quantity'?: int, 'target_received_quality_control_quantity'?: int, 'target_received_quantity': int, 'target_received_quarantined_quantity'?: int, 'target_received_sellable_quantity'?: int}|object>, 'provenance'?: InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferTransitionRequestReceiveInput')); }
    /** Value enum: "receive".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Transfer version the caller last read. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string. Transfer line being transitioned. minLength: 1. [].target_received_damaged_quantity (Optional): integer. Cumulative received quantity classified as damaged. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0. [].target_received_quality_control_quantity (Optional): integer. Cumulative received quantity classified for quality control. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0. [].target_received_quantity (Required): integer. Cumulative quantity that should have been received at the destination. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0. [].target_received_quarantined_quantity (Optional): integer. Cumulative received quantity classified as quarantined. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0. [].target_received_sellable_quantity (Optional): integer. Cumulative received quantity classified as sellable. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return list<array{'inventory_transfer_line_id': string, 'target_received_damaged_quantity'?: int, 'target_received_quality_control_quantity'?: int, 'target_received_quantity': int, 'target_received_quarantined_quantity'?: int, 'target_received_sellable_quantity'?: int}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** When and where the stock moved. Optional; when omitted, the movements record the time Flint received the command as occurred_at and a null source_system. Where and when an inventory event happened: the source system, external actor, and time.
     * @return InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When provenance is omitted; use hasProvenance() or valueOrDefault().
     */
    public function getProvenance(): mixed { return $this->get('provenance'); }
    public function hasProvenance(): bool { return $this->has('provenance'); }
}
