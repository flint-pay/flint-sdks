<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $live_merchant_limit
 * @property-read array<array-key, MoneyValuePreviousAttributes>|null $monthly_volume_limit_currency_options
 * @property-read PartnerAppPlatformUsagePreviousAttributes|null $usage
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformLimitsPreviousAttributes extends Model {
    /** @param array{'live_merchant_limit'?: mixed, 'monthly_volume_limit_currency_options'?: mixed, 'usage'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformLimitsPreviousAttributes')); }
    /** Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. anyOf[1] (Value): integer. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getLiveMerchantLimit(): int|null { return $this->get('live_merchant_limit'); }
    public function hasLiveMerchantLimit(): bool { return $this->has('live_merchant_limit'); }
    /** Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributes>|null
     */
    public function getMonthlyVolumeLimitCurrencyOptions(): array|null { return $this->get('monthly_volume_limit_currency_options'); }
    public function hasMonthlyVolumeLimitCurrencyOptions(): bool { return $this->has('monthly_volume_limit_currency_options'); }
    /** The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. anyOf[1] (Value): {@see PartnerAppPlatformUsagePreviousAttributes}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformUsagePreviousAttributes|null
     */
    public function getUsage(): PartnerAppPlatformUsagePreviousAttributes|null { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
}
