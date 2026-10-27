<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceScheduleDueInvoiceDueDateInput extends Model {
    /** @param array{'due_at'?: string|\DateTimeInterface, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleDueInvoiceDueDateInput')); }
    /** Shape $ (Value): string. When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. How the entry's due time is set. Value enum: "invoice_due_date".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
