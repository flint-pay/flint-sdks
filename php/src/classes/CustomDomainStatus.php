<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $active_payment_attempt_count
 * @property-read list<CustomerAccountDNSRecord> $dns_records
 * @property-read string $domain_status
 * @property-read string $hostname
 * @property-read string|null $last_checked_at
 * @property-read string|null $payment_method_domain_id
 * @property-read string|null $redirect_expires_at
 * @property-read string|null $status_reason
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomDomainStatus extends Model {
    /** @param array{'active_payment_attempt_count'?: string|null, 'dns_records': list<mixed>, 'domain_status': string, 'hostname': string, 'last_checked_at'?: string|null, 'payment_method_domain_id'?: string|null, 'redirect_expires_at'?: string|null, 'status_reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainStatus')); }
    /** @return string|null
     * @throws SdkError When active_payment_attempt_count is omitted; use hasActivePaymentAttemptCount() or valueOrDefault().
     */
    public function getActivePaymentAttemptCount(): string|null { return $this->get('active_payment_attempt_count'); }
    public function hasActivePaymentAttemptCount(): bool { return $this->has('active_payment_attempt_count'); }
    /** @return list<CustomerAccountDNSRecord>
     * @throws SdkError When dns_records is omitted; use hasDnsRecords() or valueOrDefault().
     */
    public function getDnsRecords(): array { return $this->get('dns_records'); }
    public function hasDnsRecords(): bool { return $this->has('dns_records'); }
    /** @return string
     * @throws SdkError When domain_status is omitted; use hasDomainStatus() or valueOrDefault().
     */
    public function getDomainStatus(): string { return $this->get('domain_status'); }
    public function hasDomainStatus(): bool { return $this->has('domain_status'); }
    /** @return string
     * @throws SdkError When hostname is omitted; use hasHostname() or valueOrDefault().
     */
    public function getHostname(): string { return $this->get('hostname'); }
    public function hasHostname(): bool { return $this->has('hostname'); }
    /** @return string|null
     * @throws SdkError When last_checked_at is omitted; use hasLastCheckedAt() or valueOrDefault().
     */
    public function getLastCheckedAt(): string|null { return $this->get('last_checked_at'); }
    public function hasLastCheckedAt(): bool { return $this->has('last_checked_at'); }
    /** @return string|null
     * @throws SdkError When payment_method_domain_id is omitted; use hasPaymentMethodDomainId() or valueOrDefault().
     */
    public function getPaymentMethodDomainId(): string|null { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
    /** @return string|null
     * @throws SdkError When redirect_expires_at is omitted; use hasRedirectExpiresAt() or valueOrDefault().
     */
    public function getRedirectExpiresAt(): string|null { return $this->get('redirect_expires_at'); }
    public function hasRedirectExpiresAt(): bool { return $this->has('redirect_expires_at'); }
    /** @return string|null
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
}
