<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $option_value_id
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkProductOptionValueInput extends Model {
    /** @param array{'option_value_id': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkProductOptionValueInput')); }
    /** Shape $ (Value): string. ID of the product option value.
     * @return string
     * @throws SdkError When option_value_id is omitted; use hasOptionValueId() or valueOrDefault().
     */
    public function getOptionValueId(): string { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Shape $ (Value): string. Product option value shown to the buyer, such as M or Blue.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
