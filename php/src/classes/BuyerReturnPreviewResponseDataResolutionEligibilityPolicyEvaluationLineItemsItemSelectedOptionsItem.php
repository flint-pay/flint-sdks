<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $option_id
 * @property-read string $option_name
 * @property-read string $option_value_id
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem extends Model {
    /** @param array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataResolutionEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem')); }
    /** Identifier of the selected product option.
     * @return string
     */
    public function getOptionId(): string { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Name of the selected product option.
     * @return string
     */
    public function getOptionName(): string { return $this->get('option_name'); }
    public function hasOptionName(): bool { return $this->has('option_name'); }
    /** Identifier of the selected option value.
     * @return string
     */
    public function getOptionValueId(): string { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Selected value of the product option.
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
