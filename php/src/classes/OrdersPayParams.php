<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class OrdersPayParams extends Model {
    /** @param array{'accepted_gift_card_allocation'?: OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'buyer_ip_address'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'payment_source'?: PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'accepted_gift_card_allocation'?: OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'payment_intents': list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'setup_payment_source': PaymentSourceCredentialTokenInput|array<array-key, mixed>|\stdClass, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt_id': string, 'Flint-Buyer-Device'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersPayParams')); }
    /** A stable random device identifier, independent of the order or checkout session. Required for checkout-session gift card purchases. Keep it for subsequent purchases from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
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
