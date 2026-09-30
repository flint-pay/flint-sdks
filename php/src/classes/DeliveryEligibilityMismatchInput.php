<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $condition
 * @property-read string $expression_path
 * @property-read string $field
 * @property-read bool $negated
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryEligibilityMismatchInput extends Model {
    /** @param array{'condition': string, 'expression_path': string, 'field'?: string, 'negated'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEligibilityMismatchInput')); }
    /** @return string
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** @return string
     * @throws SdkError When expression_path is omitted; use hasExpressionPath() or valueOrDefault().
     */
    public function getExpressionPath(): string { return $this->get('expression_path'); }
    public function hasExpressionPath(): bool { return $this->has('expression_path'); }
    /** @return string
     * @throws SdkError When field is omitted; use hasField() or valueOrDefault().
     */
    public function getField(): string { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** @return bool
     * @throws SdkError When negated is omitted; use hasNegated() or valueOrDefault().
     */
    public function getNegated(): bool { return $this->get('negated'); }
    public function hasNegated(): bool { return $this->has('negated'); }
}
