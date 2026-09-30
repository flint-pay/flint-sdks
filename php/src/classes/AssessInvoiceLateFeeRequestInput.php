<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_schedule_entry_id
 * Presence-aware input; omitted fields throw when accessed. */
final class AssessInvoiceLateFeeRequestInput extends Model {
    /** @param array{'invoice_schedule_entry_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AssessInvoiceLateFeeRequestInput')); }
    /** @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
}
