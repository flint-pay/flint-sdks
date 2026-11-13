<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsConfirmParams extends Model {
    /** @param array{'buyer_ip_address'?: string, 'client_action_type'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_return_url'?: string, 'payment_source_token': string, 'save_payment_method'?: bool, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'buyer_ip_address'?: string, 'client_action_type'?: string, 'credential_type': string, 'customer_presence'?: string, 'expected_version'?: int, 'payment_method_id': string, 'payment_return_url'?: string, 'save_payment_method'?: bool, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'buyer_ip_address'?: string, 'client_action_type'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_return_url'?: string, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'buyer_ip_address'?: string, 'client_action_type'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_return_url'?: string, 'save_payment_method'?: bool, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'buyer_ip_address'?: string, 'client_action_type'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_return_url'?: string, 'reader_id': string, 'save_payment_method'?: bool, 'tip'?: ReaderPaymentSourceTipInput|array<array-key, mixed>|\stdClass, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsConfirmParams')); }
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
}
