<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $live_merchant_limit
 * @property-read array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null $monthly_volume_limit_currency_options
 * @property-read PartnerAppPlatformUsagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $usage
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformLimitsPreviousAttributesInput extends Model {
    /** @param array{'live_merchant_limit'?: int|null, 'monthly_volume_limit_currency_options'?: array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null, 'usage'?: PartnerAppPlatformUsagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformLimitsPreviousAttributesInput')); }
    /** Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. anyOf[1] (Value): integer. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When live_merchant_limit is omitted; use hasLiveMerchantLimit() or valueOrDefault().
     */
    public function getLiveMerchantLimit(): mixed { return $this->get('live_merchant_limit'); }
    public function hasLiveMerchantLimit(): bool { return $this->has('live_merchant_limit'); }
    /** Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributesInput}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|\stdClass|null
     * @throws SdkError When monthly_volume_limit_currency_options is omitted; use hasMonthlyVolumeLimitCurrencyOptions() or valueOrDefault().
     */
    public function getMonthlyVolumeLimitCurrencyOptions(): mixed { return $this->get('monthly_volume_limit_currency_options'); }
    public function hasMonthlyVolumeLimitCurrencyOptions(): bool { return $this->has('monthly_volume_limit_currency_options'); }
    /** The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. anyOf[1] (Value): {@see PartnerAppPlatformUsagePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PartnerAppPlatformUsagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When usage is omitted; use hasUsage() or valueOrDefault().
     */
    public function getUsage(): mixed { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
}
