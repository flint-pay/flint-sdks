<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionCustomerVerificationRequestInput extends Model {
    /** @param array{'channel'?: string, 'email': string, 'purpose': string}|object|array{'channel': string, 'purpose': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionCustomerVerificationRequestInput')); }
}
