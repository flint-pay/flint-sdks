<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $option_id
 * @property-read list<PaymentLinkProductOptionValue> $values
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkProductOption extends Model {
    /** @param array{'name': string, 'option_id': string, 'values': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkProductOption')); }
    /** Product option name, such as Size or Color.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the product option.
     * @return string
     */
    public function getOptionId(): string { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Values used by at least one available variant, in product option value position order. [] (Value): {@see PaymentLinkProductOptionValue}. A product option value used by an available payment link variant.
     * @return list<PaymentLinkProductOptionValue>
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
