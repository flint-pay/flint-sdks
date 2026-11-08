<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $blocking_requirement_count
 * @property-read string $observed_at
 * @property-read PartnerAppMerchantReadinessAxis $payments
 * @property-read PartnerAppMerchantReadinessAxis $payouts
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppMerchantReadiness extends Model {
    /** @param array{'blocking_requirement_count': int, 'observed_at': string, 'payments': mixed, 'payouts': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppMerchantReadiness')); }
    /** How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. Format: int64. minimum: 0.
     * @return int
     */
    public function getBlockingRequirementCount(): int { return $this->get('blocking_requirement_count'); }
    public function hasBlockingRequirementCount(): bool { return $this->has('blocking_requirement_count'); }
    /** When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Whether the merchant can take payments in this environment, with the `status` and `status_reason` of `readiness.payments` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`.
     * @return PartnerAppMerchantReadinessAxis
     */
    public function getPayments(): PartnerAppMerchantReadinessAxis { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Whether the merchant can receive payouts in this environment, with the `status` and `status_reason` of `readiness.payouts` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`.
     * @return PartnerAppMerchantReadinessAxis
     */
    public function getPayouts(): PartnerAppMerchantReadinessAxis { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
}
