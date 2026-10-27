<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardProductConfiguration|null $configuration
 * @property-read GiftCardPurchaseSnapshotConsiderationMoney $consideration_money
 * @property-read GiftCardPurchaseSnapshotFaceValueMoney $face_value_money
 * @property-read ?GiftCardPurchaseRecipient $recipient
 * @property-read GiftCardPurchaseSnapshotReferencePriceMoney $reference_price_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseSnapshot extends Model {
    /** @param array{'configuration': mixed, 'consideration_money': object{'amount': string, 'currency': string}, 'face_value_money': object{'amount': string, 'currency': string}, 'recipient'?: mixed, 'reference_price_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshot')); }
    /** Shape $ (Value): {@see GiftCardProductConfiguration} or null. Shape $.anyOf[1] (Value): {@see GiftCardProductConfiguration}. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. Shape $.anyOf[2] (Value): null.
     * @return GiftCardProductConfiguration|null
     */
    public function getConfiguration(): GiftCardProductConfiguration|null { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): {@see GiftCardPurchaseSnapshotConsiderationMoney}.
     * @return GiftCardPurchaseSnapshotConsiderationMoney
     */
    public function getConsiderationMoney(): GiftCardPurchaseSnapshotConsiderationMoney { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** Shape $ (Value): {@see GiftCardPurchaseSnapshotFaceValueMoney}.
     * @return GiftCardPurchaseSnapshotFaceValueMoney
     */
    public function getFaceValueMoney(): GiftCardPurchaseSnapshotFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Shape $ (Value): {@see GiftCardPurchaseRecipient}. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return ?GiftCardPurchaseRecipient
     */
    public function getRecipient(): ?GiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): {@see GiftCardPurchaseSnapshotReferencePriceMoney}.
     * @return GiftCardPurchaseSnapshotReferencePriceMoney
     */
    public function getReferencePriceMoney(): GiftCardPurchaseSnapshotReferencePriceMoney { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
