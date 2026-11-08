<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardNotificationCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'created_at': string, 'delivery'?: mixed, 'gift_card_id': string, 'gift_card_notification_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string, 'sent_at'?: string, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return GiftCardNotificationCreatedMerchantEventDataObject
     */
    public function getObject(): GiftCardNotificationCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
