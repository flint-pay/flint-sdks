<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney $face_value_money
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient $recipient
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchase extends Model {
    /** @param array{'face_value_money'?: object{'amount': string, 'currency': string}, 'recipient'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchase')); }
    /** Buyer-selected face value within the gift card offer's limits. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney
     */
    public function getFaceValueMoney(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient
     */
    public function getRecipient(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
}
