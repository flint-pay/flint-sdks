<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'configuration': array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string}|object|array{'allowed_types': list<string>, 'combination_policy': string, 'origin_policy': mixed, 'requirement': string, 'resolution_mode': string, 'splitting_policy': string}|object|array{'allowed_types': list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode': string, 'splitting_policy'?: string}|object, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfilesCreateInput extends Model {
    /** @param array{'body': array{'configuration': array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string}|object|array{'allowed_types': list<string>, 'combination_policy': string, 'origin_policy': mixed, 'requirement': string, 'resolution_mode': string, 'splitting_policy': string}|object|array{'allowed_types': list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode': string, 'splitting_policy'?: string}|object, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfilesCreateInput')); }
    /** The request body for: Create delivery profile. Example: {"configuration":{"requirement":"none"},"name":"Standard delivery"}.
     * @return array{'configuration': array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string}|object|array{'allowed_types': list<string>, 'combination_policy': string, 'origin_policy': mixed, 'requirement': string, 'resolution_mode': string, 'splitting_policy': string}|object|array{'allowed_types': list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode': string, 'splitting_policy'?: string}|object, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
