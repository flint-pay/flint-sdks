<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardProductConfiguration $configuration
 * @property-read GiftCardPurchaseSnapshotConsiderationMoney $consideration_money
 * @property-read GiftCardPurchaseSnapshotFaceValueMoney $face_value_money
 * @property-read GiftCardPurchaseRecipient $recipient
 * @property-read GiftCardPurchaseSnapshotReferencePriceMoney $reference_price_money
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardPurchaseSnapshot extends Model {
    /** @param array{'configuration'?: mixed, 'consideration_money': object{'amount': string, 'currency': string}, 'face_value_money': object{'amount': string, 'currency': string}, 'recipient'?: mixed, 'reference_price_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshot')); }
    /** @return GiftCardProductConfiguration
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): GiftCardProductConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** @return GiftCardPurchaseSnapshotConsiderationMoney
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): GiftCardPurchaseSnapshotConsiderationMoney { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** @return GiftCardPurchaseSnapshotFaceValueMoney
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): GiftCardPurchaseSnapshotFaceValueMoney { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** @return GiftCardPurchaseRecipient
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): GiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return GiftCardPurchaseSnapshotReferencePriceMoney
     * @throws SdkError When reference_price_money is omitted; use hasReferencePriceMoney() or valueOrDefault().
     */
    public function getReferencePriceMoney(): GiftCardPurchaseSnapshotReferencePriceMoney { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
