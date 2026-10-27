<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CardDetails $card
 * @property-read ?string $created_at
 * @property-read string $customer_id
 * @property-read bool $is_default
 * @property-read ?string $merchant_id
 * @property-read string $payment_method_id
 * @property-read ?string $saved_with
 * @property-read string $status
 * @property-read string $type
 * @property-read ?string $updated_at
 * @property-read string $usage
 * @property-read ?StripeClientSetup $client_setup
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPaymentMethodWithSetup extends Model {
    /** @param array{'card'?: mixed, 'created_at'?: string, 'customer_id': string, 'is_default': bool, 'merchant_id'?: string, 'payment_method_id': string, 'saved_with'?: string, 'status': string, 'type': string, 'updated_at'?: string, 'usage': string, 'client_setup'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentMethodWithSetup')); }
    /** Shape $ (Value): {@see CardDetails}. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.
     * @return ?CardDetails
     */
    public function getCard(): ?CardDetails { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): boolean. Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * @return bool
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): string. Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * @return ?string
     */
    public function getSavedWith(): ?string { return $this->get('saved_with'); }
    public function hasSavedWith(): bool { return $this->has('saved_with'); }
    /** Shape $ (Value): string.  Value enum: "pending", "active", "expired", "archived", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "card".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string. When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Value enum: "on_session", "off_session".
     * @return string
     */
    public function getUsage(): string { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
    /** Shape $ (Value): {@see StripeClientSetup}. Present when the buyer must complete processor setup before using this payment method. Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret.
     * @return ?StripeClientSetup
     */
    public function getClientSetup(): ?StripeClientSetup { return $this->get('client_setup'); }
    public function hasClientSetup(): bool { return $this->has('client_setup'); }
}
