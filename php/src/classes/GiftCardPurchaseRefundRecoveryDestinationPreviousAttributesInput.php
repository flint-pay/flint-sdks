<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_load_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $value_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput extends Model {
    /** @param array{'gift_card_id'?: string|null, 'gift_card_load_id'?: string|null, 'value_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput')); }
    /** ID of the gift card that received the value. anyOf[1] (Value): string. ID of the gift card that received the value. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): mixed { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** ID of the load that holds the value. anyOf[1] (Value): string. ID of the load that holds the value. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When gift_card_load_id is omitted; use hasGiftCardLoadId() or valueOrDefault().
     */
    public function getGiftCardLoadId(): mixed { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** The value restored to the card. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): mixed { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
