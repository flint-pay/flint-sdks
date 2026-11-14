<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardProductConfiguration $configuration
 * @property-read MoneyValue $consideration_money
 * @property-read MoneyValue $face_value_money
 * @property-read ?GiftCardPurchaseRecipient $recipient
 * @property-read MoneyValue $reference_price_money
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseSnapshot extends Model {
    /** @param array{'configuration': mixed, 'consideration_money': mixed, 'face_value_money': mixed, 'recipient'?: mixed, 'reference_price_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshot')); }
    /** The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
     * @return GiftCardProductConfiguration
     */
    public function getConfiguration(): GiftCardProductConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getConsiderationMoney(): MoneyValue { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getFaceValueMoney(): MoneyValue { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return ?GiftCardPurchaseRecipient
     */
    public function getRecipient(): ?GiftCardPurchaseRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReferencePriceMoney(): MoneyValue { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
