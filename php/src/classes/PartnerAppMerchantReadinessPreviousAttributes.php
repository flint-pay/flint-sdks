<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $blocking_requirement_count
 * @property-read string|null $observed_at
 * @property-read PartnerAppMerchantReadinessAxisPreviousAttributes|null $payments
 * @property-read PartnerAppMerchantReadinessAxisPreviousAttributes|null $payouts
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppMerchantReadinessPreviousAttributes extends Model {
    /** @param array{'blocking_requirement_count'?: mixed, 'observed_at'?: mixed, 'payments'?: mixed, 'payouts'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppMerchantReadinessPreviousAttributes')); }
    /** How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. anyOf[1] (Value): integer. How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBlockingRequirementCount(): int|null { return $this->get('blocking_requirement_count'); }
    public function hasBlockingRequirementCount(): bool { return $this->has('blocking_requirement_count'); }
    /** When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. anyOf[1] (Value): string. When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getObservedAt(): string|null { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Whether the merchant can take payments in this environment, with the `status` and `status_reason` of `readiness.payments` on the merchant. anyOf[1] (Value): {@see PartnerAppMerchantReadinessAxisPreviousAttributes}. anyOf[2] (Value): null.
     * @return PartnerAppMerchantReadinessAxisPreviousAttributes|null
     */
    public function getPayments(): PartnerAppMerchantReadinessAxisPreviousAttributes|null { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Whether the merchant can receive payouts in this environment, with the `status` and `status_reason` of `readiness.payouts` on the merchant. anyOf[1] (Value): {@see PartnerAppMerchantReadinessAxisPreviousAttributes}. anyOf[2] (Value): null.
     * @return PartnerAppMerchantReadinessAxisPreviousAttributes|null
     */
    public function getPayouts(): PartnerAppMerchantReadinessAxisPreviousAttributes|null { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
}
