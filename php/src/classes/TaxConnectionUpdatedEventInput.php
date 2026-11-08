<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'coverage': list<TaxCountryCoverageInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'disclosure': TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass, 'legal_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'legal_business_name'?: string, 'seller_attestation': array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'tax_connection_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'version'?: int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionUpdatedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'coverage': list<TaxCountryCoverageInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'disclosure': TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass, 'legal_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'legal_business_name'?: string, 'seller_attestation': array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'tax_connection_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'version'?: int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionUpdatedEventInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.coverage (Required): Array of {@see TaxCountryCoverageInput}. Current automatic-tax coverage, independent of the seller's registrations. Sorted by country. Unsupported countries or categories require external tax. object.coverage[] (Value): {@see TaxCountryCoverageInput}. A country and the categories automatic tax can calculate there. object.created_at (Optional): string. When the connection record was created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.disclosure (Required): {@see TaxConnectionDisclosureInput}. Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee. object.legal_address (Required): {@see AddressInput} or null. Legal business address used as the tax origin. In live mode, comes from processor-verified onboarding details before connect and the tax account snapshot once connected. In sandboxes, comes from the merchant profile. `null` when no legal address is available or the sandbox profile address is incomplete. object.legal_address.anyOf[1] (Value): {@see AddressInput}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. object.legal_address.anyOf[2] (Value): null. object.legal_business_name (Optional): string. Legal business name verified by the payment processor, which can differ from the merchant-entered Merchant.business_name. Before connect, comes from verified onboarding details; once connected, comes from the tax account snapshot. In sandboxes, comes from the merchant profile. Omitted when no name is available. object.seller_attestation (Required): {@see TaxConnectionSellerAttestationInput} or null. The seller's recorded agreement to the disclosure. `null` when no connect has recorded one. object.seller_attestation.anyOf[1] (Value): {@see TaxConnectionSellerAttestationInput}. The disclosure the seller agreed to and when Flint recorded that agreement. object.seller_attestation.anyOf[2] (Value): null. object.status (Required): string. Whether automatic tax is connected and can calculate tax. Value enum: "not_connected", "provisioning", "active", "attention_required", "disabled". object.status_reason (Required): string or null. Machine-readable detail for `not_connected` or `attention_required`. `null` when no reason applies. Unknown reasons normalize to `other`. Value enum: "not_offered", "onboarding_required", "tax_category_required", "registration_required", "temporarily_unavailable", "setup_incomplete", "registration_rejected", "business_details_changed", "support_required", "disconnected", "other", null. object.supported_actions (Required): Array of string. Lists connect when setup can complete and disconnect when automatic tax can be turned off, based on the connection state for every credential. An empty array means neither action is available. Performing either action requires settings.write. [] enum: "connect", "disconnect". object.supported_actions[] (Value): string.  Value enum: "connect", "disconnect". object.tax_connection_id (Optional): string. Flint tax connection ID. Present once the first registration or connection creates a record. Example: "tcn_01KEZF7C007Y42FMVNHV3P27QN". object.updated_at (Optional): string. When the connection record's public state last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Optional): integer. Current resource version. Send as expected_version to reject a write based on an older version. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'coverage': list<TaxCountryCoverageInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'disclosure': TaxConnectionDisclosureInput|array<array-key, mixed>|\stdClass, 'legal_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'legal_business_name'?: string, 'seller_attestation': array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object|null, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'tax_connection_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'version'?: int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "tax_connection.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The originating request. `null` when the event has no originating request ID. id (Required): string. Request ID of the request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
