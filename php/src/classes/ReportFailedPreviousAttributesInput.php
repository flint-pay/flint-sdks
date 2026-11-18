<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $as_of_date
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $currency
 * @property-read PublicDownloadPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $download
 * @property-read string|null $failure_reason
 * @property-read string|\DateTimeInterface|null $interval_end_at
 * @property-read string|\DateTimeInterface|null $interval_start_at
 * @property-read string|null $report_id
 * @property-read string|null $report_type
 * @property-read string|null $status
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportFailedPreviousAttributesInput extends Model {
    /** @param array{'as_of_date'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'currency'?: string|null, 'download'?: PublicDownloadPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'failure_reason'?: string|null, 'interval_end_at'?: string|\DateTimeInterface|null, 'interval_start_at'?: string|\DateTimeInterface|null, 'report_id'?: string|null, 'report_type'?: string|null, 'status'?: string|null, 'timezone'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportFailedPreviousAttributesInput')); }
    /** Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. anyOf[1] (Value): string. Present only for receivables_aging_v1. The calendar date in timezone whose receivables are reported. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When as_of_date is omitted; use hasAsOfDate() or valueOrDefault().
     */
    public function getAsOfDate(): mixed { return $this->get('as_of_date'); }
    public function hasAsOfDate(): bool { return $this->has('as_of_date'); }
    /** When the report was requested. anyOf[1] (Value): string. When the report was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. anyOf[1] (Value): string. Currency the report covers. A report never combines currencies. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): mixed { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Link to download the generated report. Present only when status is succeeded. anyOf[1] (Value): {@see PublicDownloadPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PublicDownloadPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When download is omitted; use hasDownload() or valueOrDefault().
     */
    public function getDownload(): mixed { return $this->get('download'); }
    public function hasDownload(): bool { return $this->has('download'); }
    /** Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Value enum: "generation_failed", "data_unavailable", "limit_exceeded". anyOf[1] (Value): string. Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Value enum: "generation_failed", "data_unavailable", "limit_exceeded". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): mixed { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Exclusive interval end instant. Each report type matches its own occurrence time. anyOf[1] (Value): string. Exclusive interval end instant. Each report type matches its own occurrence time. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When interval_end_at is omitted; use hasIntervalEndAt() or valueOrDefault().
     */
    public function getIntervalEndAt(): mixed { return $this->get('interval_end_at'); }
    public function hasIntervalEndAt(): bool { return $this->has('interval_end_at'); }
    /** Inclusive interval start instant. Each report type matches its own occurrence time. anyOf[1] (Value): string. Inclusive interval start instant. Each report type matches its own occurrence time. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When interval_start_at is omitted; use hasIntervalStartAt() or valueOrDefault().
     */
    public function getIntervalStartAt(): mixed { return $this->get('interval_start_at'); }
    public function hasIntervalStartAt(): bool { return $this->has('interval_start_at'); }
    /** Stable identifier of the report. anyOf[1] (Value): string. Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. Example: "rep_01KEZF7C00M947R0GYFMT8VXKJ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When report_id is omitted; use hasReportId() or valueOrDefault().
     */
    public function getReportId(): mixed { return $this->get('report_id'); }
    public function hasReportId(): bool { return $this->has('report_id'); }
    /** The report's type and column version. See the Reports guide for its columns. Value enum: "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1", "tax_transactions_itemized_v2", "tax_transactions_summarized_v2". anyOf[1] (Value): string. The report's type and column version. See the Reports guide for its columns. Value enum: "receivables_aging_v1", "invoices_itemized_v1", "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1", "tax_transactions_itemized_v2", "tax_transactions_summarized_v2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When report_type is omitted; use hasReportType() or valueOrDefault().
     */
    public function getReportType(): mixed { return $this->get('report_type'); }
    public function hasReportType(): bool { return $this->has('report_type'); }
    /** pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum: "failed". anyOf[1] (Value): string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum: "failed". anyOf[2] (Value): null. anyOf[1] (Value): string.  Value enum: "failed".
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. anyOf[1] (Value): string. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
