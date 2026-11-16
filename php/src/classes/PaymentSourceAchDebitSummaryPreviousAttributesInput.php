<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $account_type
 * @property-read string|null $bank_name
 * @property-read string|null $last4
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceAchDebitSummaryPreviousAttributesInput extends Model {
    /** @param array{'account_type'?: string|null, 'bank_name'?: string|null, 'last4'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceAchDebitSummaryPreviousAttributesInput')); }
    /** The kind of bank account. Value enum: "checking", "savings", "other". anyOf[1] (Value): string. The kind of bank account. Value enum: "checking", "savings", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When account_type is omitted; use hasAccountType() or valueOrDefault().
     */
    public function getAccountType(): mixed { return $this->get('account_type'); }
    public function hasAccountType(): bool { return $this->has('account_type'); }
    /** Name of the bank that holds the account. anyOf[1] (Value): string. Name of the bank that holds the account. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bank_name is omitted; use hasBankName() or valueOrDefault().
     */
    public function getBankName(): mixed { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** Last four digits of the bank account number. anyOf[1] (Value): string. Last four digits of the bank account number. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
}
