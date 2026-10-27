<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'billing_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string|null, 'phone': string|null, 'receivables'?: CustomerReceivablesInput|array<array-key, mixed>|\stdClass, 'segment'?: string|null, 'shipping_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'status': string, 'tax_exempt'?: bool, 'tax_identity': array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_customer_updated_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'billing_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string|null, 'phone': string|null, 'receivables'?: CustomerReceivablesInput|array<array-key, mixed>|\stdClass, 'segment'?: string|null, 'shipping_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'status': string, 'tax_exempt'?: bool, 'tax_identity': array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_customer_updated_installed_merchantsInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see CustomerInput}. A merchant's customer profile. Shape $.object.billing_address (Optional): {@see AddressInput}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. Shape $.object.created_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.customer_id (Required): string. Shape $.object.default_invoice_payment_term_id (Optional): string. Shape $.object.default_payment_method (Optional): {@see ExpandedPaymentMethodSummaryInput} or null. Shape $.object.default_payment_method.anyOf[1] (Value): {@see ExpandedPaymentMethodSummaryInput}. A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded. Shape $.object.default_payment_method.anyOf[2] (Value): null. Shape $.object.default_payment_method_id (Required): string or null. Shape $.object.email (Required): string or null. Customer email, or null when the customer has none. Unique among the environment's customers. Shape $.object.external_reference_id (Optional): string or null. Caller-owned identifier for this customer in an external system, or null when none. Not returned to customer sessions. minLength: 1. maxLength: 255. Shape $.object.internal_note (Optional): string or null. Internal note about this customer, or null when none. Not returned to customer sessions. Shape $.object.is_merchant_verified (Optional): boolean. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. Shape $.object.merchant_id (Optional): string. Shape $.object.metadata (Optional): Map of string. Shape $.object.metadata.* (Value): string. Shape $.object.name (Required): string or null. Customer name, or null when none. Shape $.object.phone (Required): string or null. Customer phone number, or null when none. Shape $.object.receivables (Optional): {@see CustomerReceivablesInput}. A customer's receivable balances by currency and when they were observed. Shape $.object.segment (Optional): string or null. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Null when none. Not returned to customer sessions. Shape $.object.shipping_address (Optional): {@see AddressInput}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. Shape $.object.status (Required): string.  Value enum: "active", "deletion_processing", "deleted". Shape $.object.tax_exempt (Optional): boolean. Shape $.object.tax_identity (Required): {@see TaxIdentityInput} or null. Shape $.object.tax_identity.anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.object.tax_identity.anyOf[2] (Value): null. Shape $.object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return array{'object': array{'billing_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string|null, 'phone': string|null, 'receivables'?: CustomerReceivablesInput|array<array-key, mixed>|\stdClass, 'segment'?: string|null, 'shipping_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'status': string, 'tax_exempt'?: bool, 'tax_identity': array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "customer.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): Alternative shapes (see declared variants) and object. Shape $.environment_grant_id (Required): string. Shape $.merchant_id (Required): string. Shape $.mode (Required): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "installed_merchants". Shape $.oneOf[1] (Value): object. Shape $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id (Required): string. Shape $.oneOf[1].type (Required): string.  Value enum: "partner_app". Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string. Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.  Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string. Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.  Value enum: "installed_merchants".
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
