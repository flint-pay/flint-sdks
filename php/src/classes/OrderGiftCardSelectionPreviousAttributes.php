<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $available_money
 * @property-read string|null $gift_card_id
 * @property-read string|null $last4
 * @property-read bool|null $requires_authorization
 * Presence-aware response; omitted optional fields return null. */
final class OrderGiftCardSelectionPreviousAttributes extends Model {
    /** @param array{'available_money'?: mixed, 'gift_card_id'?: mixed, 'last4'?: mixed, 'requires_authorization'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardSelectionPreviousAttributes')); }
    /** The card's available balance. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAvailableMoney(): MoneyValuePreviousAttributes|null { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** ID of the gift card selected for the order. anyOf[1] (Value): string. ID of the gift card selected for the order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Last four characters of the card's current code. anyOf[1] (Value): string. Last four characters of the card's current code. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Whether the card's current code must be applied again before the order can use it. anyOf[1] (Value): boolean. Whether the card's current code must be applied again before the order can use it. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequiresAuthorization(): bool|null { return $this->get('requires_authorization'); }
    public function hasRequiresAuthorization(): bool { return $this->has('requires_authorization'); }
}
