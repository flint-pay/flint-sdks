<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $available_money
 * @property-read string $gift_card_id
 * @property-read string $last4
 * @property-read bool $requires_authorization
 * Presence-aware response; omitted optional fields return null. */
final class OrderGiftCardSelection extends Model {
    /** @param array{'available_money': mixed, 'gift_card_id': string, 'last4': string, 'requires_authorization': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardSelection')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAvailableMoney(): MoneyValue { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string. Last four characters of the card's current code.
     * @return string
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getRequiresAuthorization(): bool { return $this->get('requires_authorization'); }
    public function hasRequiresAuthorization(): bool { return $this->has('requires_authorization'); }
}
