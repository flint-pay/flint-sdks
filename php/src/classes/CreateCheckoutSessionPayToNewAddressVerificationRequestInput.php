<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionPayToNewAddressVerificationRequestInput extends Model {
    /** @param array{'purpose': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionPayToNewAddressVerificationRequestInput')); }
    /** What the buyer is confirming their email or number for. Value enum: "pay_to_new_address".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
