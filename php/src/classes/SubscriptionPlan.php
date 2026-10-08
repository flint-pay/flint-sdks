<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read int $contract_term_months
 * @property-read string $created_at
 * @property-read string $currency
 * @property-read list<SubscriptionDeliveryMethodCounts> $delivery_method_subscription_counts
 * @property-read bool $delivery_required
 * @property-read string $description
 * @property-read MoneyValue $early_termination_fee_money
 * @property-read string $external_reference_id
 * @property-read list<Image> $images
 * @property-read SubscriptionPlanInventoryRoutingSourceFixedLocation|SubscriptionPlanInventoryRoutingSourcePolicy|SubscriptionPlanInventoryRoutingSourcePolicyVersion|\stdClass $inventory_routing_source
 * @property-read list<\stdClass> $line_items
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read list<int> $quantity_options
 * @property-read MoneyValue $setup_fee_money
 * @property-read string $status
 * @property-read list<string> $subscription_delivery_method_ids
 * @property-read string $subscription_plan_id
 * @property-read int $trial_period_days
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionPlan extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<mixed>, 'contract_term_months'?: int, 'created_at'?: string, 'currency': string, 'delivery_method_subscription_counts': list<mixed>, 'delivery_required': bool, 'description'?: string, 'early_termination_fee_money'?: mixed, 'external_reference_id'?: string, 'images': list<mixed>, 'inventory_routing_source'?: mixed, 'line_items'?: list<mixed>, 'merchant_id'?: string, 'metadata'?: \stdClass, 'name': string, 'quantity_options': list<int>, 'setup_fee_money'?: mixed, 'status': string, 'subscription_delivery_method_ids': list<string>, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlan')); }
    /** @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** @return list<SubscriptionIntervalOption>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** @return int
     * @throws SdkError When contract_term_months is omitted; use hasContractTermMonths() or valueOrDefault().
     */
    public function getContractTermMonths(): int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return list<SubscriptionDeliveryMethodCounts>
     * @throws SdkError When delivery_method_subscription_counts is omitted; use hasDeliveryMethodSubscriptionCounts() or valueOrDefault().
     */
    public function getDeliveryMethodSubscriptionCounts(): array { return $this->get('delivery_method_subscription_counts'); }
    public function hasDeliveryMethodSubscriptionCounts(): bool { return $this->has('delivery_method_subscription_counts'); }
    /** @return bool
     * @throws SdkError When delivery_required is omitted; use hasDeliveryRequired() or valueOrDefault().
     */
    public function getDeliveryRequired(): bool { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return MoneyValue
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): MoneyValue { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return list<Image>
     * @throws SdkError When images is omitted; use hasImages() or valueOrDefault().
     */
    public function getImages(): array { return $this->get('images'); }
    public function hasImages(): bool { return $this->has('images'); }
    /** @return SubscriptionPlanInventoryRoutingSourceFixedLocation|SubscriptionPlanInventoryRoutingSourcePolicy|SubscriptionPlanInventoryRoutingSourcePolicyVersion|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): SubscriptionPlanInventoryRoutingSourceFixedLocation|SubscriptionPlanInventoryRoutingSourcePolicy|SubscriptionPlanInventoryRoutingSourcePolicyVersion|\stdClass { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return list<\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return list<int>
     * @throws SdkError When quantity_options is omitted; use hasQuantityOptions() or valueOrDefault().
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** @return MoneyValue
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): MoneyValue { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<string>
     * @throws SdkError When subscription_delivery_method_ids is omitted; use hasSubscriptionDeliveryMethodIds() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMethodIds(): array { return $this->get('subscription_delivery_method_ids'); }
    public function hasSubscriptionDeliveryMethodIds(): bool { return $this->has('subscription_delivery_method_ids'); }
    /** @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** @return int
     * @throws SdkError When trial_period_days is omitted; use hasTrialPeriodDays() or valueOrDefault().
     */
    public function getTrialPeriodDays(): int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
