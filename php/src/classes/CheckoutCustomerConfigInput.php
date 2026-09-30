<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read bool $enable_address_autocomplete
 * @property-read string $external_reference_id
 * @property-read PrefilledCustomerInfoInput|array<array-key, mixed>|\stdClass $prefilled_customer_info
 * @property-read bool $require_billing_address
 * @property-read bool $require_email
 * @property-read bool $require_phone
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutCustomerConfigInput extends Model {
    /** @param array{'customer_id'?: string, 'enable_address_autocomplete'?: bool, 'external_reference_id'?: string, 'prefilled_customer_info'?: PrefilledCustomerInfoInput|array<array-key, mixed>|\stdClass, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomerConfigInput')); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return bool
     * @throws SdkError When enable_address_autocomplete is omitted; use hasEnableAddressAutocomplete() or valueOrDefault().
     */
    public function getEnableAddressAutocomplete(): bool { return $this->get('enable_address_autocomplete'); }
    public function hasEnableAddressAutocomplete(): bool { return $this->has('enable_address_autocomplete'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return PrefilledCustomerInfoInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When prefilled_customer_info is omitted; use hasPrefilledCustomerInfo() or valueOrDefault().
     */
    public function getPrefilledCustomerInfo(): mixed { return $this->get('prefilled_customer_info'); }
    public function hasPrefilledCustomerInfo(): bool { return $this->has('prefilled_customer_info'); }
    /** @return bool
     * @throws SdkError When require_billing_address is omitted; use hasRequireBillingAddress() or valueOrDefault().
     */
    public function getRequireBillingAddress(): bool { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** @return bool
     * @throws SdkError When require_email is omitted; use hasRequireEmail() or valueOrDefault().
     */
    public function getRequireEmail(): bool { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** @return bool
     * @throws SdkError When require_phone is omitted; use hasRequirePhone() or valueOrDefault().
     */
    public function getRequirePhone(): bool { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
}
