<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $live_merchant_count
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $monthly_volume_currency_options
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read string|\DateTimeInterface $resets_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformUsageInput extends Model {
    /** @param array{'live_merchant_count': int, 'monthly_volume_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'observed_at': string|\DateTimeInterface, 'resets_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformUsageInput')); }
    /** Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: int64.
     * @return int
     * @throws SdkError When live_merchant_count is omitted; use hasLiveMerchantCount() or valueOrDefault().
     */
    public function getLiveMerchantCount(): int { return $this->get('live_merchant_count'); }
    public function hasLiveMerchantCount(): bool { return $this->has('live_merchant_count'); }
    /** Fee-bearing live volume this calendar month (UTC), keyed by currency code. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When monthly_volume_currency_options is omitted; use hasMonthlyVolumeCurrencyOptions() or valueOrDefault().
     */
    public function getMonthlyVolumeCurrencyOptions(): array|object { return $this->get('monthly_volume_currency_options'); }
    public function hasMonthlyVolumeCurrencyOptions(): bool { return $this->has('monthly_volume_currency_options'); }
    /** When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When resets_at is omitted; use hasResetsAt() or valueOrDefault().
     */
    public function getResetsAt(): string|\DateTimeInterface { return $this->get('resets_at'); }
    public function hasResetsAt(): bool { return $this->has('resets_at'); }
}
