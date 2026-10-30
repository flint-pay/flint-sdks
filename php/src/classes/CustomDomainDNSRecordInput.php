<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $type
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomDomainDNSRecordInput extends Model {
    /** @param array{'name': string, 'type': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainDNSRecordInput')); }
    /** DNS name at which to publish this record.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** DNS record type to publish, such as cname or txt. Value enum: "cname", "txt".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** DNS record value to publish at name.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
