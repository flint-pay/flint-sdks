<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $field
 * @property-read ?string $format
 * @property-read bool $required
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionRecipientRequirementsItem extends Model {
    /** @param array{'field': string, 'format'?: string, 'required': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueUnavailableOptionRecipientRequirementsItem')); }
    /** Value enum: "name", "email", "phone".
     * @return string
     */
    public function getField(): string { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** Value enum: "text", "email", "e164".
     * @return ?string
     */
    public function getFormat(): ?string { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** required
     * @return bool
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
