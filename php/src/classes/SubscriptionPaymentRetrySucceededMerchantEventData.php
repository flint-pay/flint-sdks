<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read SubscriptionPaymentRetrySucceededMerchantEventDataObject $object
 * @property-read ?SubscriptionPaymentRetrySucceededMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPaymentRetrySucceededMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'completed_at'?: string, 'created_at': string, 'idempotency_key': string|null, 'last_payment_error'?: mixed, 'order_id'?: string, 'payment_intent_id'?: string, 'started_at'?: string, 'status': string, 'subscription_id': string, 'subscription_payment_retry_id': string, 'updated_at': string}, 'previous_attributes'?: object{'completed_at'?: mixed, 'created_at'?: mixed, 'idempotency_key'?: mixed, 'last_payment_error'?: mixed, 'order_id'?: mixed, 'payment_intent_id'?: mixed, 'started_at'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'subscription_payment_retry_id'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPaymentRetrySucceededMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return SubscriptionPaymentRetrySucceededMerchantEventDataObject
     */
    public function getObject(): SubscriptionPaymentRetrySucceededMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?SubscriptionPaymentRetrySucceededMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?SubscriptionPaymentRetrySucceededMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
