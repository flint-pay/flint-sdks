<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $live_merchant_limit
 * @property-read array<array-key, MoneyValue> $monthly_volume_limit_currency_options
 * @property-read PartnerAppPlatformUsage $usage
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformLimits extends Model {
    /** @param array{'live_merchant_limit': int, 'monthly_volume_limit_currency_options': \stdClass, 'usage': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformLimits')); }
    /** Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: int64. minimum: 1.
     * @return int
     */
    public function getLiveMerchantLimit(): int { return $this->get('live_merchant_limit'); }
    public function hasLiveMerchantLimit(): bool { return $this->has('live_merchant_limit'); }
    /** Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValue>
     */
    public function getMonthlyVolumeLimitCurrencyOptions(): array { return $this->get('monthly_volume_limit_currency_options'); }
    public function hasMonthlyVolumeLimitCurrencyOptions(): bool { return $this->has('monthly_volume_limit_currency_options'); }
    /** The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. The platform's usage against its limits, as Flint last counted it.
     * @return PartnerAppPlatformUsage
     */
    public function getUsage(): PartnerAppPlatformUsage { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
}
