<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $expected_version
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class AdjustGiftCardBalanceRequestInput extends Model {
    /** @param array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'reason': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AdjustGiftCardBalanceRequestInput')); }
    /** Shape $ (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): integer string. The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string.  Value enum: "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity", "balance_accidentally_increased".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
