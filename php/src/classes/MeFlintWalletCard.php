<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $brand
 * @property-read int $exp_month
 * @property-read int $exp_year
 * @property-read string $id
 * @property-read string $last4
 * @property-read string|null $store_payment_method_id
 * Presence-aware response; omitted fields throw when accessed. */
final class MeFlintWalletCard extends Model {
    /** @param array{'brand': string, 'exp_month': int, 'exp_year': int, 'id': string, 'last4': string, 'store_payment_method_id': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeFlintWalletCard')); }
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
     * @throws SdkError When id is omitted; use hasId() or valueOrDefault().
     */
    public function getId(): string { return $this->get('id'); }
    public function hasId(): bool { return $this->has('id'); }
    /** @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** @return string|null
     * @throws SdkError When store_payment_method_id is omitted; use hasStorePaymentMethodId() or valueOrDefault().
     */
    public function getStorePaymentMethodId(): string|null { return $this->get('store_payment_method_id'); }
    public function hasStorePaymentMethodId(): bool { return $this->has('store_payment_method_id'); }
}
