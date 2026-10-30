<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'gift_card_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationsCreateInput extends Model {
    /** @param array{'body': array{'gift_card_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationsCreateInput')); }
    /** The request body for: Send a gift card notification.
     * @return array{'gift_card_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
