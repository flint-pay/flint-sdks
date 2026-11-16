<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardProductConfigurationPreviousAttributes|null $configuration
 * @property-read MoneyValuePreviousAttributes|null $consideration_money
 * @property-read MoneyValuePreviousAttributes|null $face_value_money
 * @property-read GiftCardPurchaseRecipientPreviousAttributes|null $recipient
 * @property-read MoneyValuePreviousAttributes|null $reference_price_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseSnapshotPreviousAttributes extends Model {
    /** @param array{'configuration'?: mixed, 'consideration_money'?: mixed, 'face_value_money'?: mixed, 'recipient'?: mixed, 'reference_price_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshotPreviousAttributes')); }
    /** The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. anyOf[1] (Value): {@see GiftCardProductConfigurationPreviousAttributes}. anyOf[2] (Value): null.
     * @return GiftCardProductConfigurationPreviousAttributes|null
     */
    public function getConfiguration(): GiftCardProductConfigurationPreviousAttributes|null { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getConsiderationMoney(): MoneyValuePreviousAttributes|null { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getFaceValueMoney(): MoneyValuePreviousAttributes|null { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Who receives the gift card. `null` when no recipient was set. anyOf[1] (Value): {@see GiftCardPurchaseRecipientPreviousAttributes}. anyOf[2] (Value): null.
     * @return GiftCardPurchaseRecipientPreviousAttributes|null
     */
    public function getRecipient(): GiftCardPurchaseRecipientPreviousAttributes|null { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReferencePriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
