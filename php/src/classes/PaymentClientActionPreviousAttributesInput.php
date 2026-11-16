<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PaymentClientActionPreviousAttributesInput extends Model {
    /** @param PaymentClientActionURLPreviousAttributesInput|array<array-key, mixed>|\stdClass|PaymentClientActionStripePreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentClientActionPreviousAttributesInput')); }
}
