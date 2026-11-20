<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PlatformFeeCanceledEventDataObject $object
 * @property-read ?PlatformFeeCanceledEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeCanceledEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'amount_money': mixed, 'canceled_reason'?: string, 'checkout_session_id'?: string, 'collected_at'?: string, 'created_at': string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'platform_fee_id': string, 'refunded_money': mixed, 'requested_amount_money': mixed, 'reserve_available_at'?: string, 'reserve_hold_money'?: mixed, 'status': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'amount_money'?: mixed, 'canceled_reason'?: mixed, 'checkout_session_id'?: mixed, 'collected_at'?: mixed, 'created_at'?: mixed, 'merchant_id'?: mixed, 'partner_app_id'?: mixed, 'partner_app_install_id'?: mixed, 'payment_intent_id'?: mixed, 'platform_fee_id'?: mixed, 'refunded_money'?: mixed, 'requested_amount_money'?: mixed, 'reserve_available_at'?: mixed, 'reserve_hold_money'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeCanceledEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PlatformFeeCanceledEventDataObject
     */
    public function getObject(): PlatformFeeCanceledEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PlatformFeeCanceledEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PlatformFeeCanceledEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
