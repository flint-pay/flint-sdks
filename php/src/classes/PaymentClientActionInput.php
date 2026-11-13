<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PaymentClientActionInput extends Model {
    /** @param array{'type': string, 'url': string}|object|array{'stripe': StripePaymentClientActionInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentClientActionInput')); }
}
