<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $max_length
 * @property-read int $min_length
 * @property-read bool $multiline
 * @property-read bool $required
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicResolvedTextModifierInput extends Model {
    /** @param array{'max_length'?: int, 'min_length'?: int, 'multiline'?: bool, 'required'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedTextModifierInput')); }
    /** @return int
     * @throws SdkError When max_length is omitted; use hasMaxLength() or valueOrDefault().
     */
    public function getMaxLength(): int { return $this->get('max_length'); }
    public function hasMaxLength(): bool { return $this->has('max_length'); }
    /** @return int
     * @throws SdkError When min_length is omitted; use hasMinLength() or valueOrDefault().
     */
    public function getMinLength(): int { return $this->get('min_length'); }
    public function hasMinLength(): bool { return $this->has('min_length'); }
    /** @return bool
     * @throws SdkError When multiline is omitted; use hasMultiline() or valueOrDefault().
     */
    public function getMultiline(): bool { return $this->get('multiline'); }
    public function hasMultiline(): bool { return $this->has('multiline'); }
    /** @return bool
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
