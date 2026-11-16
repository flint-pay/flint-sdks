<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $live_merchant_count
 * @property-read array<array-key, MoneyValuePreviousAttributes>|null $monthly_volume_currency_options
 * @property-read string|null $observed_at
 * @property-read string|null $resets_at
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformUsagePreviousAttributes extends Model {
    /** @param array{'live_merchant_count'?: mixed, 'monthly_volume_currency_options'?: mixed, 'observed_at'?: mixed, 'resets_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformUsagePreviousAttributes')); }
    /** Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. anyOf[1] (Value): integer. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getLiveMerchantCount(): int|null { return $this->get('live_merchant_count'); }
    public function hasLiveMerchantCount(): bool { return $this->has('live_merchant_count'); }
    /** Fee-bearing live volume this calendar month (UTC), keyed by currency code. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributes>|null
     */
    public function getMonthlyVolumeCurrencyOptions(): array|null { return $this->get('monthly_volume_currency_options'); }
    public function hasMonthlyVolumeCurrencyOptions(): bool { return $this->has('monthly_volume_currency_options'); }
    /** When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. anyOf[1] (Value): string. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getObservedAt(): string|null { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** When the monthly volume starts again from zero: the start of the next calendar month, UTC. anyOf[1] (Value): string. When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResetsAt(): string|null { return $this->get('resets_at'); }
    public function hasResetsAt(): bool { return $this->has('resets_at'); }
}
