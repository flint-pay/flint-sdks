<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read MerchantBillingBalanceUpdatedEventDataObject $object
 * @property-read ?MerchantBillingBalanceUpdatedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingBalanceUpdatedEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'available_credit_money': mixed, 'currency': string, 'merchant_billing_balance_id': string, 'observed_at': string, 'outstanding_money': mixed, 'past_due_at'?: string, 'past_due_money': mixed, 'payout_hold_at'?: string}, 'previous_attributes'?: object{'available_credit_money'?: mixed, 'currency'?: mixed, 'merchant_billing_balance_id'?: mixed, 'observed_at'?: mixed, 'outstanding_money'?: mixed, 'past_due_at'?: mixed, 'past_due_money'?: mixed, 'payout_hold_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalanceUpdatedEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return MerchantBillingBalanceUpdatedEventDataObject
     */
    public function getObject(): MerchantBillingBalanceUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?MerchantBillingBalanceUpdatedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?MerchantBillingBalanceUpdatedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
