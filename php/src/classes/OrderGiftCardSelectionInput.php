<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardMoneyInput|array<array-key, mixed>|\stdClass $available_money
 * @property-read string $gift_card_id
 * @property-read string $last_characters
 * @property-read bool $requires_authorization
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardSelectionInput extends Model {
    /** @param array{'available_money': GiftCardMoneyInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, 'last_characters': string, 'requires_authorization': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardSelectionInput')); }
    /** @return GiftCardMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When last_characters is omitted; use hasLastCharacters() or valueOrDefault().
     */
    public function getLastCharacters(): string { return $this->get('last_characters'); }
    public function hasLastCharacters(): bool { return $this->has('last_characters'); }
    /** @return bool
     * @throws SdkError When requires_authorization is omitted; use hasRequiresAuthorization() or valueOrDefault().
     */
    public function getRequiresAuthorization(): bool { return $this->get('requires_authorization'); }
    public function hasRequiresAuthorization(): bool { return $this->has('requires_authorization'); }
}
