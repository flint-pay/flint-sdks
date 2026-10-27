<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $default_delivery_method_ids
 * @property-read ?string $default_expires_in_seconds
 * @property-read ?list<string> $enabled_payment_options
 * @property-read ?bool $promotion_codes_enabled
 * @property-read ?CheckoutRecoveryEmailSettings $recovery_email
 * @property-read ?bool $require_billing_address
 * @property-read ?bool $require_email
 * @property-read ?bool $require_phone
 * @property-read ?CheckoutSavedPaymentDetailsSettings $saved_payment_details
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSettings extends Model {
    /** @param array{'default_delivery_method_ids'?: list<string>, 'default_expires_in_seconds'?: string, 'enabled_payment_options'?: list<string>, 'promotion_codes_enabled'?: bool, 'recovery_email'?: mixed, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool, 'saved_payment_details'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSettings')); }
    /** Shape $ (Value): Array of string. Default delivery methods for checkout creation requests that omit delivery_method_ids, payment links without delivery_method_ids, and invoice checkouts. The default applies only when the order has items to deliver; otherwise no methods are assigned. Methods and their dependencies must be active when saved. Send [] to clear this default; null is rejected. Each checkout pins its assigned methods when created. Shape $[] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getDefaultDeliveryMethodIds(): ?array { return $this->get('default_delivery_method_ids'); }
    public function hasDefaultDeliveryMethodIds(): bool { return $this->has('default_delivery_method_ids'); }
    /** Shape $ (Value): integer string. Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead use the fixed deadline of the active invoice public-link generation. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     * @return ?string
     */
    public function getDefaultExpiresInSeconds(): ?string { return $this->get('default_expires_in_seconds'); }
    public function hasDefaultExpiresInSeconds(): bool { return $this->has('default_expires_in_seconds'); }
    /** Shape $ (Value): Array of string.  [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string. minLength: 1. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return ?list<string>
     */
    public function getEnabledPaymentOptions(): ?array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Shape $ (Value): boolean. Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or headless; hosted checkout shows or hides code entry to match. Object-level promotion_config.codes_enabled can override it for a session or payment link.
     * @return ?bool
     */
    public function getPromotionCodesEnabled(): ?bool { return $this->get('promotion_codes_enabled'); }
    public function hasPromotionCodesEnabled(): bool { return $this->has('promotion_codes_enabled'); }
    /** Shape $ (Value): {@see CheckoutRecoveryEmailSettings}. Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder email: one email to a buyer who entered an email address in hosted checkout and left without paying. Merchant scope only. Effective settings default it to off with a 3600 second delay. Checkout reminder email settings. On update, an omitted field keeps its value.
     * @return ?CheckoutRecoveryEmailSettings
     */
    public function getRecoveryEmail(): ?CheckoutRecoveryEmailSettings { return $this->get('recovery_email'); }
    public function hasRecoveryEmail(): bool { return $this->has('recovery_email'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getRequireBillingAddress(): ?bool { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getRequireEmail(): ?bool { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getRequirePhone(): ?bool { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
    /** Shape $ (Value): {@see CheckoutSavedPaymentDetailsSettings}. Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted checkout offers buyers the option to save the card they type for faster checkout at this merchant. Merchant scope only. Effective settings default it to on. Saved payment details settings for hosted checkout. On update, an omitted field keeps its value.
     * @return ?CheckoutSavedPaymentDetailsSettings
     */
    public function getSavedPaymentDetails(): ?CheckoutSavedPaymentDetailsSettings { return $this->get('saved_payment_details'); }
    public function hasSavedPaymentDetails(): bool { return $this->has('saved_payment_details'); }
}
