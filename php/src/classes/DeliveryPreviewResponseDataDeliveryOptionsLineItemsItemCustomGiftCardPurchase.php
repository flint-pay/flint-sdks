<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney $face_value_money
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient $recipient
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchase extends Model {
    /** @param array{'face_value_money'?: object{'amount': string, 'currency': string}, 'recipient'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchase')); }
    /** Buyer-selected face value within the gift card offer's limits. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney
     */
    public function getFaceValueMoney(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient
     */
    public function getRecipient(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
}
