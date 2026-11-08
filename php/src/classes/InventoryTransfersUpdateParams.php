<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': int}|object> $lines
 * @property-read string|null $note
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersUpdateParams extends Model {
    /** @param array{'expected_version'?: int, 'external_reference_id'?: string|null, 'lines'?: list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': int}|object>, 'note'?: string|null, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersUpdateParams')); }
    /** Required when any of these fields is present: lines. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to remove it. Lines with departed or canceled quantity must remain. Requires expected_version when present. minItems: 1. maxItems: 100. [] (Value): object. [].condition (Optional): string. Condition of the units being moved. Default: "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined". [].inventory_item_id (Required): string. ID of the inventory item to move. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". [].inventory_transfer_line_id (Optional): string. Existing line in this transfer. Omit to add a line. minLength: 1. Example: "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].requested_quantity (Required): integer. Units to move from the origin. Format: int64. minimum: 1.
     * @return list<array{'condition'?: string, 'inventory_item_id': string, 'inventory_transfer_line_id'?: string, 'requested_quantity': int}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string|null { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
