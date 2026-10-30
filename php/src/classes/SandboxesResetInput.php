<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $sandbox_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SandboxesResetInput extends Model {
    /** @param array{'sandbox_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SandboxesResetInput')); }
    /** Flint sandbox ID. Example: "test_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
