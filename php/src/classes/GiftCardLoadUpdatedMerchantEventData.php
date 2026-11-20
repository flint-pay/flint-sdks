<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read GiftCardLoadUpdatedMerchantEventDataObject $object
 * @property-read ?GiftCardLoadUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardLoadUpdatedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'consideration_money': mixed, 'created_at': string, 'funding_disputes': list<mixed>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<mixed>, 'purchase_refunds': list<mixed>, 'purchase_restoration'?: mixed, 'refund_provenance'?: mixed, 'refund_transferred_money'?: mixed, 'remaining_money': mixed, 'reversed_money': mixed, 'source': mixed, 'source_created_at': string|null, 'value_money': mixed, 'version': int}, 'previous_attributes'?: object{'consideration_money'?: mixed, 'created_at'?: mixed, 'funding_disputes'?: mixed, 'gift_card_id'?: mixed, 'gift_card_load_id'?: mixed, 'idempotency_key'?: mixed, 'purchase_refund_value_holds'?: mixed, 'purchase_refunds'?: mixed, 'purchase_restoration'?: mixed, 'refund_provenance'?: mixed, 'refund_transferred_money'?: mixed, 'remaining_money'?: mixed, 'reversed_money'?: mixed, 'source'?: mixed, 'source_created_at'?: mixed, 'value_money'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadUpdatedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return GiftCardLoadUpdatedMerchantEventDataObject
     */
    public function getObject(): GiftCardLoadUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?GiftCardLoadUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?GiftCardLoadUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
