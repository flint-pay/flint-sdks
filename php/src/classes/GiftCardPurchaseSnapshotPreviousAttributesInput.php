<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardProductConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $configuration
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $consideration_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $face_value_money
 * @property-read GiftCardPurchaseRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recipient
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $reference_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseSnapshotPreviousAttributesInput extends Model {
    /** @param array{'configuration'?: GiftCardProductConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'consideration_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'face_value_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'recipient'?: GiftCardPurchaseRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'reference_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshotPreviousAttributesInput')); }
    /** The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. anyOf[1] (Value): {@see GiftCardProductConfigurationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardProductConfigurationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): mixed { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Who receives the gift card. `null` when no recipient was set. anyOf[1] (Value): {@see GiftCardPurchaseRecipientPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardPurchaseRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When reference_price_money is omitted; use hasReferencePriceMoney() or valueOrDefault().
     */
    public function getReferencePriceMoney(): mixed { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
