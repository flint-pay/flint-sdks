<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'price_mode': string, ...}|object|null $configuration
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $consideration_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $face_value_money
 * @property-read GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reference_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseSnapshotInput extends Model {
    /** @param array{'configuration': array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'price_mode': string, ...}|object|null, 'consideration_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'face_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'recipient'?: GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass, 'reference_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshotInput')); }
    /** The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. anyOf[1] (Value): {@see GiftCardProductConfigurationInput}. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. anyOf[2] (Value): null.
     * @return array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'price_mode': string, ...}|object|null
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): mixed { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reference_price_money is omitted; use hasReferencePriceMoney() or valueOrDefault().
     */
    public function getReferencePriceMoney(): mixed { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
