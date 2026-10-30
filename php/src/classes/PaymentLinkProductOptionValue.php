<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $option_value_id
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkProductOptionValue extends Model {
    /** @param array{'option_value_id': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkProductOptionValue')); }
    /** ID of the product option value.
     * @return string
     */
    public function getOptionValueId(): string { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Product option value shown to the buyer, such as M or Blue.
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
