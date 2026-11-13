<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subject
 * @property-read list<string> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCountryConditionRequestInput extends Model {
    /** @param array{'subject'?: string, 'values': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCountryConditionRequestInput')); }
    /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location".
     * @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. Example: ["US"]. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
