<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_ip_address
 * @property-read string $credential_type
 * @property-read string $customer_presence
 * @property-read int $expected_version
 * @property-read string $payment_method_id
 * @property-read bool $save_payment_method
 * Presence-aware input; omitted fields throw when accessed. */
final class ConfirmPaymentIntentRequestPaymentMethodInput extends Model {
    /** @param array{'buyer_ip_address'?: string, 'credential_type': string, 'customer_presence'?: string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConfirmPaymentIntentRequestPaymentMethodInput')); }
    /** The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only. minLength: 1. maxLength: 64.
     * @return string
     * @throws SdkError When buyer_ip_address is omitted; use hasBuyerIpAddress() or valueOrDefault().
     */
    public function getBuyerIpAddress(): string { return $this->get('buyer_ip_address'); }
    public function hasBuyerIpAddress(): bool { return $this->has('buyer_ip_address'); }
    /** Value enum: "payment_method".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Whether the customer is present for this payment. Defaults to present. Send absent to charge a saved card while the customer is away, such as for a no-show fee, damages, or a top-up. Flint then sends the charge to the card network as merchant-initiated, using the card's stored credential, so the bank can't ask the customer to authenticate. absent can be sent only with an API key or partner token, and only for a saved card whose usage is off_session; a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason payment_method_not_reusable. If the bank still requires authentication, the payment fails with status requires_payment_method and last_payment_error.code authentication_required. Ask the customer to pay while present instead of retrying. Default: "present". Value enum: "present", "absent".
     * @return string
     * @throws SdkError When customer_presence is omitted; use hasCustomerPresence() or valueOrDefault().
     */
    public function getCustomerPresence(): string { return $this->get('customer_presence'); }
    public function hasCustomerPresence(): bool { return $this->has('customer_presence'); }
    /** Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Saved Flint payment method ID belonging to the customer making this payment. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential. Default: false. Value enum: false.
     * @return bool
     * @throws SdkError When save_payment_method is omitted; use hasSavePaymentMethod() or valueOrDefault().
     */
    public function getSavePaymentMethod(): bool { return $this->get('save_payment_method'); }
    public function hasSavePaymentMethod(): bool { return $this->has('save_payment_method'); }
}
