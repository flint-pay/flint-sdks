<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $merchant_billing_balance_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingBalancesGetInput extends Model {
    /** @param array{'merchant_billing_balance_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalancesGetInput')); }
    /** Flint merchant billing balance ID. Example: "mbbal_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When merchant_billing_balance_id is omitted; use hasMerchantBillingBalanceId() or valueOrDefault().
     */
    public function getMerchantBillingBalanceId(): string { return $this->get('merchant_billing_balance_id'); }
    public function hasMerchantBillingBalanceId(): bool { return $this->has('merchant_billing_balance_id'); }
}
