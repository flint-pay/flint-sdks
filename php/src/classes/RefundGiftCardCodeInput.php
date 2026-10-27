<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $gift_card_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundGiftCardCodeInput extends Model {
    /** @param array{'code': string, 'gift_card_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundGiftCardCodeInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
}
