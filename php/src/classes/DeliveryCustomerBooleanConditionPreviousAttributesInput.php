<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $value
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCustomerBooleanConditionPreviousAttributesInput extends Model {
    /** @param array{'value'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCustomerBooleanConditionPreviousAttributesInput')); }
    /** The value the fact must have. `true` matches when the fact holds, `false` when it does not. anyOf[1] (Value): boolean. The value the fact must have. `true` matches when the fact holds, `false` when it does not. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
