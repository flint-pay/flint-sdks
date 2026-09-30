<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $path
 * @property-read string $shape
 * Presence-aware response; omitted fields throw when accessed. */
final class ApiRequestLogExpansionShape extends Model {
    /** @param array{'path': string, 'shape': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiRequestLogExpansionShape')); }
    /** @return string
     * @throws SdkError When path is omitted; use hasPath() or valueOrDefault().
     */
    public function getPath(): string { return $this->get('path'); }
    public function hasPath(): bool { return $this->has('path'); }
    /** @return string
     * @throws SdkError When shape is omitted; use hasShape() or valueOrDefault().
     */
    public function getShape(): string { return $this->get('shape'); }
    public function hasShape(): bool { return $this->has('shape'); }
}
