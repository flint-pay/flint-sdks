<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $value
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCustomerBooleanConditionInput extends Model {
    /** @param array{'value': bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCustomerBooleanConditionInput')); }
    /** @return bool
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): bool { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
