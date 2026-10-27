<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_plan_id
 * @property-read array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_interval_options'?: list<mixed>, 'contract_term_months'?: int, 'description'?: string|null, 'early_termination_fee_money'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'images'?: list<mixed>, 'inventory_routing_source'?: mixed, 'line_items'?: list<mixed>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'quantity_options'?: list<int>, 'setup_fee_money'?: mixed, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'trial_period_days'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlansUpdateInput extends Model {
    /** @param array{'subscription_plan_id': string, 'Idempotency-Key'?: string, 'body': array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_interval_options'?: list<mixed>, 'contract_term_months'?: int, 'description'?: string|null, 'early_termination_fee_money'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'images'?: list<mixed>, 'inventory_routing_source'?: mixed, 'line_items'?: list<mixed>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'quantity_options'?: list<int>, 'setup_fee_money'?: mixed, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'trial_period_days'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlansUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update subscription plan.
     * @return array{'billing_interval'?: string, 'billing_interval_count'?: int, 'billing_interval_options'?: list<mixed>, 'contract_term_months'?: int, 'description'?: string|null, 'early_termination_fee_money'?: mixed, 'expected_version'?: string, 'external_reference_id'?: string|null, 'images'?: list<mixed>, 'inventory_routing_source'?: mixed, 'line_items'?: list<mixed>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'quantity_options'?: list<int>, 'setup_fee_money'?: mixed, 'status'?: string, 'subscription_delivery_method_ids'?: list<string>, 'trial_period_days'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
