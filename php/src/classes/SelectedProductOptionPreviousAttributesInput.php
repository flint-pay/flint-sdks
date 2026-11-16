<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $option_id
 * @property-read string|null $option_name
 * @property-read string|null $option_value_id
 * @property-read string|null $value
 * Presence-aware input; omitted fields throw when accessed. */
final class SelectedProductOptionPreviousAttributesInput extends Model {
    /** @param array{'option_id'?: string|null, 'option_name'?: string|null, 'option_value_id'?: string|null, 'value'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SelectedProductOptionPreviousAttributesInput')); }
    /** Identifier of the selected product option. anyOf[1] (Value): string. Identifier of the selected product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When option_id is omitted; use hasOptionId() or valueOrDefault().
     */
    public function getOptionId(): mixed { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Name of the selected product option. anyOf[1] (Value): string. Name of the selected product option. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When option_name is omitted; use hasOptionName() or valueOrDefault().
     */
    public function getOptionName(): mixed { return $this->get('option_name'); }
    public function hasOptionName(): bool { return $this->has('option_name'); }
    /** Identifier of the selected option value. anyOf[1] (Value): string. Identifier of the selected option value. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When option_value_id is omitted; use hasOptionValueId() or valueOrDefault().
     */
    public function getOptionValueId(): mixed { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Selected value of the product option. anyOf[1] (Value): string. Selected value of the product option. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
