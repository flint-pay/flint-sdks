<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $account_type
 * @property-read ?string $bank_name
 * @property-read ?string $last4
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSourceAchDebitSummary extends Model {
    /** @param array{'account_type'?: string, 'bank_name'?: string, 'last4'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceAchDebitSummary')); }
    /** Shape $ (Value): string.  Value enum: "checking", "savings", "other".
     * @return ?string
     */
    public function getAccountType(): ?string { return $this->get('account_type'); }
    public function hasAccountType(): bool { return $this->has('account_type'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBankName(): ?string { return $this->get('bank_name'); }
    public function hasBankName(): bool { return $this->has('bank_name'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getLast4(): ?string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
}
