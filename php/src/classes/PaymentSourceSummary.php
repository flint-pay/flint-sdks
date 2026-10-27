<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?PaymentSourceAchDebitSummary $ach_debit
 * @property-read ?PaymentSourceCardSummary $card
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSourceSummary extends Model {
    /** @param array{'ach_debit'?: mixed, 'card'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceSummary')); }
    /** Shape $ (Value): {@see PaymentSourceAchDebitSummary}. Display details for a bank account payment source: account type, bank name, and last four digits.
     * @return ?PaymentSourceAchDebitSummary
     */
    public function getAchDebit(): ?PaymentSourceAchDebitSummary { return $this->get('ach_debit'); }
    public function hasAchDebit(): bool { return $this->has('ach_debit'); }
    /** Shape $ (Value): {@see PaymentSourceCardSummary}. Display details for a card payment source: brand, last four digits, and payment method ID.
     * @return ?PaymentSourceCardSummary
     */
    public function getCard(): ?PaymentSourceCardSummary { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** Shape $ (Value): string. Funding-method family. Wallet payment options use card because their underlying funding source is a card. Value enum: "card", "ach_debit", "affirm".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
