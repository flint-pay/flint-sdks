<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class MetadataPatchRequestInput extends Model {
    /** @param array<array-key, string|null>|\stdClass $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MetadataPatchRequestInput')); }
}
