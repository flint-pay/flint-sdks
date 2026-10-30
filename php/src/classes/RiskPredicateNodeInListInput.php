<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $attribute
 * @property-read string $list_alias
 * @property-read string $operator
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPredicateNodeInListInput extends Model {
    /** @param array{'attribute': string, 'list_alias': string, 'operator': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPredicateNodeInListInput')); }
    /** minLength: 1. maxLength: 280.
     * @return string
     * @throws SdkError When attribute is omitted; use hasAttribute() or valueOrDefault().
     */
    public function getAttribute(): string { return $this->get('attribute'); }
    public function hasAttribute(): bool { return $this->has('attribute'); }
    /** minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$.
     * @return string
     * @throws SdkError When list_alias is omitted; use hasListAlias() or valueOrDefault().
     */
    public function getListAlias(): string { return $this->get('list_alias'); }
    public function hasListAlias(): bool { return $this->has('list_alias'); }
    /** Value enum: "in_list".
     * @return string
     * @throws SdkError When operator is omitted; use hasOperator() or valueOrDefault().
     */
    public function getOperator(): string { return $this->get('operator'); }
    public function hasOperator(): bool { return $this->has('operator'); }
}
