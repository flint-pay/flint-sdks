<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string|\DateTimeInterface $interval_end_at
 * @property-read string|\DateTimeInterface $interval_start_at
 * @property-read string $report_type
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReportRequestInput extends Model {
    /** @param array{'currency': string, 'interval_end_at': string|\DateTimeInterface, 'interval_start_at': string|\DateTimeInterface, 'report_type': string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReportRequestInput')); }
    /** Shape $ (Value): string. Three-letter ISO 4217 currency. Reports never combine currencies. gift_card_liability_v1 supports USD only; other currencies return INVALID_REQUEST on currency. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Exclusive report interval end instant. Each report type matches its own occurrence time. At most the same local time 366 calendar days after interval_start_at in timezone. Must not be in the future. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When interval_end_at is omitted; use hasIntervalEndAt() or valueOrDefault().
     */
    public function getIntervalEndAt(): string|\DateTimeInterface { return $this->get('interval_end_at'); }
    public function hasIntervalEndAt(): bool { return $this->has('interval_end_at'); }
    /** Shape $ (Value): string. Inclusive report interval start instant. Each report type matches its own occurrence time. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When interval_start_at is omitted; use hasIntervalStartAt() or valueOrDefault().
     */
    public function getIntervalStartAt(): string|\DateTimeInterface { return $this->get('interval_start_at'); }
    public function hasIntervalStartAt(): bool { return $this->has('interval_start_at'); }
    /** Shape $ (Value): string. Which report to generate. The value names the row and the column version, such as payments_itemized_v1. The Reports guide lists each type's rows, interval matching, and columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2", "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1", "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1", "tax_transactions_itemized_v1".
     * @return string
     * @throws SdkError When report_type is omitted; use hasReportType() or valueOrDefault().
     */
    public function getReportType(): string { return $this->get('report_type'); }
    public function hasReportType(): bool { return $this->has('report_type'); }
    /** Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its arrival_date in this timezone. Defaults to UTC. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
