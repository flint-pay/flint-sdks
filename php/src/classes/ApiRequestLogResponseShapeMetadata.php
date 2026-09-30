<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $auth_mode
 * @property-read list<ApiRequestLogExpansionShape> $expansion_shapes
 * @property-read list<string> $normalized_expand_paths
 * @property-read string $response_shape_key
 * Presence-aware response; omitted fields throw when accessed. */
final class ApiRequestLogResponseShapeMetadata extends Model {
    /** @param array{'auth_mode': string, 'expansion_shapes': list<mixed>, 'normalized_expand_paths': list<string>, 'response_shape_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiRequestLogResponseShapeMetadata')); }
    /** @return string
     * @throws SdkError When auth_mode is omitted; use hasAuthMode() or valueOrDefault().
     */
    public function getAuthMode(): string { return $this->get('auth_mode'); }
    public function hasAuthMode(): bool { return $this->has('auth_mode'); }
    /** @return list<ApiRequestLogExpansionShape>
     * @throws SdkError When expansion_shapes is omitted; use hasExpansionShapes() or valueOrDefault().
     */
    public function getExpansionShapes(): array { return $this->get('expansion_shapes'); }
    public function hasExpansionShapes(): bool { return $this->has('expansion_shapes'); }
    /** @return list<string>
     * @throws SdkError When normalized_expand_paths is omitted; use hasNormalizedExpandPaths() or valueOrDefault().
     */
    public function getNormalizedExpandPaths(): array { return $this->get('normalized_expand_paths'); }
    public function hasNormalizedExpandPaths(): bool { return $this->has('normalized_expand_paths'); }
    /** @return string
     * @throws SdkError When response_shape_key is omitted; use hasResponseShapeKey() or valueOrDefault().
     */
    public function getResponseShapeKey(): string { return $this->get('response_shape_key'); }
    public function hasResponseShapeKey(): bool { return $this->has('response_shape_key'); }
}
