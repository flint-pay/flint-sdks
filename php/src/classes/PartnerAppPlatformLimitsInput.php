<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $live_merchant_limit
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $monthly_volume_limit_currency_options
 * @property-read PartnerAppPlatformUsageInput|array<array-key, mixed>|\stdClass $usage
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformLimitsInput extends Model {
    /** @param array{'live_merchant_limit': int, 'monthly_volume_limit_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'usage': PartnerAppPlatformUsageInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformLimitsInput')); }
    /** Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When live_merchant_limit is omitted; use hasLiveMerchantLimit() or valueOrDefault().
     */
    public function getLiveMerchantLimit(): int { return $this->get('live_merchant_limit'); }
    public function hasLiveMerchantLimit(): bool { return $this->has('live_merchant_limit'); }
    /** Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When monthly_volume_limit_currency_options is omitted; use hasMonthlyVolumeLimitCurrencyOptions() or valueOrDefault().
     */
    public function getMonthlyVolumeLimitCurrencyOptions(): array|object { return $this->get('monthly_volume_limit_currency_options'); }
    public function hasMonthlyVolumeLimitCurrencyOptions(): bool { return $this->has('monthly_volume_limit_currency_options'); }
    /** The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. The platform's usage against its limits, as Flint last counted it.
     * @return PartnerAppPlatformUsageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When usage is omitted; use hasUsage() or valueOrDefault().
     */
    public function getUsage(): mixed { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
}
