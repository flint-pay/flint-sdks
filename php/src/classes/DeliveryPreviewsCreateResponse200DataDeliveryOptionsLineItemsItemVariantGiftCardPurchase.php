<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney $face_value_money
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient $recipient
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase extends Model {
    /** @param array{'face_value_money'?: object{'amount': string, 'currency': string}, 'recipient'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase')); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney}.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney
     */
    public function getFaceValueMoney(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient}. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient
     */
    public function getRecipient(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
}
