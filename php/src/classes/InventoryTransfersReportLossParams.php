<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': int}|object> $lines
 * @property-read InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass $provenance
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransfersReportLossParams extends Model {
    /** @param array{'expected_version'?: int, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': int}|object>, 'provenance'?: InventoryProvenanceRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfersReportLossParams')); }
    /** Transfer version the caller last read. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string. Transfer line this action changes. minLength: 1. Example: "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_lost_quantity (Required): integer. Cumulative quantity that should be recorded as lost in transit. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': int}|object>
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
