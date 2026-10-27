<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payments_count
 * @property-read string|\DateTimeInterface $period_end_at
 * @property-read string|\DateTimeInterface $period_start_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $volume_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentVolumeBucketInput extends Model {
    /** @param array{'payments_count': string, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'volume_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentVolumeBucketInput')); }
    /** Shape $ (Value): integer string. Succeeded payments selected by payment created_at within this bucket, restricted to the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When payments_count is omitted; use hasPaymentsCount() or valueOrDefault().
     */
    public function getPaymentsCount(): string { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
    /** Shape $ (Value): string. Exclusive bucket end instant, clipped to the resolved period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_end_at is omitted; use hasPeriodEndAt() or valueOrDefault().
     */
    public function getPeriodEndAt(): string|\DateTimeInterface { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_start_at is omitted; use hasPeriodStartAt() or valueOrDefault().
     */
    public function getPeriodStartAt(): string|\DateTimeInterface { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Succeeded payment amounts selected by payment created_at within this bucket, in the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When volume_money is omitted; use hasVolumeMoney() or valueOrDefault().
     */
    public function getVolumeMoney(): mixed { return $this->get('volume_money'); }
    public function hasVolumeMoney(): bool { return $this->has('volume_money'); }
}
