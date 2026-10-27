<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $option_name
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantSelectedOptionRequestInput extends Model {
    /** @param array{'option_name': string, 'value': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantSelectedOptionRequestInput')); }
    /** Shape $ (Value): string. Name of one of the product's options. Limited to 255 characters (Unicode code points) before trimming surrounding whitespace. Matches case-insensitively after trimming surrounding whitespace. On a variant update, an option that is no longer active is accepted only when the entry matches the variant's current selection for that option; omit it to keep that selection. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When option_name is omitted; use hasOptionName() or valueOrDefault().
     */
    public function getOptionName(): string { return $this->get('option_name'); }
    public function hasOptionName(): bool { return $this->has('option_name'); }
    /** Shape $ (Value): string. Value of the named option. Limited to 255 characters (Unicode code points) before trimming surrounding whitespace. Matches the option's values case-insensitively after trimming surrounding whitespace. A value that is no longer active is accepted only on a variant update, when it matches the variant's current selection for that option. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
