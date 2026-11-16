<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $subject
 * @property-read list<string>|null $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCountryConditionPreviousAttributesInput extends Model {
    /** @param array{'subject'?: string|null, 'values'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCountryConditionPreviousAttributesInput')); }
    /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Value enum: "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. anyOf[1] (Value): Array of string. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. Example: ["US"]. anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): mixed { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
