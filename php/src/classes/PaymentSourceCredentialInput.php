<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialInput extends Model {
    /** @param array{'token': string}|object|array{'payment_method_id': string}|object|array{'stripe': array{'confirmation_token': string}|object}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialInput')); }
}
