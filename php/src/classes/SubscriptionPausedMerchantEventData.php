<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionPausedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPausedMerchantEventData extends Model {
    /** @param array{'object': object{'billing_anchor_day'?: int, 'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<mixed>, 'billing_schedule_owner': string, 'billing_schedule_waiting_started_at'?: string, 'buyer_actions': list<mixed>, 'cancel_at_period_end': bool, 'canceled_at'?: string, 'cancellation_details'?: mixed, 'cancellation_reason'?: string, 'completed_cycles': int, 'contract_end_at'?: string, 'contract_start_at'?: string, 'created_at': string, 'current_period_end_at'?: string, 'current_period_start_at'?: string, 'customer'?: mixed, 'customer_id': string, 'delivery'?: mixed, 'delivery_hold'?: mixed, 'early_termination_fee_money'?: mixed, 'end_after': mixed, 'expires_at': string|null, 'external_reference_id'?: string, 'inventory_wait'?: mixed, 'is_awaiting_billing_schedule'?: bool, 'last_payment_error'?: mixed, 'line_items': list<mixed>, 'merchant_id': string, 'metadata'?: mixed, 'missed_billing_at'?: string, 'next_billing_at'?: string, 'next_retry_at': string|null, 'open_renewal_order_id'?: string, 'outstanding_money'?: mixed, 'pause_reason'?: string, 'paused_at'?: string, 'payment_method'?: mixed, 'payment_method_due_at': string|null, 'payment_method_id': string|null, 'promotions': list<mixed>, 'prorate_first_period': bool, 'quantity': int, 'quantity_options'?: list<int>, 'recurring_subtotal_money': mixed, 'remaining_cycles': int|null, 'resume_requested_at': string|null, 'scheduled_cancel_at': string|null, 'scheduled_plan_change': mixed, 'scheduled_promotions': list<mixed>, 'scheduled_resume_at': string|null, 'service_location'?: mixed, 'starts_at'?: string, 'status': string, 'subscription_id': string, 'subscription_plan'?: mixed, 'subscription_plan_id'?: string, 'supported_actions': list<string>, 'terms_type': string, 'test_clock_id'?: string, 'trial_end_at'?: string, 'upcoming_delivery_hold'?: mixed, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPausedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return SubscriptionPausedMerchantEventDataObject
     */
    public function getObject(): SubscriptionPausedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
