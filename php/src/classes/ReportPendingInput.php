<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $currency
 * @property-read PublicDownloadInput|array<array-key, mixed>|\stdClass $download
 * @property-read string $failure_reason
 * @property-read string|\DateTimeInterface $interval_end_at
 * @property-read string|\DateTimeInterface $interval_start_at
 * @property-read string $report_id
 * @property-read string $report_type
 * @property-read string $status
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportPendingInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportPendingInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): {@see PublicDownloadInput}. A temporary link for downloading a generated report.
     * @return PublicDownloadInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When download is omitted; use hasDownload() or valueOrDefault().
     */
    public function getDownload(): mixed { return $this->get('download'); }
    public function hasDownload(): bool { return $this->has('download'); }
    /** Shape $ (Value): string.  Value enum: "generation_failed", "data_unavailable", "limit_exceeded".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own occurrence time. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When interval_end_at is omitted; use hasIntervalEndAt() or valueOrDefault().
     */
    public function getIntervalEndAt(): string|\DateTimeInterface { return $this->get('interval_end_at'); }
    public function hasIntervalEndAt(): bool { return $this->has('interval_end_at'); }
    /** Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own occurrence time. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When interval_start_at is omitted; use hasIntervalStartAt() or valueOrDefault().
     */
    public function getIntervalStartAt(): string|\DateTimeInterface { return $this->get('interval_start_at'); }
    public function hasIntervalStartAt(): bool { return $this->has('interval_start_at'); }
    /** Shape $ (Value): string. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When report_id is omitted; use hasReportId() or valueOrDefault().
     */
    public function getReportId(): string { return $this->get('report_id'); }
    public function hasReportId(): bool { return $this->has('report_id'); }
    /** Shape $ (Value): string. The report's type and column version. See the Reports guide for its columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1".
     * @return string
     * @throws SdkError When report_type is omitted; use hasReportType() or valueOrDefault().
     */
    public function getReportType(): string { return $this->get('report_type'); }
    public function hasReportType(): bool { return $this->has('report_type'); }
    /** Shape $ (Value): string.  Value enum: "pending".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
