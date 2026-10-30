<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download': PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportSucceededMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download': PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportSucceededMerchantEventInput')); }
    /** Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  object (Required): object and {@see ReportInput}. A report generated from the merchant's activity. object.created_at (Required): string. When the report was requested. Format: date-time. object.currency (Required): string. Currency the report covers. A report never combines currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". object.download (Optional): {@see PublicDownloadInput}. Link to download the generated report. Present only when status is succeeded. A temporary link for downloading a generated report. object.failure_reason (Optional): string. Why the report failed. Present only when status is failed: limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs wasn't available yet, and generation_failed for other errors. Treat an unknown value like generation_failed. Value enum: "generation_failed", "data_unavailable", "limit_exceeded". object.interval_end_at (Required): string. Exclusive interval end instant. Each report type matches its own occurrence time. Format: date-time. object.interval_start_at (Required): string. Inclusive interval start instant. Each report type matches its own occurrence time. Format: date-time. object.report_id (Required): string. Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. object.report_type (Required): string. The report's type and column version. See the Reports guide for its columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1". object.status (Required): string. pending while Flint generates the report, then succeeded with a download or failed with a failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum: "pending", "succeeded", "failed". object.timezone (Required): string. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. object.oneOf[1] (Value): {@see ReportPendingInput}. A report generated from the merchant's activity. object.oneOf[2] (Value): {@see ReportSucceededInput}. A report generated from the merchant's activity. object.oneOf[3] (Value): {@see ReportFailedInput}. A report generated from the merchant's activity.
     * @return array{'object': array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download': PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "report.succeeded".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /**  id (Required): string. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
