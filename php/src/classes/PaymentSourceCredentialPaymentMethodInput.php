<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credential_type
 * @property-read string $customer_presence
 * @property-read string $payment_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialPaymentMethodInput extends Model {
    /** @param array{'credential_type': string, 'customer_presence'?: string, 'payment_method_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialPaymentMethodInput')); }
    /** Value enum: "payment_method".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Whether the customer is present for this payment. Defaults to present. Send absent to charge a saved card while the customer is away, such as for a no-show fee, damages, or a top-up. Flint then sends the charge to the card network as merchant-initiated, using the card's stored credential, so the bank can't ask the customer to authenticate. absent can be sent only with an API key or partner token, and only for a saved card whose usage is off_session; a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason payment_method_not_reusable. If the bank still requires authentication, the payment fails with status requires_payment_method and last_payment_error.code authentication_required. Ask the customer to pay while present instead of retrying. Default: "present". Value enum: "present", "absent".
     * @return string
     * @throws SdkError When customer_presence is omitted; use hasCustomerPresence() or valueOrDefault().
     */
    public function getCustomerPresence(): string { return $this->get('customer_presence'); }
    public function hasCustomerPresence(): bool { return $this->has('customer_presence'); }
    /** Saved Flint payment method ID belonging to the customer making this payment. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
