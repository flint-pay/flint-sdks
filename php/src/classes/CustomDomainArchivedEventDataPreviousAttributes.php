<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active_payment_attempt_count
 * @property-read string|null $created_at
 * @property-read string|null $custom_domain_id
 * @property-read list<CustomDomainDNSRecordPreviousAttributes>|null $dns_records
 * @property-read string|null $hostname
 * @property-read string|null $last_checked_at
 * @property-read string|null $payment_method_domain_id
 * @property-read string|null $redirect_expires_at
 * @property-read string|null $status
 * @property-read string|null $status_reason
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class CustomDomainArchivedEventDataPreviousAttributes extends Model {
    /** @param array{'active_payment_attempt_count'?: mixed, 'created_at'?: mixed, 'custom_domain_id'?: mixed, 'dns_records'?: mixed, 'hostname'?: mixed, 'last_checked_at'?: mixed, 'payment_method_domain_id'?: mixed, 'redirect_expires_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainArchivedEventDataPreviousAttributes')); }
    /** Payment attempts in progress on this checkout hostname. `null` when `type` is `customer_account`. anyOf[1] (Value): integer. Payment attempts in progress on this checkout hostname. `null` when `type` is `customer_account`. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getActivePaymentAttemptCount(): int|null { return $this->get('active_payment_attempt_count'); }
    public function hasActivePaymentAttemptCount(): bool { return $this->has('active_payment_attempt_count'); }
    /** When this domain resource was created, in RFC3339 format. anyOf[1] (Value): string. When this domain resource was created, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Flint custom domain ID. anyOf[1] (Value): string. Flint custom domain ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomDomainId(): string|null { return $this->get('custom_domain_id'); }
    public function hasCustomDomainId(): bool { return $this->has('custom_domain_id'); }
    /** DNS records to add for setup or verification. For an archived hostname, records that can be deleted. anyOf[1] (Value): Array of {@see CustomDomainDNSRecordPreviousAttributes}. DNS records to add for setup or verification. For an archived hostname, records that can be deleted. anyOf[1][] (Value): {@see CustomDomainDNSRecordPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CustomDomainDNSRecordPreviousAttributes>|null
     */
    public function getDnsRecords(): array|null { return $this->get('dns_records'); }
    public function hasDnsRecords(): bool { return $this->has('dns_records'); }
    /** Configured hostname, normalized to lowercase without a trailing dot. anyOf[1] (Value): string. Configured hostname, normalized to lowercase without a trailing dot. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getHostname(): string|null { return $this->get('hostname'); }
    public function hasHostname(): bool { return $this->has('hostname'); }
    /** When the domain was last checked, in RFC3339 format; `null` when no check time is available. anyOf[1] (Value): string. When the domain was last checked, in RFC3339 format; `null` when no check time is available. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLastCheckedAt(): string|null { return $this->get('last_checked_at'); }
    public function hasLastCheckedAt(): bool { return $this->has('last_checked_at'); }
    /** Payment method domain associated with this hostname. `null` when none is reported. anyOf[1] (Value): string. Payment method domain associated with this hostname. `null` when none is reported. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodDomainId(): string|null { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. `null` when the hostname isn't archived. anyOf[1] (Value): string. End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. `null` when the hostname isn't archived. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRedirectExpiresAt(): string|null { return $this->get('redirect_expires_at'); }
    public function hasRedirectExpiresAt(): bool { return $this->has('redirect_expires_at'); }
    /** Current setup and availability state of the hostname. Archived domains retain their resource identity. Value enum: "provisioning", "active", "attention_required", "inactive", "archived". anyOf[1] (Value): string. Current setup and availability state of the hostname. Archived domains retain their resource identity. Value enum: "provisioning", "active", "attention_required", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Machine-readable detail for the current status. `null` when no reason is reported, including for active and archived domains. Value enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other", null. anyOf[1] (Value): string. Machine-readable detail for the current status. `null` when no reason is reported, including for active and archived domains. Value enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum: "checkout", "customer_account". anyOf[1] (Value): string. Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum: "checkout", "customer_account". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When this domain resource was last updated, in RFC3339 format. anyOf[1] (Value): string. When this domain resource was last updated, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
