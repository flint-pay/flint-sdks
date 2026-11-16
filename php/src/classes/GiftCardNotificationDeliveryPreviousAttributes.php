<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<GiftCardNotificationDeliveryAttemptPreviousAttributes>|null $attempts
 * @property-read list<GiftCardNotificationDeliveryEventPreviousAttributes>|null $events
 * @property-read bool|null $has_more_attempts
 * @property-read bool|null $has_more_events
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationDeliveryPreviousAttributes extends Model {
    /** @param array{'attempts'?: mixed, 'events'?: mixed, 'has_more_attempts'?: mixed, 'has_more_events'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryPreviousAttributes')); }
    /** Recent delivery attempts for the notification. anyOf[1] (Value): Array of {@see GiftCardNotificationDeliveryAttemptPreviousAttributes}. Recent delivery attempts for the notification. maxItems: 20. anyOf[1][] (Value): {@see GiftCardNotificationDeliveryAttemptPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<GiftCardNotificationDeliveryAttemptPreviousAttributes>|null
     */
    public function getAttempts(): array|null { return $this->get('attempts'); }
    public function hasAttempts(): bool { return $this->has('attempts'); }
    /** Recent delivery events for the notification. anyOf[1] (Value): Array of {@see GiftCardNotificationDeliveryEventPreviousAttributes}. Recent delivery events for the notification. maxItems: 50. anyOf[1][] (Value): {@see GiftCardNotificationDeliveryEventPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<GiftCardNotificationDeliveryEventPreviousAttributes>|null
     */
    public function getEvents(): array|null { return $this->get('events'); }
    public function hasEvents(): bool { return $this->has('events'); }
    /** Whether the notification has more attempts than `attempts` lists. anyOf[1] (Value): boolean. Whether the notification has more attempts than `attempts` lists. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getHasMoreAttempts(): bool|null { return $this->get('has_more_attempts'); }
    public function hasHasMoreAttempts(): bool { return $this->has('has_more_attempts'); }
    /** Whether the notification has more events than `events` lists. anyOf[1] (Value): boolean. Whether the notification has more events than `events` lists. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getHasMoreEvents(): bool|null { return $this->get('has_more_events'); }
    public function hasHasMoreEvents(): bool { return $this->has('has_more_events'); }
}
