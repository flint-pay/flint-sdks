<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $success
 * Presence-aware response; omitted fields throw when accessed. */
final class ActionResult extends Model {
    /** @param array{'success': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ActionResult')); }
    /** @return bool
     * @throws SdkError When success is omitted; use hasSuccess() or valueOrDefault().
     */
    public function getSuccess(): bool { return $this->get('success'); }
    public function hasSuccess(): bool { return $this->has('success'); }
}
