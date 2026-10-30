<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass $notification
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardsRotateCodeParams extends Model {
    /** @param array{'expected_version'?: int, 'notification'?: GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardsRotateCodeParams')); }
    /** The gift card version last read. The command changes this card only when its current version matches. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Explicitly send or schedule the replacement code through private recipient access. Requires commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When notification is omitted; use hasNotification() or valueOrDefault().
     */
    public function getNotification(): mixed { return $this->get('notification'); }
    public function hasNotification(): bool { return $this->has('notification'); }
}
