<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subject
 * @property-read list<DeliveryPostalCodeValueInput|array<array-key, mixed>|\stdClass> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPostalCodeConditionInput extends Model {
    /** @param array{'subject'?: string, 'values': list<DeliveryPostalCodeValueInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPostalCodeConditionInput')); }
    /** @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** @return list<DeliveryPostalCodeValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
