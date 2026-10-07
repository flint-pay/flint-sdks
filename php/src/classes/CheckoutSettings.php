<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $custom_domain
 * @property-read list<string> $default_delivery_method_ids
 * @property-read string $default_expires_in_seconds
 * @property-read list<string> $enabled_payment_options
 * @property-read bool $promotion_code_entry_enabled
 * @property-read CheckoutRecoveryEmailSettings $recovery_email
 * @property-read bool $require_billing_address
 * @property-read bool $require_email
 * @property-read bool $require_phone
 * @property-read CheckoutSavedPaymentDetailsSettings $saved_payment_details
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutSettings extends Model {
    /** @param array{'custom_domain'?: string|null, 'default_delivery_method_ids'?: list<string>, 'default_expires_in_seconds'?: string, 'enabled_payment_options'?: list<string>, 'promotion_code_entry_enabled'?: bool, 'recovery_email'?: mixed, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool, 'saved_payment_details'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSettings')); }
    /** @return string|null
     * @throws SdkError When custom_domain is omitted; use hasCustomDomain() or valueOrDefault().
     */
    public function getCustomDomain(): string|null { return $this->get('custom_domain'); }
    public function hasCustomDomain(): bool { return $this->has('custom_domain'); }
    /** @return list<string>
     * @throws SdkError When default_delivery_method_ids is omitted; use hasDefaultDeliveryMethodIds() or valueOrDefault().
     */
    public function getDefaultDeliveryMethodIds(): array { return $this->get('default_delivery_method_ids'); }
    public function hasDefaultDeliveryMethodIds(): bool { return $this->has('default_delivery_method_ids'); }
    /** @return string
     * @throws SdkError When default_expires_in_seconds is omitted; use hasDefaultExpiresInSeconds() or valueOrDefault().
     */
    public function getDefaultExpiresInSeconds(): string { return $this->get('default_expires_in_seconds'); }
    public function hasDefaultExpiresInSeconds(): bool { return $this->has('default_expires_in_seconds'); }
    /** @return list<string>
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** @return bool
     * @throws SdkError When promotion_code_entry_enabled is omitted; use hasPromotionCodeEntryEnabled() or valueOrDefault().
     */
    public function getPromotionCodeEntryEnabled(): bool { return $this->get('promotion_code_entry_enabled'); }
    public function hasPromotionCodeEntryEnabled(): bool { return $this->has('promotion_code_entry_enabled'); }
    /** @return CheckoutRecoveryEmailSettings
     * @throws SdkError When recovery_email is omitted; use hasRecoveryEmail() or valueOrDefault().
     */
    public function getRecoveryEmail(): CheckoutRecoveryEmailSettings { return $this->get('recovery_email'); }
    public function hasRecoveryEmail(): bool { return $this->has('recovery_email'); }
    /** @return bool
     * @throws SdkError When require_billing_address is omitted; use hasRequireBillingAddress() or valueOrDefault().
     */
    public function getRequireBillingAddress(): bool { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** @return bool
     * @throws SdkError When require_email is omitted; use hasRequireEmail() or valueOrDefault().
     */
    public function getRequireEmail(): bool { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** @return bool
     * @throws SdkError When require_phone is omitted; use hasRequirePhone() or valueOrDefault().
     */
    public function getRequirePhone(): bool { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
    /** @return CheckoutSavedPaymentDetailsSettings
     * @throws SdkError When saved_payment_details is omitted; use hasSavedPaymentDetails() or valueOrDefault().
     */
    public function getSavedPaymentDetails(): CheckoutSavedPaymentDetailsSettings { return $this->get('saved_payment_details'); }
    public function hasSavedPaymentDetails(): bool { return $this->has('saved_payment_details'); }
}
