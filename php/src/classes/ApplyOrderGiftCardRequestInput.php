<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_code
 * @property-read string $order_revision
 * Presence-aware input; omitted fields throw when accessed. */
final class ApplyOrderGiftCardRequestInput extends Model {
    /** @param array{'gift_card_code': string, 'order_revision': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApplyOrderGiftCardRequestInput')); }
    /** @return string
     * @throws SdkError When gift_card_code is omitted; use hasGiftCardCode() or valueOrDefault().
     */
    public function getGiftCardCode(): string { return $this->get('gift_card_code'); }
    public function hasGiftCardCode(): bool { return $this->has('gift_card_code'); }
    /** @return string
     * @throws SdkError When order_revision is omitted; use hasOrderRevision() or valueOrDefault().
     */
    public function getOrderRevision(): string { return $this->get('order_revision'); }
    public function hasOrderRevision(): bool { return $this->has('order_revision'); }
}
