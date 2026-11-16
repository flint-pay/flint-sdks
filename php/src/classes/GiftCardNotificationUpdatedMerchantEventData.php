<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardNotificationUpdatedMerchantEventDataObject $object
 * @property-read ?GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationUpdatedMerchantEventData extends Model {
    /** @param array{'object': object{'created_at': string, 'delivery'?: mixed, 'gift_card_id': string, 'gift_card_notification_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string, 'sent_at'?: string, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'created_at'?: mixed, 'delivery'?: mixed, 'gift_card_id'?: mixed, 'gift_card_notification_id'?: mixed, 'recipient'?: mixed, 'resend_of_notification_id'?: mixed, 'sent_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationUpdatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return GiftCardNotificationUpdatedMerchantEventDataObject
     */
    public function getObject(): GiftCardNotificationUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
