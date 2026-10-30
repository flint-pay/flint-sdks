<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $default_delivery_method_ids
 * @property-read int $default_expires_in_seconds
 * @property-read list<string> $enabled_payment_options
 * @property-read bool $promotion_codes_enabled
 * @property-read CheckoutRecoveryEmailSettingsRequestInput|array<array-key, mixed>|\stdClass $recovery_email
 * @property-read bool $require_billing_address
 * @property-read bool $require_email
 * @property-read bool $require_phone
 * @property-read CheckoutSavedPaymentDetailsSettingsRequestInput|array<array-key, mixed>|\stdClass $saved_payment_details
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSettingsRequestInput extends Model {
    /** @param array{'default_delivery_method_ids'?: list<string>, 'default_expires_in_seconds'?: int, 'enabled_payment_options'?: list<string>, 'promotion_codes_enabled'?: bool, 'recovery_email'?: CheckoutRecoveryEmailSettingsRequestInput|array<array-key, mixed>|\stdClass, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool, 'saved_payment_details'?: CheckoutSavedPaymentDetailsSettingsRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSettingsRequestInput')); }
    /** Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When default_delivery_method_ids is omitted; use hasDefaultDeliveryMethodIds() or valueOrDefault().
     */
    public function getDefaultDeliveryMethodIds(): array { return $this->get('default_delivery_method_ids'); }
    public function hasDefaultDeliveryMethodIds(): bool { return $this->has('default_delivery_method_ids'); }
    /** Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Format: int64. minimum: 60. maximum: 86400.
     * @return int
     * @throws SdkError When default_expires_in_seconds is omitted; use hasDefaultExpiresInSeconds() or valueOrDefault().
     */
    public function getDefaultExpiresInSeconds(): int { return $this->get('default_expires_in_seconds'); }
    public function hasDefaultExpiresInSeconds(): bool { return $this->has('default_expires_in_seconds'); }
    /** Payment options checkout offers by default. Adding ach_debit in merchant settings requests ACH Direct Debit for your payment account; Flint refuses it before the account is set up, for a payment account outside the US, and in location or device settings. Each option shows only when it is available for the payment account and order. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. minLength: 1. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; hosted checkout shows or hides code entry to match. Object-level promotion_config.codes_enabled can override it for a session or payment link.
     * @return bool
     * @throws SdkError When promotion_codes_enabled is omitted; use hasPromotionCodesEnabled() or valueOrDefault().
     */
    public function getPromotionCodesEnabled(): bool { return $this->get('promotion_codes_enabled'); }
    public function hasPromotionCodesEnabled(): bool { return $this->has('promotion_codes_enabled'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value.
     * @return CheckoutRecoveryEmailSettingsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recovery_email is omitted; use hasRecoveryEmail() or valueOrDefault().
     */
    public function getRecoveryEmail(): mixed { return $this->get('recovery_email'); }
    public function hasRecoveryEmail(): bool { return $this->has('recovery_email'); }
    /** require_billing_address
     * @return bool
     * @throws SdkError When require_billing_address is omitted; use hasRequireBillingAddress() or valueOrDefault().
     */
    public function getRequireBillingAddress(): bool { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** require_email
     * @return bool
     * @throws SdkError When require_email is omitted; use hasRequireEmail() or valueOrDefault().
     */
    public function getRequireEmail(): bool { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** require_phone
     * @return bool
     * @throws SdkError When require_phone is omitted; use hasRequirePhone() or valueOrDefault().
     */
    public function getRequirePhone(): bool { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value.
     * @return CheckoutSavedPaymentDetailsSettingsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When saved_payment_details is omitted; use hasSavedPaymentDetails() or valueOrDefault().
     */
    public function getSavedPaymentDetails(): mixed { return $this->get('saved_payment_details'); }
    public function hasSavedPaymentDetails(): bool { return $this->has('saved_payment_details'); }
}
