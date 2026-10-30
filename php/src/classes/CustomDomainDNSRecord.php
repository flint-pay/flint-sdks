<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $type
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class CustomDomainDNSRecord extends Model {
    /** @param array{'name': string, 'type': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainDNSRecord')); }
    /** DNS name at which to publish this record.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** DNS record type to publish, such as cname or txt. Value enum: "cname", "txt".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** DNS record value to publish at name.
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
