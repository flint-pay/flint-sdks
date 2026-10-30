<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteIssueAllocationRequestInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteIssueAllocationRequestInput')); }
    /** Credit to apply. Omit to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. Either way, the allocation must leave the order's unpaid tip outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
}
