<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CustomerAccountDNSRecord> $dns_records
 * @property-read string $domain_status
 * @property-read string $hostname
 * @property-read string $last_checked_at
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerAccountDomainStatus extends Model {
    /** @param array{'dns_records': list<mixed>, 'domain_status': string, 'hostname': string, 'last_checked_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountDomainStatus')); }
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
    /** @return string
     * @throws SdkError When last_checked_at is omitted; use hasLastCheckedAt() or valueOrDefault().
     */
    public function getLastCheckedAt(): string { return $this->get('last_checked_at'); }
    public function hasLastCheckedAt(): bool { return $this->has('last_checked_at'); }
}
