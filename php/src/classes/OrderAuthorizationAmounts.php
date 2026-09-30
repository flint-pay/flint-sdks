<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $authorized_money
 * @property-read MoneyValue $capturable_money
 * @property-read string $expires_at
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderAuthorizationAmounts extends Model {
    /** @param array{'authorized_money': mixed, 'capturable_money': mixed, 'expires_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderAuthorizationAmounts')); }
    /** @return MoneyValue
     * @throws SdkError When authorized_money is omitted; use hasAuthorizedMoney() or valueOrDefault().
     */
    public function getAuthorizedMoney(): MoneyValue { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** @return MoneyValue
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): MoneyValue { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
}
