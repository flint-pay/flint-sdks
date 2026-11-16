<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $available_money
 * @property-read string|null $gift_card_id
 * @property-read string|null $last4
 * @property-read bool|null $requires_authorization
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardSelectionPreviousAttributesInput extends Model {
    /** @param array{'available_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'gift_card_id'?: string|null, 'last4'?: string|null, 'requires_authorization'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardSelectionPreviousAttributesInput')); }
    /** The card's available balance. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** ID of the gift card selected for the order. anyOf[1] (Value): string. ID of the gift card selected for the order. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): mixed { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Last four characters of the card's current code. anyOf[1] (Value): string. Last four characters of the card's current code. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Whether the card's current code must be applied again before the order can use it. anyOf[1] (Value): boolean. Whether the card's current code must be applied again before the order can use it. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When requires_authorization is omitted; use hasRequiresAuthorization() or valueOrDefault().
     */
    public function getRequiresAuthorization(): mixed { return $this->get('requires_authorization'); }
    public function hasRequiresAuthorization(): bool { return $this->has('requires_authorization'); }
}
