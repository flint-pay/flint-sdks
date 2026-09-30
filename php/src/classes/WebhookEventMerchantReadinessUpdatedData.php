<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $business_name
 * @property-read string $merchant_environment_id
 * @property-read string $merchant_id
 * @property-read string $observed_at
 * @property-read WebhookEventMerchantReadinessUpdatedDataPayments $payments
 * @property-read WebhookEventMerchantReadinessUpdatedDataPayouts $payouts
 * @property-read WebhookEventMerchantReadinessUpdatedDataRequirements $requirements
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventMerchantReadinessUpdatedData extends Model {
    /** @param array{'business_name'?: string, 'merchant_environment_id': string, 'merchant_id': string, 'observed_at': string, 'payments': object{'next_actions': list<object{'action_type': string, 'expires_at'?: string, 'url'?: string}>, 'status': string, 'status_reason': string|null}, 'payouts': object{'next_actions': list<object{'action_type': string, 'expires_at'?: string, 'url'?: string}>, 'status': string, 'status_reason': string|null}, 'requirements': object{'current_deadline_at'?: string|null, 'currently_due': list<string>, 'disabled_reason': string|null, 'eventually_due': list<string>, 'past_due': list<string>, 'pending_verification': list<string>}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantReadinessUpdatedData')); }
    /** @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** @return string
     * @throws SdkError When merchant_environment_id is omitted; use hasMerchantEnvironmentId() or valueOrDefault().
     */
    public function getMerchantEnvironmentId(): string { return $this->get('merchant_environment_id'); }
    public function hasMerchantEnvironmentId(): bool { return $this->has('merchant_environment_id'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** @return WebhookEventMerchantReadinessUpdatedDataPayments
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): WebhookEventMerchantReadinessUpdatedDataPayments { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** @return WebhookEventMerchantReadinessUpdatedDataPayouts
     * @throws SdkError When payouts is omitted; use hasPayouts() or valueOrDefault().
     */
    public function getPayouts(): WebhookEventMerchantReadinessUpdatedDataPayouts { return $this->get('payouts'); }
    public function hasPayouts(): bool { return $this->has('payouts'); }
    /** @return WebhookEventMerchantReadinessUpdatedDataRequirements
     * @throws SdkError When requirements is omitted; use hasRequirements() or valueOrDefault().
     */
    public function getRequirements(): WebhookEventMerchantReadinessUpdatedDataRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
