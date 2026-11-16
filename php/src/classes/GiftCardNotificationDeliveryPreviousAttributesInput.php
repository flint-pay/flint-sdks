<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<GiftCardNotificationDeliveryAttemptPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $attempts
 * @property-read list<GiftCardNotificationDeliveryEventPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $events
 * @property-read bool|null $has_more_attempts
 * @property-read bool|null $has_more_events
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationDeliveryPreviousAttributesInput extends Model {
    /** @param array{'attempts'?: list<GiftCardNotificationDeliveryAttemptPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'events'?: list<GiftCardNotificationDeliveryEventPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'has_more_attempts'?: bool|null, 'has_more_events'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryPreviousAttributesInput')); }
    /** Recent delivery attempts for the notification. anyOf[1] (Value): Array of {@see GiftCardNotificationDeliveryAttemptPreviousAttributesInput}. Recent delivery attempts for the notification. maxItems: 20. anyOf[1][] (Value): {@see GiftCardNotificationDeliveryAttemptPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<GiftCardNotificationDeliveryAttemptPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When attempts is omitted; use hasAttempts() or valueOrDefault().
     */
    public function getAttempts(): mixed { return $this->get('attempts'); }
    public function hasAttempts(): bool { return $this->has('attempts'); }
    /** Recent delivery events for the notification. anyOf[1] (Value): Array of {@see GiftCardNotificationDeliveryEventPreviousAttributesInput}. Recent delivery events for the notification. maxItems: 50. anyOf[1][] (Value): {@see GiftCardNotificationDeliveryEventPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<GiftCardNotificationDeliveryEventPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When events is omitted; use hasEvents() or valueOrDefault().
     */
    public function getEvents(): mixed { return $this->get('events'); }
    public function hasEvents(): bool { return $this->has('events'); }
    /** Whether the notification has more attempts than `attempts` lists. anyOf[1] (Value): boolean. Whether the notification has more attempts than `attempts` lists. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When has_more_attempts is omitted; use hasHasMoreAttempts() or valueOrDefault().
     */
    public function getHasMoreAttempts(): mixed { return $this->get('has_more_attempts'); }
    public function hasHasMoreAttempts(): bool { return $this->has('has_more_attempts'); }
    /** Whether the notification has more events than `events` lists. anyOf[1] (Value): boolean. Whether the notification has more events than `events` lists. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When has_more_events is omitted; use hasHasMoreEvents() or valueOrDefault().
     */
    public function getHasMoreEvents(): mixed { return $this->get('has_more_events'); }
    public function hasHasMoreEvents(): bool { return $this->has('has_more_events'); }
}
