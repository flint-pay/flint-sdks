<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<GiftCardNotificationDeliveryAttempt> $attempts
 * @property-read list<GiftCardNotificationDeliveryEvent> $events
 * @property-read bool $has_more_attempts
 * @property-read bool $has_more_events
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationDelivery extends Model {
    /** @param array{'attempts': list<mixed>, 'events': list<mixed>, 'has_more_attempts': bool, 'has_more_events': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDelivery')); }
    /** maxItems: 20. [] (Value): {@see GiftCardNotificationDeliveryAttempt}. One attempt to send a gift card notification email, with its attempt number, status, and start and completion times.
     * @return list<GiftCardNotificationDeliveryAttempt>
     */
    public function getAttempts(): array { return $this->get('attempts'); }
    public function hasAttempts(): bool { return $this->has('attempts'); }
    /** maxItems: 50. [] (Value): {@see GiftCardNotificationDeliveryEvent}. A delivery event for a gift card notification email, such as accepted, delivered, bounced, or dropped, with when it occurred and was received.
     * @return list<GiftCardNotificationDeliveryEvent>
     */
    public function getEvents(): array { return $this->get('events'); }
    public function hasEvents(): bool { return $this->has('events'); }
    /** has_more_attempts
     * @return bool
     */
    public function getHasMoreAttempts(): bool { return $this->get('has_more_attempts'); }
    public function hasHasMoreAttempts(): bool { return $this->has('has_more_attempts'); }
    /** has_more_events
     * @return bool
     */
    public function getHasMoreEvents(): bool { return $this->get('has_more_events'); }
    public function hasHasMoreEvents(): bool { return $this->has('has_more_events'); }
}
