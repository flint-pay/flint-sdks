<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $alias
 * @property-read string $item_type
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRiskListRequestInput extends Model {
    /** @param array{'alias': string, 'item_type': string, 'name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRiskListRequestInput')); }
    /** @return string
     * @throws SdkError When alias is omitted; use hasAlias() or valueOrDefault().
     */
    public function getAlias(): string { return $this->get('alias'); }
    public function hasAlias(): bool { return $this->has('alias'); }
    /** @return string
     * @throws SdkError When item_type is omitted; use hasItemType() or valueOrDefault().
     */
    public function getItemType(): string { return $this->get('item_type'); }
    public function hasItemType(): bool { return $this->has('item_type'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
