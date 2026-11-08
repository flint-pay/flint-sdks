<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $as_of_date
 * @property-read string $currency
 * @property-read string|\DateTimeInterface $interval_end_at
 * @property-read string|\DateTimeInterface $interval_start_at
 * @property-read string $report_type
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReceivablesAgingReportRequestInput extends Model {
    /** @param array{'as_of_date': string, 'currency': string, 'interval_end_at'?: string|\DateTimeInterface, 'interval_start_at'?: string|\DateTimeInterface, 'report_type': string, 'timezone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReceivablesAgingReportRequestInput')); }
    /** Required only for receivables_aging_v1. Calendar date in timezone, YYYY-MM-DD, no later than today. Balances are measured at the earlier of the end of that day and report creation. Format: date. minLength: 1. Example: "2026-08-02".
     * @return string
     * @throws SdkError When as_of_date is omitted; use hasAsOfDate() or valueOrDefault().
     */
    public function getAsOfDate(): string { return $this->get('as_of_date'); }
    public function hasAsOfDate(): bool { return $this->has('as_of_date'); }
    /** Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1 supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Exclusive report interval end instant. Each report type matches its own occurrence time. At most the same local time 366 calendar days after interval_start_at in timezone. Must not be in the future. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When interval_end_at is omitted; use hasIntervalEndAt() or valueOrDefault().
     */
    public function getIntervalEndAt(): string|\DateTimeInterface { return $this->get('interval_end_at'); }
    public function hasIntervalEndAt(): bool { return $this->has('interval_end_at'); }
    /** Inclusive report interval start instant. Each report type matches its own occurrence time. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When interval_start_at is omitted; use hasIntervalStartAt() or valueOrDefault().
     */
    public function getIntervalStartAt(): string|\DateTimeInterface { return $this->get('interval_start_at'); }
    public function hasIntervalStartAt(): bool { return $this->has('interval_start_at'); }
    /** Which report to generate. The value names the row and the column version, such as payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and columns. Value enum: "receivables_aging_v1".
     * @return string
     * @throws SdkError When report_type is omitted; use hasReportType() or valueOrDefault().
     */
    public function getReportType(): string { return $this->get('report_type'); }
    public function hasReportType(): bool { return $this->has('report_type'); }
    /** IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. Defaults to the merchant's timezone, then UTC, and is saved on the report at creation. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
