<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $platform_fee_balance_transaction_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeBalanceTransactionsGetInput extends Model {
    /** @param array{'platform_fee_balance_transaction_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeBalanceTransactionsGetInput')); }
    /** Flint platform fee balance transaction ID. Example: "pfbt_01KEZF7C0079KPKMAHC7C60G1T".
     * @return string
     * @throws SdkError When platform_fee_balance_transaction_id is omitted; use hasPlatformFeeBalanceTransactionId() or valueOrDefault().
     */
    public function getPlatformFeeBalanceTransactionId(): string { return $this->get('platform_fee_balance_transaction_id'); }
    public function hasPlatformFeeBalanceTransactionId(): bool { return $this->has('platform_fee_balance_transaction_id'); }
}
