<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credential_type
 * @property-read string $payment_intent_id
 * @property-read string $token
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentIntentSelectionTokenInput extends Model {
    /** @param array{'credential_type': string, 'payment_intent_id': string, 'token': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentIntentSelectionTokenInput')); }
    /** Shape $ (Value): string.  Value enum: "token".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Shape $ (Value): string. Payment intent to confirm. minLength: 1.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1.
     * @return string
     * @throws SdkError When token is omitted; use hasToken() or valueOrDefault().
     */
    public function getToken(): string { return $this->get('token'); }
    public function hasToken(): bool { return $this->has('token'); }
}
