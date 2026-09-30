<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read bool $cancel_at_period_end
 * @property-read ContractInfoInput|array<array-key, mixed>|\stdClass $contract_info
 * @property-read string $customer_id
 * @property-read string $external_reference_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $payment_method_id
 * @property-read string $plan_id
 * @property-read SubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass $service_location
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelSubscriptionResultInput extends Model {
    /** @param array{'billing_anchor_day'?: int, 'cancel_at_period_end': bool, 'contract_info'?: ContractInfoInput|array<array-key, mixed>|\stdClass, 'customer_id': string, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'payment_method_id': string, 'plan_id': string, 'service_location'?: SubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelSubscriptionResultInput')); }
    /** @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** @return ContractInfoInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When contract_info is omitted; use hasContractInfo() or valueOrDefault().
     */
    public function getContractInfo(): mixed { return $this->get('contract_info'); }
    public function hasContractInfo(): bool { return $this->has('contract_info'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** @return string
     * @throws SdkError When plan_id is omitted; use hasPlanId() or valueOrDefault().
     */
    public function getPlanId(): string { return $this->get('plan_id'); }
    public function hasPlanId(): bool { return $this->has('plan_id'); }
    /** @return SubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_location is omitted; use hasServiceLocation() or valueOrDefault().
     */
    public function getServiceLocation(): mixed { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
}
