<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $blocking_requirement_count
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read PartnerAppMerchantReadinessAxisInput|array<array-key, mixed>|\stdClass $payments
 * @property-read PartnerAppMerchantReadinessAxisInput|array<array-key, mixed>|\stdClass $payouts
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppMerchantReadinessInput extends Model {
    /** @param array{'blocking_requirement_count': int, 'observed_at': string|\DateTimeInterface, 'payments': PartnerAppMerchantReadinessAxisInput|array<array-key, mixed>|\stdClass, 'payouts': PartnerAppMerchantReadinessAxisInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppMerchantReadinessInput')); }
    /** How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When blocking_requirement_count is omitted; use hasBlockingRequirementCount() or valueOrDefault().
     */
    public function getBlockingRequirementCount(): int { return $this->get('blocking_requirement_count'); }
    public function hasBlockingRequirementCount(): bool { return $this->has('blocking_requirement_count'); }
    /** When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Whether the merchant can take payments in this environment, with the `status` and `status_reason` of `readiness.payments` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`.
     * @return PartnerAppMerchantReadinessAxisInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Whether the merchant can receive payouts in this environment, with the `status` and `status_reason` of `readiness.payouts` on the merchant. The status of one readiness area and the reason for it, as on the merchant's `readiness`.
     * @return PartnerAppMerchantReadinessAxisInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payouts is omitted; use hasPayouts() or valueOrDefault().
     */
    public function getPayouts(): mixed { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
}
