<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $option_id
 * @property-read string|null $option_name
 * @property-read string|null $option_value_id
 * @property-read string|null $value
 * Presence-aware response; omitted optional fields return null. */
final class SelectedProductOptionPreviousAttributes extends Model {
    /** @param array{'option_id'?: mixed, 'option_name'?: mixed, 'option_value_id'?: mixed, 'value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SelectedProductOptionPreviousAttributes')); }
    /** Identifier of the selected product option. anyOf[1] (Value): string. Identifier of the selected product option. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOptionId(): string|null { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Name of the selected product option. anyOf[1] (Value): string. Name of the selected product option. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOptionName(): string|null { return $this->get('option_name'); }
    public function hasOptionName(): bool { return $this->has('option_name'); }
    /** Identifier of the selected option value. anyOf[1] (Value): string. Identifier of the selected option value. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOptionValueId(): string|null { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Selected value of the product option. anyOf[1] (Value): string. Selected value of the product option. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValue(): string|null { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
