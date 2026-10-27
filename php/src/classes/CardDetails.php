<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $brand
 * @property-read int $exp_month
 * @property-read int $exp_year
 * @property-read string $last4
 * @property-read ?string $wallet
 * Presence-aware response; omitted optional fields return null. */
final class CardDetails extends Model {
    /** @param array{'brand': string, 'exp_month': int, 'exp_year': int, 'last4': string, 'wallet'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CardDetails')); }
    /** Shape $ (Value): string.  Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay".
     * @return string
     */
    public function getBrand(): string { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getExpMonth(): int { return $this->get('exp_month'); }
    public function hasExpMonth(): bool { return $this->has('exp_month'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getExpYear(): int { return $this->get('exp_year'); }
    public function hasExpYear(): bool { return $this->has('exp_year'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getWallet(): ?string { return $this->get('wallet'); }
    public function hasWallet(): bool { return $this->has('wallet'); }
}
