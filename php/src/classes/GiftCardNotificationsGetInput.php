<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_notification_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationsGetInput extends Model {
    /** @param array{'gift_card_notification_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_notification_id is omitted; use hasGiftCardNotificationId() or valueOrDefault().
     */
    public function getGiftCardNotificationId(): string { return $this->get('gift_card_notification_id'); }
    public function hasGiftCardNotificationId(): bool { return $this->has('gift_card_notification_id'); }
}
