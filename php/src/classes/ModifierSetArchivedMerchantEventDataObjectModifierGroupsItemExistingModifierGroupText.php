<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $max_length
 * @property-read ?int $min_length
 * @property-read bool $multiline
 * @property-read bool $required
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetArchivedMerchantEventDataObjectModifierGroupsItemExistingModifierGroupText extends Model {
    /** @param array{'max_length'?: int, 'min_length'?: int, 'multiline': bool, 'required': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetArchivedMerchantEventDataObjectModifierGroupsItemExistingModifierGroupText')); }
    /** Maximum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: int32.
     * @return ?int
     */
    public function getMaxLength(): ?int { return $this->get('max_length'); }
    public function hasMaxLength(): bool { return $this->has('max_length'); }
    /** Minimum length of the buyer's text in UTF-8 bytes after trimming surrounding whitespace. Format: int32.
     * @return ?int
     */
    public function getMinLength(): ?int { return $this->get('min_length'); }
    public function hasMinLength(): bool { return $this->has('min_length'); }
    /** Whether the buyer's text can include line breaks.
     * @return bool
     */
    public function getMultiline(): bool { return $this->get('multiline'); }
    public function hasMultiline(): bool { return $this->has('multiline'); }
    /** Whether buyers must enter text for this group. A modifier set's required override takes precedence.
     * @return bool
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
