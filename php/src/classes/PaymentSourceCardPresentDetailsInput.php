<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $application_id
 * @property-read string|null $application_name
 * @property-read string|null $authorization_code
 * @property-read string $cardholder_verification
 * @property-read string $read_method
 * @property-read string $wallet
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCardPresentDetailsInput extends Model {
    /** @param array{'application_id': string|null, 'application_name': string|null, 'authorization_code': string|null, 'cardholder_verification': string, 'read_method': string, 'wallet'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCardPresentDetailsInput')); }
    /** EMV application identifier (AID). Null when absent or outside the supported shape. pattern: ^[0-9A-F]{10,32}$. Example: "A0000000031010".
     * @return string|null
     * @throws SdkError When application_id is omitted; use hasApplicationId() or valueOrDefault().
     */
    public function getApplicationId(): string|null { return $this->get('application_id'); }
    public function hasApplicationId(): bool { return $this->has('application_id'); }
    /** Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. pattern: ^[ -~]{1,16}$.
     * @return string|null
     * @throws SdkError When application_name is omitted; use hasApplicationName() or valueOrDefault().
     */
    public function getApplicationName(): string|null { return $this->get('application_name'); }
    public function hasApplicationName(): bool { return $this->has('application_name'); }
    /** Issuer's authorization code. Null when absent or outside the supported shape. pattern: ^[0-9A-Za-z]{1,12}$.
     * @return string|null
     * @throws SdkError When authorization_code is omitted; use hasAuthorizationCode() or valueOrDefault().
     */
    public function getAuthorizationCode(): string|null { return $this->get('authorization_code'); }
    public function hasAuthorizationCode(): bool { return $this->has('authorization_code'); }
    /** How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Value enum: "pin", "signature", "consumer_device", "none", "other".
     * @return string
     * @throws SdkError When cardholder_verification is omitted; use hasCardholderVerification() or valueOrDefault().
     */
    public function getCardholderVerification(): string { return $this->get('cardholder_verification'); }
    public function hasCardholderVerification(): bool { return $this->has('cardholder_verification'); }
    /** How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Value enum: "contactless", "chip", "swipe", "swipe_fallback", "other".
     * @return string
     * @throws SdkError When read_method is omitted; use hasReadMethod() or valueOrDefault().
     */
    public function getReadMethod(): string { return $this->get('read_method'); }
    public function hasReadMethod(): bool { return $this->has('read_method'); }
    /** Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Value enum: "apple_pay", "google_pay", "samsung_pay", "other".
     * @return string
     * @throws SdkError When wallet is omitted; use hasWallet() or valueOrDefault().
     */
    public function getWallet(): string { return $this->get('wallet'); }
    public function hasWallet(): bool { return $this->has('wallet'); }
}
