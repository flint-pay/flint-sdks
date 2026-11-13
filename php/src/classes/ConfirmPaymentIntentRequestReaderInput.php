<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_ip_address
 * @property-read string $client_action_type
 * @property-read string $credential_type
 * @property-read int $expected_version
 * @property-read string $payment_return_url
 * @property-read string $reader_id
 * @property-read bool $save_payment_method
 * @property-read ReaderPaymentSourceTipInput|array<array-key, mixed>|\stdClass $tip
 * Presence-aware input; omitted fields throw when accessed. */
final class ConfirmPaymentIntentRequestReaderInput extends Model {
    /** @param array{'buyer_ip_address'?: string, 'client_action_type'?: string, 'credential_type': string, 'expected_version'?: int, 'payment_return_url'?: string, 'reader_id': string, 'save_payment_method'?: bool, 'tip'?: ReaderPaymentSourceTipInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConfirmPaymentIntentRequestReaderInput')); }
    /** Not accepted for a payment presented on a reader. minLength: 1. maxLength: 64.
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
    /** Selects payment collection on a reader. Value enum: "reader".
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
    /** Active reader in this merchant and environment. Requires payments.readers.write in addition to this operation’s scopes. minLength: 1. pattern: ^rdr_[0-9A-HJKMNP-TV-Z]{26}$. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * @return string
     * @throws SdkError When reader_id is omitted; use hasReaderId() or valueOrDefault().
     */
    public function getReaderId(): string { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
    /** Send false or omit it. A card read on a reader isn't saved. Default: false.
     * @return bool
     * @throws SdkError When save_payment_method is omitted; use hasSavePaymentMethod() or valueOrDefault().
     */
    public function getSavePaymentMethod(): bool { return $this->get('save_payment_method'); }
    public function hasSavePaymentMethod(): bool { return $this->has('save_payment_method'); }
    /** Optional tip collection on a supported smart reader. Tip collection settings for a payment presented on a smart reader.
     * @return ReaderPaymentSourceTipInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
}
