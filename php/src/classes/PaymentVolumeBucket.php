<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payments_count
 * @property-read string $period_end_at
 * @property-read string $period_start_at
 * @property-read MoneyValue $volume_money
 * Presence-aware response; omitted optional fields return null. */
final class PaymentVolumeBucket extends Model {
    /** @param array{'payments_count': string, 'period_end_at': string, 'period_start_at': string, 'volume_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentVolumeBucket')); }
    /** Shape $ (Value): integer string. Succeeded payments selected by payment created_at within this bucket, restricted to the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getPaymentsCount(): string { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
    /** Shape $ (Value): string. Exclusive bucket end instant, clipped to the resolved period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string
     */
    public function getPeriodEndAt(): string { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string
     */
    public function getPeriodStartAt(): string { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Succeeded payment amounts selected by payment created_at within this bucket, in the response currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getVolumeMoney(): MoneyValue { return $this->get('volume_money'); }
    public function hasVolumeMoney(): bool { return $this->has('volume_money'); }
}
