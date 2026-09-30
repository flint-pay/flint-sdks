<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $success
 * Presence-aware input; omitted fields throw when accessed. */
final class ActionResultInput extends Model {
    /** @param array{'success': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ActionResultInput')); }
    /** @return bool
     * @throws SdkError When success is omitted; use hasSuccess() or valueOrDefault().
     */
    public function getSuccess(): bool { return $this->get('success'); }
    public function hasSuccess(): bool { return $this->has('success'); }
}
