<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active_payment_attempt_count
 * @property-read string $created_at
 * @property-read string $custom_domain_id
 * @property-read list<CustomDomainDNSRecord> $dns_records
 * @property-read string $hostname
 * @property-read string|null $last_checked_at
 * @property-read string|null $payment_method_domain_id
 * @property-read string|null $redirect_expires_at
 * @property-read string $status
 * @property-read string|null $status_reason
 * @property-read string $type
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class CustomDomainArchivedEventDataObject extends Model {
    /** @param array{'active_payment_attempt_count': int|null, 'created_at': string, 'custom_domain_id': string, 'dns_records': list<mixed>, 'hostname': string, 'last_checked_at': string|null, 'payment_method_domain_id': string|null, 'redirect_expires_at': string|null, 'status': string, 'status_reason': string|null, 'type': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainArchivedEventDataObject')); }
    /** Payment attempts in progress on this checkout hostname; null for customer account domains. Format: int64.
     * @return int|null
     */
    public function getActivePaymentAttemptCount(): int|null { return $this->get('active_payment_attempt_count'); }
    public function hasActivePaymentAttemptCount(): bool { return $this->has('active_payment_attempt_count'); }
    /** When this domain resource was created, in RFC3339 format. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Flint custom domain ID.
     * @return string
     */
    public function getCustomDomainId(): string { return $this->get('custom_domain_id'); }
    public function hasCustomDomainId(): bool { return $this->has('custom_domain_id'); }
    /** DNS records to add for setup or verification. For an archived hostname, records that can be deleted. [] (Value): {@see CustomDomainDNSRecord}. A DNS record for configuring or verifying a custom hostname.
     * @return list<CustomDomainDNSRecord>
     */
    public function getDnsRecords(): array { return $this->get('dns_records'); }
    public function hasDnsRecords(): bool { return $this->has('dns_records'); }
    /** Configured hostname, normalized to lowercase without a trailing dot.
     * @return string
     */
    public function getHostname(): string { return $this->get('hostname'); }
    public function hasHostname(): bool { return $this->has('hostname'); }
    /** When the domain was last checked, in RFC3339 format; null when no check time is available. Format: date-time.
     * @return string|null
     */
    public function getLastCheckedAt(): string|null { return $this->get('last_checked_at'); }
    public function hasLastCheckedAt(): bool { return $this->has('last_checked_at'); }
    /** Payment method domain associated with this hostname, or null when none is reported.
     * @return string|null
     */
    public function getPaymentMethodDomainId(): string|null { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. Format: date-time.
     * @return string|null
     */
    public function getRedirectExpiresAt(): string|null { return $this->get('redirect_expires_at'); }
    public function hasRedirectExpiresAt(): bool { return $this->has('redirect_expires_at'); }
    /** Current setup and availability state of the hostname. Archived domains retain their resource identity. Value enum: "provisioning", "active", "attention_required", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Machine-readable detail for the current status, or null when no reason is reported. Value enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other", null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum: "checkout", "customer_account".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When this domain resource was last updated, in RFC3339 format. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
