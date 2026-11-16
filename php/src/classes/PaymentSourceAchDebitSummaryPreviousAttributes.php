<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_type
 * @property-read string|null $bank_name
 * @property-read string|null $last4
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSourceAchDebitSummaryPreviousAttributes extends Model {
    /** @param array{'account_type'?: mixed, 'bank_name'?: mixed, 'last4'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceAchDebitSummaryPreviousAttributes')); }
    /** The kind of bank account. Value enum: "checking", "savings", "other". anyOf[1] (Value): string. The kind of bank account. Value enum: "checking", "savings", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAccountType(): string|null { return $this->get('account_type'); }
    public function hasAccountType(): bool { return $this->has('account_type'); }
    /** Name of the bank that holds the account. anyOf[1] (Value): string. Name of the bank that holds the account. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBankName(): string|null { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** Last four digits of the bank account number. anyOf[1] (Value): string. Last four digits of the bank account number. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
}
