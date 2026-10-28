<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseFaceValueMoney $face_value_money
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseRecipient $recipient
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchase extends Model {
    /** @param array{'face_value_money'?: object{'amount': string, 'currency': string}, 'recipient'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchase')); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseFaceValueMoney}.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseFaceValueMoney
     */
    public function getFaceValueMoney(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseRecipient}. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseRecipient
     */
    public function getRecipient(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemBundleGiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
}
