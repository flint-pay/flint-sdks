<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_notification_id
 * @property-read array{}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationsCancelInput extends Model {
    /** @param array{'gift_card_notification_id': string, 'body'?: array{}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationsCancelInput')); }
    /** Flint resource ID. Example: "gcn_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_notification_id is omitted; use hasGiftCardNotificationId() or valueOrDefault().
     */
    public function getGiftCardNotificationId(): string { return $this->get('gift_card_notification_id'); }
    public function hasGiftCardNotificationId(): bool { return $this->has('gift_card_notification_id'); }
    /** The request body for: Cancel a gift card notification.
     * @return array{}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
