<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $field
 * @property-read string|null $format
 * @property-read bool|null $required
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRecipientRequirementPreviousAttributes extends Model {
    /** @param array{'field'?: mixed, 'format'?: mixed, 'required'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRecipientRequirementPreviousAttributes')); }
    /** Recipient field the method asks for. Value enum: "name", "email", "phone". anyOf[1] (Value): string. Recipient field the method asks for. Value enum: "name", "email", "phone". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getField(): string|null { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** Format the value must follow. Value enum: "text", "email", "e164". anyOf[1] (Value): string. Format the value must follow. Value enum: "text", "email", "e164". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFormat(): string|null { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** Whether payment needs this field. anyOf[1] (Value): boolean. Whether payment needs this field. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequired(): bool|null { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
