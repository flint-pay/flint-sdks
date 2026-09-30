<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceScheduleEntryAmountSpecificationFixed|InvoiceScheduleEntryAmountSpecificationPercentage|InvoiceScheduleEntryAmountSpecificationRemainingBalance|\stdClass $amount_specification
 * @property-read MoneyValue $credit_money
 * @property-read InvoiceScheduleEntryDueAtIssue|InvoiceScheduleEntryDueDate|InvoiceScheduleEntryDueInvoiceDueDate|\stdClass $due
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $kind
 * @property-read MoneyValue $outstanding_money
 * @property-read MoneyValue $paid_money
 * @property-read string $status
 * @property-read MoneyValue $total_money
 * @property-read MoneyValue $written_off_money
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoiceScheduleEntry extends Model {
    /** @param array{'amount_specification': mixed, 'credit_money': object{'amount': string, 'currency': string}, 'due': mixed, 'invoice_schedule_entry_id': string, 'kind': string, 'outstanding_money': object{'amount': string, 'currency': string}, 'paid_money': object{'amount': string, 'currency': string}, 'status': string, 'total_money': object{'amount': string, 'currency': string}, 'written_off_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceScheduleEntry')); }
    /** @return InvoiceScheduleEntryAmountSpecificationFixed|InvoiceScheduleEntryAmountSpecificationPercentage|InvoiceScheduleEntryAmountSpecificationRemainingBalance|\stdClass
     * @throws SdkError When amount_specification is omitted; use hasAmountSpecification() or valueOrDefault().
     */
    public function getAmountSpecification(): InvoiceScheduleEntryAmountSpecificationFixed|InvoiceScheduleEntryAmountSpecificationPercentage|InvoiceScheduleEntryAmountSpecificationRemainingBalance|\stdClass { return $this->get('amount_specification'); }
    public function hasAmountSpecification(): bool { return $this->has('amount_specification'); }
    /** @return MoneyValue
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** @return InvoiceScheduleEntryDueAtIssue|InvoiceScheduleEntryDueDate|InvoiceScheduleEntryDueInvoiceDueDate|\stdClass
     * @throws SdkError When due is omitted; use hasDue() or valueOrDefault().
     */
    public function getDue(): InvoiceScheduleEntryDueAtIssue|InvoiceScheduleEntryDueDate|InvoiceScheduleEntryDueInvoiceDueDate|\stdClass { return $this->get('due'); }
    public function hasDue(): bool { return $this->has('due'); }
    /** @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** @return MoneyValue
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** @return MoneyValue
     * @throws SdkError When paid_money is omitted; use hasPaidMoney() or valueOrDefault().
     */
    public function getPaidMoney(): MoneyValue { return $this->get('paid_money'); }
    public function hasPaidMoney(): bool { return $this->has('paid_money'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return MoneyValue
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** @return MoneyValue
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
