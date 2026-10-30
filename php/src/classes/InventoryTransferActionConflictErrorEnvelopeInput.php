<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferActionConflictErrorObjectInput|array<array-key, mixed>|\stdClass $error
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferActionConflictErrorEnvelopeInput extends Model {
    /** @param array{'error': InventoryTransferActionConflictErrorObjectInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferActionConflictErrorEnvelopeInput')); }
    /** An action-not-allowed error for the inventory transfer current state. The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures.
     * @return InventoryTransferActionConflictErrorObjectInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When error is omitted; use hasError() or valueOrDefault().
     */
    public function getError(): mixed { return $this->get('error'); }
    public function hasError(): bool { return $this->has('error'); }
}
