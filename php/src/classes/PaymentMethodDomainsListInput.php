<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $domain_name
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodDomainsListInput extends Model {
    /** @param array{'domain_name'?: string, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomainsListInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 253.
     * @return string
     * @throws SdkError When domain_name is omitted; use hasDomainName() or valueOrDefault().
     */
    public function getDomainName(): string { return $this->get('domain_name'); }
    public function hasDomainName(): bool { return $this->has('domain_name'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
}
