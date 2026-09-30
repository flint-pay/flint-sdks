<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $dns_record_type
 * @property-read string $name
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccountDNSRecordInput extends Model {
    /** @param array{'dns_record_type': string, 'name': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountDNSRecordInput')); }
    /** @return string
     * @throws SdkError When dns_record_type is omitted; use hasDnsRecordType() or valueOrDefault().
     */
    public function getDnsRecordType(): string { return $this->get('dns_record_type'); }
    public function hasDnsRecordType(): bool { return $this->has('dns_record_type'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
