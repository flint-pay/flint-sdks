<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentSourceAchDebitSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $ach_debit
 * @property-read PaymentSourceCardSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $card
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceSummaryPreviousAttributesInput extends Model {
    /** @param array{'ach_debit'?: PaymentSourceAchDebitSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'card'?: PaymentSourceCardSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceSummaryPreviousAttributesInput')); }
    /** Bank account details. Present when type is ach_debit. anyOf[1] (Value): {@see PaymentSourceAchDebitSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PaymentSourceAchDebitSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When ach_debit is omitted; use hasAchDebit() or valueOrDefault().
     */
    public function getAchDebit(): mixed { return $this->get('ach_debit'); }
    public function hasAchDebit(): bool { return $this->has('ach_debit'); }
    /** Card details. Present when type is card. anyOf[1] (Value): {@see PaymentSourceCardSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PaymentSourceCardSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When card is omitted; use hasCard() or valueOrDefault().
     */
    public function getCard(): mixed { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** Funding-method family. Wallet payment options use card because their underlying funding source is a card. Value enum: "card", "ach_debit", "affirm". anyOf[1] (Value): string. Funding-method family. Wallet payment options use card because their underlying funding source is a card. Value enum: "card", "ach_debit", "affirm". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
