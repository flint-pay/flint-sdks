<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_ip_address
 * @property-read string $client_action_type
 * @property-read string $credential_type
 * @property-read int $expected_version
 * @property-read string $payment_return_url
 * @property-read bool $save_payment_method
 * Presence-aware input; omitted fields throw when accessed. */
final class ConfirmPaymentIntentRequestAttachedInput extends Model {
    /** @param array{'buyer_ip_address'?: string, 'client_action_type'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_return_url'?: string, 'save_payment_method'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConfirmPaymentIntentRequestAttachedInput')); }
    /** The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only. minLength: 1. maxLength: 64.
     * @return string
     * @throws SdkError When buyer_ip_address is omitted; use hasBuyerIpAddress() or valueOrDefault().
     */
    public function getBuyerIpAddress(): string { return $this->get('buyer_ip_address'); }
    public function hasBuyerIpAddress(): bool { return $this->has('buyer_ip_address'); }
    /** How to complete the authentication step. Flint's API returns a Stripe client secret only for client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. The Stripe secret can also confirm the payment with another card, so use it only with handleNextAction. Reader credentials do not support url; omit client_action_type or send stripe for reader payments. Defaults to stripe for a new confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value enum: "url", "stripe".
     * @return string
     * @throws SdkError When client_action_type is omitted; use hasClientActionType() or valueOrDefault().
     */
    public function getClientActionType(): string { return $this->get('client_action_type'); }
    public function hasClientActionType(): bool { return $this->has('client_action_type'); }
    /** Value enum: "attached".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When payment_return_url is omitted; use hasPaymentReturnUrl() or valueOrDefault().
     */
    public function getPaymentReturnUrl(): string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential. Default: false. Value enum: false.
     * @return bool
     * @throws SdkError When save_payment_method is omitted; use hasSavePaymentMethod() or valueOrDefault().
     */
    public function getSavePaymentMethod(): bool { return $this->get('save_payment_method'); }
    public function hasSavePaymentMethod(): bool { return $this->has('save_payment_method'); }
}
