<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $application_id
 * @property-read string|null $application_name
 * @property-read string|null $authorization_code
 * @property-read string|null $cardholder_verification
 * @property-read string|null $read_method
 * @property-read string|null $wallet
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSourceCardPresentDetailsPreviousAttributes extends Model {
    /** @param array{'application_id'?: mixed, 'application_name'?: mixed, 'authorization_code'?: mixed, 'cardholder_verification'?: mixed, 'read_method'?: mixed, 'wallet'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCardPresentDetailsPreviousAttributes')); }
    /** EMV application identifier (AID). Null when absent or outside the supported shape. anyOf[1] (Value): string. EMV application identifier (AID). Null when absent or outside the supported shape. pattern: ^[0-9A-F]{10,32}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApplicationId(): string|null { return $this->get('application_id'); }
    public function hasApplicationId(): bool { return $this->has('application_id'); }
    /** Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. anyOf[1] (Value): string. Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. pattern: ^[ -~]{1,16}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApplicationName(): string|null { return $this->get('application_name'); }
    public function hasApplicationName(): bool { return $this->has('application_name'); }
    /** Issuer's authorization code. Null when absent or outside the supported shape. anyOf[1] (Value): string. Issuer's authorization code. Null when absent or outside the supported shape. pattern: ^[0-9A-Za-z]{1,12}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAuthorizationCode(): string|null { return $this->get('authorization_code'); }
    public function hasAuthorizationCode(): bool { return $this->has('authorization_code'); }
    /** How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Value enum: "pin", "signature", "consumer_device", "none", "other". anyOf[1] (Value): string. How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Value enum: "pin", "signature", "consumer_device", "none", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCardholderVerification(): string|null { return $this->get('cardholder_verification'); }
    public function hasCardholderVerification(): bool { return $this->has('cardholder_verification'); }
    /** How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Value enum: "contactless", "chip", "swipe", "swipe_fallback", "other". anyOf[1] (Value): string. How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Value enum: "contactless", "chip", "swipe", "swipe_fallback", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReadMethod(): string|null { return $this->get('read_method'); }
    public function hasReadMethod(): bool { return $this->has('read_method'); }
    /** Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Value enum: "apple_pay", "google_pay", "samsung_pay", "other". anyOf[1] (Value): string. Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Value enum: "apple_pay", "google_pay", "samsung_pay", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWallet(): string|null { return $this->get('wallet'); }
    public function hasWallet(): bool { return $this->has('wallet'); }
}
