<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CardDetailsInput|array<array-key, mixed>|\stdClass $card
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read bool $is_default
 * @property-read string $merchant_id
 * @property-read string $payment_method_id
 * @property-read string $saved_with
 * @property-read string $status
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $usage
 * @property-read StripeClientSetupInput|array<array-key, mixed>|\stdClass $client_setup
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerPaymentMethodWithSetupInput extends Model {
    /** @param array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'is_default': bool, 'merchant_id'?: string, 'payment_method_id': string, 'saved_with'?: string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'usage': string, 'client_setup'?: StripeClientSetupInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentMethodWithSetupInput')); }
    /** Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.
     * @return CardDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When card is omitted; use hasCard() or valueOrDefault().
     */
    public function getCard(): mixed { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** customer_id
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Whether this is the customer's default payment method, the one BuyerCustomer.default_payment_method_id names. Change it with default_payment_method_id on PATCH /v1/me.
     * @return bool
     * @throws SdkError When is_default is omitted; use hasIsDefault() or valueOrDefault().
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** payment_method_id
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * @return string
     * @throws SdkError When saved_with is omitted; use hasSavedWith() or valueOrDefault().
     */
    public function getSavedWith(): string { return $this->get('saved_with'); }
    public function hasSavedWith(): bool { return $this->has('saved_with'); }
    /** Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Value enum: "pending", "active", "expired", "archived", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Value enum: "card".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Value enum: "on_session", "off_session".
     * @return string
     * @throws SdkError When usage is omitted; use hasUsage() or valueOrDefault().
     */
    public function getUsage(): string { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
    /** Present when the buyer must complete processor setup before using this payment method. Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret.
     * @return StripeClientSetupInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_setup is omitted; use hasClientSetup() or valueOrDefault().
     */
    public function getClientSetup(): mixed { return $this->get('client_setup'); }
    public function hasClientSetup(): bool { return $this->has('client_setup'); }
}
