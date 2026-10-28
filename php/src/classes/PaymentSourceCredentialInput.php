<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialInput extends Model {
    /** @param array{'credential_type': string, 'token': string}|object|array{'credential_type': string, 'payment_method_id': string}|object|array{'credential_type': string, 'stripe': array{'confirmation_token': string}|object}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialInput')); }
}
