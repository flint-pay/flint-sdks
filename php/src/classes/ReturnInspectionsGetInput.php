<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_inspection_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionsGetInput extends Model {
    /** @param array{'return_inspection_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): string { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
}
