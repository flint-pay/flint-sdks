<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $face_value_money
 * @property-read GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass $recipient
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRequestInput extends Model {
    /** @param array{'face_value_money'?: array{'amount': string, 'currency': string}|object, 'recipient'?: GiftCardPurchaseRecipientInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRequestInput')); }
    /** Buyer-selected face value within the gift card offer's limits. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. amount (Required): integer string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
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
}
