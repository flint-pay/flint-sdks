<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $field
 * @property-read string|null $format
 * @property-read bool|null $required
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRecipientRequirementPreviousAttributesInput extends Model {
    /** @param array{'field'?: string|null, 'format'?: string|null, 'required'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRecipientRequirementPreviousAttributesInput')); }
    /** Recipient field the method asks for. Value enum: "name", "email", "phone". anyOf[1] (Value): string. Recipient field the method asks for. Value enum: "name", "email", "phone". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When field is omitted; use hasField() or valueOrDefault().
     */
    public function getField(): mixed { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** Format the value must follow. Value enum: "text", "email", "e164". anyOf[1] (Value): string. Format the value must follow. Value enum: "text", "email", "e164". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When format is omitted; use hasFormat() or valueOrDefault().
     */
    public function getFormat(): mixed { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** Whether payment needs this field. anyOf[1] (Value): boolean. Whether payment needs this field. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): mixed { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
