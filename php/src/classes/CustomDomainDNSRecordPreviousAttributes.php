<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $name
 * @property-read string|null $type
 * @property-read string|null $value
 * Presence-aware response; omitted optional fields return null. */
final class CustomDomainDNSRecordPreviousAttributes extends Model {
    /** @param array{'name'?: mixed, 'type'?: mixed, 'value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainDNSRecordPreviousAttributes')); }
    /** DNS name at which to publish this record. anyOf[1] (Value): string. DNS name at which to publish this record. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** DNS record type to publish, such as cname or txt. Value enum: "cname", "txt". anyOf[1] (Value): string. DNS record type to publish, such as cname or txt. Value enum: "cname", "txt". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** DNS record value to publish at name. anyOf[1] (Value): string. DNS record value to publish at name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValue(): string|null { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
