<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<GiftCardNotificationDeliveryAttemptInput|array<array-key, mixed>|\stdClass> $attempts
 * @property-read list<GiftCardNotificationDeliveryEventInput|array<array-key, mixed>|\stdClass> $events
 * @property-read bool $has_more_attempts
 * @property-read bool $has_more_events
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationDeliveryInput extends Model {
    /** @param array{'attempts': list<GiftCardNotificationDeliveryAttemptInput|array<array-key, mixed>|\stdClass>, 'events': list<GiftCardNotificationDeliveryEventInput|array<array-key, mixed>|\stdClass>, 'has_more_attempts': bool, 'has_more_events': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryInput')); }
    /** maxItems: 20. [] (Value): {@see GiftCardNotificationDeliveryAttemptInput}. One attempt to send a gift card notification email, with its attempt number, status, and start and completion times.
     * @return list<GiftCardNotificationDeliveryAttemptInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When attempts is omitted; use hasAttempts() or valueOrDefault().
     */
    public function getAttempts(): array { return $this->get('attempts'); }
    public function hasAttempts(): bool { return $this->has('attempts'); }
    /** maxItems: 50. [] (Value): {@see GiftCardNotificationDeliveryEventInput}. A delivery event for a gift card notification email, such as accepted, delivered, bounced, or dropped, with when it occurred and was received.
     * @return list<GiftCardNotificationDeliveryEventInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When events is omitted; use hasEvents() or valueOrDefault().
     */
    public function getEvents(): array { return $this->get('events'); }
    public function hasEvents(): bool { return $this->has('events'); }
    /** has_more_attempts
     * @return bool
     * @throws SdkError When has_more_attempts is omitted; use hasHasMoreAttempts() or valueOrDefault().
     */
    public function getHasMoreAttempts(): bool { return $this->get('has_more_attempts'); }
    public function hasHasMoreAttempts(): bool { return $this->has('has_more_attempts'); }
    /** has_more_events
     * @return bool
     * @throws SdkError When has_more_events is omitted; use hasHasMoreEvents() or valueOrDefault().
     */
    public function getHasMoreEvents(): bool { return $this->get('has_more_events'); }
    public function hasHasMoreEvents(): bool { return $this->has('has_more_events'); }
}
