<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_load_id
 * @property-read MoneyValuePreviousAttributes|null $value_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes extends Model {
    /** @param array{'gift_card_id'?: mixed, 'gift_card_load_id'?: mixed, 'value_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes')); }
    /** ID of the gift card that received the value. anyOf[1] (Value): string. ID of the gift card that received the value. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** ID of the load that holds the value. anyOf[1] (Value): string. ID of the load that holds the value. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardLoadId(): string|null { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** The value restored to the card. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getValueMoney(): MoneyValuePreviousAttributes|null { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
