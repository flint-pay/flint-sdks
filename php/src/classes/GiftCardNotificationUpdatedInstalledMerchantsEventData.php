<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read GiftCardNotificationUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?GiftCardNotificationUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'created_at': string, 'delivery'?: mixed, 'gift_card_id': string, 'gift_card_notification_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string, 'sent_at'?: string, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'created_at'?: mixed, 'delivery'?: mixed, 'gift_card_id'?: mixed, 'gift_card_notification_id'?: mixed, 'recipient'?: mixed, 'resend_of_notification_id'?: mixed, 'sent_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationUpdatedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return GiftCardNotificationUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): GiftCardNotificationUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?GiftCardNotificationUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?GiftCardNotificationUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
