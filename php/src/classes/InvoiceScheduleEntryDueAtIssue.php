<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $due_at
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoiceScheduleEntryDueAtIssue extends Model {
    /** @param array{'due_at'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntryDueAtIssue')); }
    /** @return string
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
