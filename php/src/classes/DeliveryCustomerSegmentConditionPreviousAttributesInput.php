<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCustomerSegmentConditionPreviousAttributesInput extends Model {
    /** @param array{'values'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCustomerSegmentConditionPreviousAttributesInput')); }
    /** Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. anyOf[1] (Value): Array of string. Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): mixed { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
