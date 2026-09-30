<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $option_id
 * @property-read string $option_name
 * @property-read string $option_value_id
 * @property-read string $value
 * Presence-aware response; omitted fields throw when accessed. */
final class SelectedProductOption extends Model {
    /** @param array{'option_id': string, 'option_name': string, 'option_value_id': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SelectedProductOption')); }
    /** @return string
     * @throws SdkError When option_id is omitted; use hasOptionId() or valueOrDefault().
     */
    public function getOptionId(): string { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** @return string
     * @throws SdkError When option_name is omitted; use hasOptionName() or valueOrDefault().
     */
    public function getOptionName(): string { return $this->get('option_name'); }
    public function hasOptionName(): bool { return $this->has('option_name'); }
    /** @return string
     * @throws SdkError When option_value_id is omitted; use hasOptionValueId() or valueOrDefault().
     */
    public function getOptionValueId(): string { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
