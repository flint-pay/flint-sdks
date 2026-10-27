<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $available_money
 * @property-read string $gift_card_id
 * @property-read string $last4
 * @property-read bool $requires_authorization
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardSelectionInput extends Model {
    /** @param array{'available_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, 'last4': string, 'requires_authorization': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardSelectionInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string. Last four characters of the card's current code.
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When requires_authorization is omitted; use hasRequiresAuthorization() or valueOrDefault().
     */
    public function getRequiresAuthorization(): bool { return $this->get('requires_authorization'); }
    public function hasRequiresAuthorization(): bool { return $this->has('requires_authorization'); }
}
