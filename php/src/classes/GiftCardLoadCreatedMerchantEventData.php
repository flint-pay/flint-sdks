<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardLoadCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardLoadCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'consideration_money': mixed, 'created_at': string, 'funding_disputes': list<mixed>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<mixed>, 'purchase_refunds': list<mixed>, 'purchase_restoration'?: mixed, 'refund_provenance'?: mixed, 'refund_transferred_money'?: mixed, 'remaining_money': mixed, 'reversed_money': mixed, 'source': mixed, 'source_created_at': string|null, 'value_money': mixed, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return GiftCardLoadCreatedMerchantEventDataObject
     */
    public function getObject(): GiftCardLoadCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
