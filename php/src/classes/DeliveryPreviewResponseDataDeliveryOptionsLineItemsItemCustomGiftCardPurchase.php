<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney $face_value_money
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient $recipient
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchase extends Model {
    /** @param array{'face_value_money'?: mixed, 'recipient'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchase')); }
    /** Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney
     */
    public function getFaceValueMoney(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient
     */
    public function getRecipient(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
}
