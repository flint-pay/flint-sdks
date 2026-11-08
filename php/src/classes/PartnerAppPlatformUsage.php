<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $live_merchant_count
 * @property-read array<array-key, MoneyValue> $monthly_volume_currency_options
 * @property-read string $observed_at
 * @property-read string $resets_at
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformUsage extends Model {
    /** @param array{'live_merchant_count': int, 'monthly_volume_currency_options': \stdClass, 'observed_at': string, 'resets_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformUsage')); }
    /** Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: int64.
     * @return int
     */
    public function getLiveMerchantCount(): int { return $this->get('live_merchant_count'); }
    public function hasLiveMerchantCount(): bool { return $this->has('live_merchant_count'); }
    /** Fee-bearing live volume this calendar month (UTC), keyed by currency code. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValue>
     */
    public function getMonthlyVolumeCurrencyOptions(): array { return $this->get('monthly_volume_currency_options'); }
    public function hasMonthlyVolumeCurrencyOptions(): bool { return $this->has('monthly_volume_currency_options'); }
    /** When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: date-time.
     * @return string
     */
    public function getResetsAt(): string { return $this->get('resets_at'); }
    public function hasResetsAt(): bool { return $this->has('resets_at'); }
}
