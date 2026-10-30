<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download': PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReportFailedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download': PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason'?: string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object|array{'created_at': string|\DateTimeInterface, 'currency': string, 'download'?: PublicDownloadInput|array<array-key, mixed>|\stdClass, 'failure_reason': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_id': string, 'report_type': string, 'status': string, 'timezone': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReportFailedInstalledMerchantsEventInput')); }
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
    /** Value enum: "report.failed".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The source of a partner webhook event, selected by type. environment_grant_id (Required): string. merchant_id (Required): string. mode (Required): string.  Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id (Optional): string. type (Required): string.  Value enum: "installed_merchants". oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
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
