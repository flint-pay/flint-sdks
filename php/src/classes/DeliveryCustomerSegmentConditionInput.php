<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCustomerSegmentConditionInput extends Model {
    /** @param array{'values': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCustomerSegmentConditionInput')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
