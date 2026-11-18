<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $activation_limit
 * @property-read bool $email_delivery_enabled
 * @property-read string $key_prefix
 * @property-read string $source
 * @property-read int|null $validity_period_days
 * Presence-aware input; omitted fields throw when accessed. */
final class GeneratedLicenseKeyConfigurationRequestInput extends Model {
    /** @param array{'activation_limit'?: int|null, 'email_delivery_enabled'?: bool, 'key_prefix'?: string, 'source': string, 'validity_period_days'?: int|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GeneratedLicenseKeyConfigurationRequestInput')); }
    /** Maximum active devices per key. Omit or send null for no limit. Format: int32. minimum: 1. maximum: 10000.
     * @return int|null
     * @throws SdkError When activation_limit is omitted; use hasActivationLimit() or valueOrDefault().
     */
    public function getActivationLimit(): int|null { return $this->get('activation_limit'); }
    public function hasActivationLimit(): bool { return $this->has('activation_limit'); }
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true.
     * @return bool
     * @throws SdkError When email_delivery_enabled is omitted; use hasEmailDeliveryEnabled() or valueOrDefault().
     */
    public function getEmailDeliveryEnabled(): bool { return $this->get('email_delivery_enabled'); }
    public function hasEmailDeliveryEnabled(): bool { return $this->has('email_delivery_enabled'); }
    /** Prefix shown before each generated key. Omit for no prefix. minLength: 2. maxLength: 8. pattern: ^[A-Z0-9]{2,8}$.
     * @return string
     * @throws SdkError When key_prefix is omitted; use hasKeyPrefix() or valueOrDefault().
     */
    public function getKeyPrefix(): string { return $this->get('key_prefix'); }
    public function hasKeyPrefix(): bool { return $this->has('key_prefix'); }
    /** Source of the license keys. Value enum: "generated".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Days from issuance until expiry. Omit or send null for no expiry. Format: int32. minimum: 1. maximum: 36500.
     * @return int|null
     * @throws SdkError When validity_period_days is omitted; use hasValidityPeriodDays() or valueOrDefault().
     */
    public function getValidityPeriodDays(): int|null { return $this->get('validity_period_days'); }
    public function hasValidityPeriodDays(): bool { return $this->has('validity_period_days'); }
}
