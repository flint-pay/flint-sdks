<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read array{'amount': string, 'currency': string}|object $consideration_money
 * @property-read array{'amount': string, 'currency': string}|object $face_value_money
 * @property-read GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read array{'amount': string, 'currency': string}|object $reference_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseSnapshotInput extends Model {
    /** @param array{'configuration'?: GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass, 'consideration_money': array{'amount': string, 'currency': string}|object, 'face_value_money': array{'amount': string, 'currency': string}|object, 'recipient'?: GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass, 'reference_price_money': array{'amount': string, 'currency': string}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshotInput')); }
    /** @return GiftCardProductConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): array|object { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): array|object { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** @return GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When reference_price_money is omitted; use hasReferencePriceMoney() or valueOrDefault().
     */
    public function getReferencePriceMoney(): array|object { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
