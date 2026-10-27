<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $authorized_money
 * @property-read MoneyValue $capturable_money
 * @property-read ?string $expires_at
 * Presence-aware response; omitted optional fields return null. */
final class OrderAuthorizationAmounts extends Model {
    /** @param array{'authorized_money': mixed, 'capturable_money': mixed, 'expires_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderAuthorizationAmounts')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAuthorizedMoney(): MoneyValue { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getCapturableMoney(): MoneyValue { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
}
