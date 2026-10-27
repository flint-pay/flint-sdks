<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentIntentSelectionInput extends Model {
    /** @param array{'payment_intent_id': string, 'token': string}|object|array{'payment_intent_id': string, 'payment_method_id': string}|object|array{'payment_intent_id': string, 'stripe': array{'confirmation_token': string}|object}|object|array{'payment_intent_id': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentIntentSelectionInput')); }
}
