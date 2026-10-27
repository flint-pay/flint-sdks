<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $alias
 * @property-read string|null $archived_at
 * @property-read string $created_at
 * @property-read ResourceReference|null $created_by
 * @property-read string $item_count
 * @property-read string $item_type
 * @property-read string $name
 * @property-read string $origin
 * @property-read string $risk_list_id
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class RiskList extends Model {
    /** @param array{'alias': string, 'archived_at': string|null, 'created_at': string, 'created_by': mixed, 'item_count': string, 'item_type': string, 'name': string, 'origin': string, 'risk_list_id': string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskList')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getAlias(): string { return $this->get('alias'); }
    public function hasAlias(): bool { return $this->has('alias'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getArchivedAt(): string|null { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ResourceReference} or null. The credential that created this list. Null when Flint created it, as for Flint's default lists. The reference may name an API key in the other mode. Shape $.anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getCreatedBy(): ResourceReference|null { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getItemCount(): string { return $this->get('item_count'); }
    public function hasItemCount(): bool { return $this->has('item_count'); }
    /** Shape $ (Value): string. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     * @return string
     */
    public function getItemType(): string { return $this->get('item_type'); }
    public function hasItemType(): bool { return $this->has('item_type'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Whether Flint manages the list or the merchant created it. Value enum: "system_default", "merchant".
     * @return string
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRiskListId(): string { return $this->get('risk_list_id'); }
    public function hasRiskListId(): bool { return $this->has('risk_list_id'); }
    /** Shape $ (Value): string.  Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Version of persisted list configuration and item-count changes. External observations do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
