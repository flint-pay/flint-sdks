<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $activation_limit
 * @property-read bool|null $email_delivery_enabled
 * @property-read string|null $license_key_pool_id
 * @property-read string|null $source
 * @property-read int|null $validity_period_days
 * Presence-aware input; omitted fields throw when accessed. */
final class PoolLicenseKeyConfigurationPreviousAttributesInput extends Model {
    /** @param array{'activation_limit'?: int|null, 'email_delivery_enabled'?: bool|null, 'license_key_pool_id'?: string|null, 'source'?: string|null, 'validity_period_days'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PoolLicenseKeyConfigurationPreviousAttributesInput')); }
    /** Maximum active devices per key. Null when activations are unlimited. anyOf[1] (Value): integer. Maximum active devices per key. Null when activations are unlimited. Format: int32. minimum: 1. maximum: 10000. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When activation_limit is omitted; use hasActivationLimit() or valueOrDefault().
     */
    public function getActivationLimit(): mixed { return $this->get('activation_limit'); }
    public function hasActivationLimit(): bool { return $this->has('activation_limit'); }
    /** Whether Flint emails keys to the buyer. Defaults to true. anyOf[1] (Value): boolean. Whether Flint emails keys to the buyer. Defaults to true. Default: true. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When email_delivery_enabled is omitted; use hasEmailDeliveryEnabled() or valueOrDefault().
     */
    public function getEmailDeliveryEnabled(): mixed { return $this->get('email_delivery_enabled'); }
    public function hasEmailDeliveryEnabled(): bool { return $this->has('email_delivery_enabled'); }
    /** Active pool in this merchant and environment. Required when source is pool. anyOf[1] (Value): string. Active pool in this merchant and environment. Required when source is pool. pattern: ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When license_key_pool_id is omitted; use hasLicenseKeyPoolId() or valueOrDefault().
     */
    public function getLicenseKeyPoolId(): mixed { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** Source of the license keys. Value enum: "pool". anyOf[1] (Value): string. Source of the license keys. Value enum: "pool". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Days from issuance until expiry. Null when keys do not expire. anyOf[1] (Value): integer. Days from issuance until expiry. Null when keys do not expire. Format: int32. minimum: 1. maximum: 36500. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When validity_period_days is omitted; use hasValidityPeriodDays() or valueOrDefault().
     */
    public function getValidityPeriodDays(): mixed { return $this->get('validity_period_days'); }
    public function hasValidityPeriodDays(): bool { return $this->has('validity_period_days'); }
}
