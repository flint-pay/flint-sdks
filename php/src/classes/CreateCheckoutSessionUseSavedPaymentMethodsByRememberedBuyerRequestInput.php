<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string $purpose
 * @property-read string $remembered_buyer_token
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput extends Model {
    /** @param array{'channel'?: string, 'purpose': string, 'remembered_buyer_token': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput')); }
    /** How Flint delivers the code. Default: "auto". Value enum: "email", "sms", "auto".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** What the buyer is confirming their email or number for. Value enum: "use_saved_payment_methods".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Use this remembered identity instead of email, only with purpose use_saved_payment_methods. It never opens saved cards without a right code. minLength: 47. maxLength: 47. pattern: ^rbt_[A-Za-z0-9_-]{43}$.
     * @return string
     * @throws SdkError When remembered_buyer_token is omitted; use hasRememberedBuyerToken() or valueOrDefault().
     */
    public function getRememberedBuyerToken(): string { return $this->get('remembered_buyer_token'); }
    public function hasRememberedBuyerToken(): bool { return $this->has('remembered_buyer_token'); }
}
