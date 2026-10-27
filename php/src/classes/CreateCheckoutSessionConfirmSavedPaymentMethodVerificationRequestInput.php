<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string $purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput extends Model {
    /** @param array{'channel': string, 'purpose': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "email", "sms".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): string.  Value enum: "confirm_saved_payment_method".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
