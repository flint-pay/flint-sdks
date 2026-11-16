<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentSourceAchDebitSummaryPreviousAttributes|null $ach_debit
 * @property-read PaymentSourceCardSummaryPreviousAttributes|null $card
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSourceSummaryPreviousAttributes extends Model {
    /** @param array{'ach_debit'?: mixed, 'card'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceSummaryPreviousAttributes')); }
    /** Bank account details. Present when type is ach_debit. anyOf[1] (Value): {@see PaymentSourceAchDebitSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentSourceAchDebitSummaryPreviousAttributes|null
     */
    public function getAchDebit(): PaymentSourceAchDebitSummaryPreviousAttributes|null { return $this->get('ach_debit'); }
    public function hasAchDebit(): bool { return $this->has('ach_debit'); }
    /** Card details. Present when type is card. anyOf[1] (Value): {@see PaymentSourceCardSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentSourceCardSummaryPreviousAttributes|null
     */
    public function getCard(): PaymentSourceCardSummaryPreviousAttributes|null { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** Funding-method family. Wallet payment options use card because their underlying funding source is a card. Value enum: "card", "ach_debit", "affirm". anyOf[1] (Value): string. Funding-method family. Wallet payment options use card because their underlying funding source is a card. Value enum: "card", "ach_debit", "affirm". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
