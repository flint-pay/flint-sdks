<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleDueWriteInput extends Model {
    /** @param array{'due_at'?: string|\DateTimeInterface, 'type': string}|object|array{'due_at': string|\DateTimeInterface, 'type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleDueWriteInput')); }
    /** Shape $ (Value): string. When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string.  Value enum: "at_issue", "date", "invoice_due_date".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
