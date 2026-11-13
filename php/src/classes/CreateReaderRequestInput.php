<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class CreateReaderRequestInput extends Model {
    /** @param array{'device_id'?: string, 'location_id': string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'registration_code': string, 'type': string}|object|array{'device_id'?: string, 'location_id': string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReaderRequestInput')); }
}
