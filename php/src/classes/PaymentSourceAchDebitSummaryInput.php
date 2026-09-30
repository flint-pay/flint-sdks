<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_type
 * @property-read string $bank_name
 * @property-read string $last4
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceAchDebitSummaryInput extends Model {
    /** @param array{'account_type'?: string, 'bank_name'?: string, 'last4'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceAchDebitSummaryInput')); }
    /** @return string
     * @throws SdkError When account_type is omitted; use hasAccountType() or valueOrDefault().
     */
    public function getAccountType(): string { return $this->get('account_type'); }
    public function hasAccountType(): bool { return $this->has('account_type'); }
    /** @return string
     * @throws SdkError When bank_name is omitted; use hasBankName() or valueOrDefault().
     */
    public function getBankName(): string { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
}
