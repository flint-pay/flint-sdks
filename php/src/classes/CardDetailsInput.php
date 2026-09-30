<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $brand
 * @property-read int $exp_month
 * @property-read int $exp_year
 * @property-read string $last4
 * @property-read string $wallet
 * Presence-aware input; omitted fields throw when accessed. */
final class CardDetailsInput extends Model {
    /** @param array{'brand': string, 'exp_month': int, 'exp_year': int, 'last4': string, 'wallet'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CardDetailsInput')); }
    /** @return string
     * @throws SdkError When brand is omitted; use hasBrand() or valueOrDefault().
     */
    public function getBrand(): string { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** @return int
     * @throws SdkError When exp_month is omitted; use hasExpMonth() or valueOrDefault().
     */
    public function getExpMonth(): int { return $this->get('exp_month'); }
    public function hasExpMonth(): bool { return $this->has('exp_month'); }
    /** @return int
     * @throws SdkError When exp_year is omitted; use hasExpYear() or valueOrDefault().
     */
    public function getExpYear(): int { return $this->get('exp_year'); }
    public function hasExpYear(): bool { return $this->has('exp_year'); }
    /** @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** @return string
     * @throws SdkError When wallet is omitted; use hasWallet() or valueOrDefault().
     */
    public function getWallet(): string { return $this->get('wallet'); }
    public function hasWallet(): bool { return $this->has('wallet'); }
}
