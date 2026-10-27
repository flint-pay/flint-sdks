<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferConflictErrorEnvelopeInput extends Model {
    /** @param array{'error': InventoryTransferActionConflictErrorObjectInput|array<array-key, mixed>|\stdClass}|object|array{'error': array{'code': string, 'details'?: list<ErrorDetailInput|array<array-key, mixed>|\stdClass>, 'doc_url': string, 'error_source': string, 'message': string, 'param'?: string, 'remediation': array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null, 'request_id'?: string, 'request_log_url'?: string, 'type': string, ...}|object, ...}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferConflictErrorEnvelopeInput')); }
}
