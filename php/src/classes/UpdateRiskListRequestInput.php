<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateRiskListRequestInput extends Model {
    /** @param array{'name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateRiskListRequestInput')); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
