<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_intent_id
 * @property-read array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'customer_presence'?: string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsConfirmInput extends Model {
    /** @param array{'payment_intent_id': string, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'customer_presence'?: string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsConfirmInput')); }
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** An optional stable random device identifier, independent of the payment intent. Keep it for subsequent payments from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
     * @return string
     * @throws SdkError When Flint-Buyer-Device is omitted; use hasFlintBuyerDevice() or valueOrDefault().
     */
    public function getFlintBuyerDevice(): string { return $this->get('Flint-Buyer-Device'); }
    public function hasFlintBuyerDevice(): bool { return $this->has('Flint-Buyer-Device'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
    /** The request body for: Confirm payment intent.
     * @return array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'customer_presence'?: string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'buyer_ip_address'?: string, 'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
