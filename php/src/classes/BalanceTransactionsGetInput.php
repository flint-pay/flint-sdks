<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $balance_transaction_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionsGetInput extends Model {
    /** @param array{'balance_transaction_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When balance_transaction_id is omitted; use hasBalanceTransactionId() or valueOrDefault().
     */
    public function getBalanceTransactionId(): string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "order". Shape $[] (Value): string.  Value enum: "order".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
