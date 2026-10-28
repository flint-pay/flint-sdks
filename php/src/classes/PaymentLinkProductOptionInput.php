<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $option_id
 * @property-read list<PaymentLinkProductOptionValueInput|array<array-key, mixed>|\stdClass> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkProductOptionInput extends Model {
    /** @param array{'name': string, 'option_id': string, 'values': list<PaymentLinkProductOptionValueInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkProductOptionInput')); }
    /** Shape $ (Value): string. Product option name, such as Size or Color.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. ID of the product option.
     * @return string
     * @throws SdkError When option_id is omitted; use hasOptionId() or valueOrDefault().
     */
    public function getOptionId(): string { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Shape $ (Value): Array of {@see PaymentLinkProductOptionValueInput}. Values used by at least one available variant, in product option value position order. Shape $[] (Value): {@see PaymentLinkProductOptionValueInput}. A product option value used by an available payment link variant.
     * @return list<PaymentLinkProductOptionValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
