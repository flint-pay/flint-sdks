<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'assigned_bundle_count': string, 'assigned_product_count': string, 'category_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'targeting_reference_count': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_category_created_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'assigned_bundle_count': string, 'assigned_product_count': string, 'category_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'targeting_reference_count': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_category_created_installed_merchantsInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see CategoryInput}. A catalog grouping used to organize items. Shape $.object.assigned_bundle_count (Required): integer string. Number of bundles currently assigned to the category. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.assigned_product_count (Required): integer string. Number of products currently assigned to the category. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.category_id (Required): string. Stable identifier of the category. Shape $.object.created_at (Required): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Shape $.object.description (Optional): string. Description of the category. Shape $.object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Shape $.object.handle (Required): string. Immutable handle used to assign this category to products and bundles. Shape $.object.merchant_id (Optional): string. Identifier of the merchant that owns this resource. Shape $.object.metadata (Optional): Map of string. Caller-owned metadata stored on this resource. Shape $.object.metadata.* (Value): string. Shape $.object.name (Required): string. Category name shown to buyers. Shape $.object.status (Required): string. Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted". Shape $.object.targeting_reference_count (Required): integer string. Number of live targeting references that prevent deleting the category. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.updated_at (Required): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. Shape $.object.version (Required): integer string. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return array{'object': array{'assigned_bundle_count': string, 'assigned_product_count': string, 'category_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'targeting_reference_count': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "category.created".
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
