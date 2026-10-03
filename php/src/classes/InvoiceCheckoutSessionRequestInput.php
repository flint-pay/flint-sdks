<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceCheckoutSessionRequestInput extends Model {
    /** @param array{'invoice_schedule_entry_id'?: string, 'return_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCheckoutSessionRequestInput')); }
    /** @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
