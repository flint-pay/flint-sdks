<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'description'?: string, 'external_reference_id'?: string, 'handle'?: string, 'metadata'?: mixed, 'name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CategoriesCreateInput extends Model {
    /** @param array{'body': array{'description'?: string, 'external_reference_id'?: string, 'handle'?: string, 'metadata'?: mixed, 'name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoriesCreateInput')); }
    /** The request body for: Create category. Example: {"handle":"events","name":"Events"}.
     * @return array{'description'?: string, 'external_reference_id'?: string, 'handle'?: string, 'metadata'?: mixed, 'name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
