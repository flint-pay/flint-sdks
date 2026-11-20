<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PlatformFeePayoutFailedEventDataObject $object
 * @property-read ?PlatformFeePayoutFailedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeePayoutFailedEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'amount_money': mixed, 'balance_transaction_id'?: string, 'created_at': string, 'failure_reason'?: string, 'partner_app_id': string, 'platform_fee_payout_id': string, 'status': string, 'succeeded_at'?: string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'amount_money'?: mixed, 'balance_transaction_id'?: mixed, 'created_at'?: mixed, 'failure_reason'?: mixed, 'partner_app_id'?: mixed, 'platform_fee_payout_id'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeePayoutFailedEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PlatformFeePayoutFailedEventDataObject
     */
    public function getObject(): PlatformFeePayoutFailedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PlatformFeePayoutFailedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PlatformFeePayoutFailedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
