<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware response; omitted optional fields return null. */
final class SpecificationGetResponse200 extends Model {
    /** @param array<array-key, mixed>|\stdClass $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SpecificationGetResponse200')); }
}
