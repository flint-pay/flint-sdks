<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $early_termination_fee_money
 * @property-read bool $is_within_contract_term
 * @property-read int $remaining_months
 * Presence-aware input; omitted fields throw when accessed. */
final class ContractInfoInput extends Model {
    /** @param array{'early_termination_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'is_within_contract_term': bool, 'remaining_months'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ContractInfoInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): mixed { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** @return bool
     * @throws SdkError When is_within_contract_term is omitted; use hasIsWithinContractTerm() or valueOrDefault().
     */
    public function getIsWithinContractTerm(): bool { return $this->get('is_within_contract_term'); }
    public function hasIsWithinContractTerm(): bool { return $this->has('is_within_contract_term'); }
    /** @return int
     * @throws SdkError When remaining_months is omitted; use hasRemainingMonths() or valueOrDefault().
     */
    public function getRemainingMonths(): int { return $this->get('remaining_months'); }
    public function hasRemainingMonths(): bool { return $this->has('remaining_months'); }
}
