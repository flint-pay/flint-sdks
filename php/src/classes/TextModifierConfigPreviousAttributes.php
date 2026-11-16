<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $max_length
 * @property-read int|null $min_length
 * @property-read bool|null $multiline
 * @property-read bool|null $required
 * Presence-aware response; omitted optional fields return null. */
final class TextModifierConfigPreviousAttributes extends Model {
    /** @param array{'max_length'?: mixed, 'min_length'?: mixed, 'multiline'?: mixed, 'required'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TextModifierConfigPreviousAttributes')); }
    /** Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. anyOf[1] (Value): integer. Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxLength(): int|null { return $this->get('max_length'); }
    public function hasMaxLength(): bool { return $this->has('max_length'); }
    /** Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. anyOf[1] (Value): integer. Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinLength(): int|null { return $this->get('min_length'); }
    public function hasMinLength(): bool { return $this->has('min_length'); }
    /** Whether the buyer's text can include line breaks. anyOf[1] (Value): boolean. Whether the buyer's text can include line breaks. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getMultiline(): bool|null { return $this->get('multiline'); }
    public function hasMultiline(): bool { return $this->has('multiline'); }
    /** Whether buyers must enter text for this group. A modifier set's required override takes precedence. anyOf[1] (Value): boolean. Whether buyers must enter text for this group. A modifier set's required override takes precedence. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequired(): bool|null { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
