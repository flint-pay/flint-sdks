<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': array{'amount': string, 'currency': string}|object, 'price_mode': string, ...}|object|null $configuration
 * @property-read array{'amount': string, 'currency': string}|object $consideration_money
 * @property-read array{'amount': string, 'currency': string}|object $face_value_money
 * @property-read GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read array{'amount': string, 'currency': string}|object $reference_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseSnapshotInput extends Model {
    /** @param array{'configuration': array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': array{'amount': string, 'currency': string}|object, 'price_mode': string, ...}|object|null, 'consideration_money': array{'amount': string, 'currency': string}|object, 'face_value_money': array{'amount': string, 'currency': string}|object, 'recipient'?: GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass, 'reference_price_money': array{'amount': string, 'currency': string}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseSnapshotInput')); }
    /**  anyOf[1] (Value): {@see GiftCardProductConfigurationInput}. Gift card settings on a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts. anyOf[2] (Value): null.
     * @return array{'custom_amount_bounds'?: GiftCardCustomAmountBoundsInput|array<array-key, mixed>|\stdClass, 'face_value_money': array{'amount': string, 'currency': string}|object, 'price_mode': string, ...}|object|null
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /**  amount (Required): integer string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): array|object { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /**  amount (Required): integer string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When face_value_money is omitted; use hasFaceValueMoney() or valueOrDefault().
     */
    public function getFaceValueMoney(): array|object { return $this->get('face_value_money'); }
    public function hasFaceValueMoney(): bool { return $this->has('face_value_money'); }
    /** The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /**  amount (Required): integer string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When reference_price_money is omitted; use hasReferencePriceMoney() or valueOrDefault().
     */
    public function getReferencePriceMoney(): array|object { return $this->get('reference_price_money'); }
    public function hasReferencePriceMoney(): bool { return $this->has('reference_price_money'); }
}
