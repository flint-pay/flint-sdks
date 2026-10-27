<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class ConfirmPaymentIntentRequestInput extends Model {
    /** @param array{'payment_source_token': string, 'save_payment_method'?: bool}|object|array{'payment_method_id': string, 'save_payment_method'?: bool}|object|array{'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object}|object|array{'save_payment_method'?: bool}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConfirmPaymentIntentRequestInput')); }
}
