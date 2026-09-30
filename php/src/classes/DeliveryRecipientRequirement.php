<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $field
 * @property-read string $format
 * @property-read bool $required
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryRecipientRequirement extends Model {
    /** @param array{'field': string, 'format'?: string, 'required': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRecipientRequirement')); }
    /** @return string
     * @throws SdkError When field is omitted; use hasField() or valueOrDefault().
     */
    public function getField(): string { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** @return string
     * @throws SdkError When format is omitted; use hasFormat() or valueOrDefault().
     */
    public function getFormat(): string { return $this->get('format'); }
    public function hasFormat(): bool { return $this->has('format'); }
    /** @return bool
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
