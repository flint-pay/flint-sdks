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
}
