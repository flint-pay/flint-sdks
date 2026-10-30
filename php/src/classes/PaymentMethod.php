<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CardDetails $card
 * @property-read ?string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read ?string $fingerprint
 * @property-read bool $is_default
 * @property-read ?string $merchant_id
 * @property-read string $payment_method_id
 * @property-read ?string $saved_with
 * @property-read string $status
 * @property-read string $type
 * @property-read ?string $updated_at
 * @property-read string $usage
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethod extends Model {
    /** @param array{'card'?: mixed, 'created_at'?: string, 'customer'?: mixed, 'customer_id': string, 'fingerprint'?: string, 'is_default': bool, 'merchant_id'?: string, 'payment_method_id': string, 'saved_with'?: string, 'status': string, 'type': string, 'updated_at'?: string, 'usage': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethod')); }
    /** Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.
     * @return ?CardDetails
     */
    public function getCard(): ?CardDetails { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in.
     * @return ?string
     */
    public function getFingerprint(): ?string { return $this->get('fingerprint'); }
    public function hasFingerprint(): bool { return $this->has('fingerprint'); }
    /** Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     * @return bool
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** merchant_id
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** payment_method_id
     * @return string
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Value enum: "flint", "store".
     * @return ?string
     */
    public function getSavedWith(): ?string { return $this->get('saved_with'); }
    public function hasSavedWith(): bool { return $this->has('saved_with'); }
    /** Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Value enum: "pending", "active", "expired", "archived", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Value enum: "card".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Value enum: "on_session", "off_session".
     * @return string
     */
    public function getUsage(): string { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
}
