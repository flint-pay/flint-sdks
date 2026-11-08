<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $gift_card_id
 * Presence-aware response; omitted optional fields return null. */
final class RefundWithGiftCardCodesGiftCardCodesItem extends Model {
    /** @param array{'code': string, 'gift_card_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundWithGiftCardCodesGiftCardCodesItem')); }
    /** Code that redeems the new gift card. Only the create response and a replay of it within 24 hours carry codes, so store it securely.
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** ID of the gift card the code belongs to.
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
}
