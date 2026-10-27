<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $active_payment_attempt_count
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $custom_domain_id
 * @property-read list<CustomDomainDNSRecordInput|array<array-key, mixed>|\stdClass> $dns_records
 * @property-read string $hostname
 * @property-read string|\DateTimeInterface|null $last_checked_at
 * @property-read string|null $payment_method_domain_id
 * @property-read string|\DateTimeInterface|null $redirect_expires_at
 * @property-read string $status
 * @property-read string|null $status_reason
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomDomainInput extends Model {
    /** @param array{'active_payment_attempt_count': string|null, 'created_at': string|\DateTimeInterface, 'custom_domain_id': string, 'dns_records': list<CustomDomainDNSRecordInput|array<array-key, mixed>|\stdClass>, 'hostname': string, 'last_checked_at': string|\DateTimeInterface|null, 'payment_method_domain_id': string|null, 'redirect_expires_at': string|\DateTimeInterface|null, 'status': string, 'status_reason': string|null, 'type': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainInput')); }
    /** Shape $ (Value): integer string or null. Payment attempts in progress on this checkout hostname; null for customer account domains. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string|null
     * @throws SdkError When active_payment_attempt_count is omitted; use hasActivePaymentAttemptCount() or valueOrDefault().
     */
    public function getActivePaymentAttemptCount(): string|null { return $this->get('active_payment_attempt_count'); }
    public function hasActivePaymentAttemptCount(): bool { return $this->has('active_payment_attempt_count'); }
    /** Shape $ (Value): string. When this domain resource was created, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Flint custom domain ID.
     * @return string
     * @throws SdkError When custom_domain_id is omitted; use hasCustomDomainId() or valueOrDefault().
     */
    public function getCustomDomainId(): string { return $this->get('custom_domain_id'); }
    public function hasCustomDomainId(): bool { return $this->has('custom_domain_id'); }
    /** Shape $ (Value): Array of {@see CustomDomainDNSRecordInput}. DNS records to add for setup or verification. For an archived hostname, records that can be deleted. Shape $[] (Value): {@see CustomDomainDNSRecordInput}. A DNS record for configuring or verifying a custom hostname.
     * @return list<CustomDomainDNSRecordInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When dns_records is omitted; use hasDnsRecords() or valueOrDefault().
     */
    public function getDnsRecords(): array { return $this->get('dns_records'); }
    public function hasDnsRecords(): bool { return $this->has('dns_records'); }
    /** Shape $ (Value): string. Configured hostname, normalized to lowercase without a trailing dot.
     * @return string
     * @throws SdkError When hostname is omitted; use hasHostname() or valueOrDefault().
     */
    public function getHostname(): string { return $this->get('hostname'); }
    public function hasHostname(): bool { return $this->has('hostname'); }
    /** Shape $ (Value): string or null. When the domain was last checked, in RFC3339 format; null when no check time is available. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When last_checked_at is omitted; use hasLastCheckedAt() or valueOrDefault().
     */
    public function getLastCheckedAt(): string|\DateTimeInterface|null { return $this->get('last_checked_at'); }
    public function hasLastCheckedAt(): bool { return $this->has('last_checked_at'); }
    /** Shape $ (Value): string or null. Payment method domain associated with this hostname, or null when none is reported.
     * @return string|null
     * @throws SdkError When payment_method_domain_id is omitted; use hasPaymentMethodDomainId() or valueOrDefault().
     */
    public function getPaymentMethodDomainId(): string|null { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** Shape $ (Value): string or null. End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When redirect_expires_at is omitted; use hasRedirectExpiresAt() or valueOrDefault().
     */
    public function getRedirectExpiresAt(): string|\DateTimeInterface|null { return $this->get('redirect_expires_at'); }
    public function hasRedirectExpiresAt(): bool { return $this->has('redirect_expires_at'); }
    /** Shape $ (Value): string. Current setup and availability state of the hostname. Archived domains retain their resource identity. Value enum: "provisioning", "active", "attention_required", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. Machine-readable detail for the current status, or null when no reason is reported. Value enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other", null.
     * @return string|null
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Shape $ (Value): string. Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum: "checkout", "customer_account".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. When this domain resource was last updated, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
