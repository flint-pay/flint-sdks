<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string $email
 * @property-read string $purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionSavePaymentMethodVerificationRequestInput extends Model {
    /** @param array{'channel'?: string, 'email': string, 'purpose': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionSavePaymentMethodVerificationRequestInput')); }
    /** Shape $ (Value): string. Default: "email". Value enum: "email".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): string. Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: email. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string.  Value enum: "save_payment_method".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
