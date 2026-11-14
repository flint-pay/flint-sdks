<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $default_invoice_payment_term_id
 * @property-read string|null $default_payment_method_id
 * @property-read string|null $email
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string|null $internal_note
 * @property-read bool $is_merchant_verified
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read string|null $price_list_id
 * @property-read string|null $segment
 * @property-read bool $tax_exempt
 * @property-read array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'tax_ids'?: list<DocumentTaxIDRequestInput|array<array-key, mixed>|\stdClass>}|object|null $tax_identity
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersUpdateParams extends Model {
    /** @param array{'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'price_list_id'?: string|null, 'segment'?: string|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'tax_ids'?: list<DocumentTaxIDRequestInput|array<array-key, mixed>|\stdClass>}|object|null, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersUpdateParams')); }
    /** Default payment term for this customer's invoices. Send null to clear it. minLength: 1. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     * @return string|null
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string|null { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** The active off_session payment method to use by default. Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string|null
     * @throws SdkError When default_payment_method_id is omitted; use hasDefaultPaymentMethodId() or valueOrDefault().
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** The customer's email. Omit to leave unchanged; null clears it. In `flint_hosted` mode, you can set, correct, or clear the email until the buyer authenticates or verifies ownership of it. Existing identities with unknown sign-in history remain protected and require a buyer-confirmed change. In `merchant_hosted` mode, you can set, change, or clear it. An email change ends customer sessions and access links for the old address. Format: email. minLength: 1. maxLength: 320. Example: "buyer@example.com".
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return a conflict. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Omit to leave unchanged; null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Internal note about this customer. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address.
     * @return bool
     * @throws SdkError When is_merchant_verified is omitted; use hasIsMerchantVerified() or valueOrDefault().
     */
    public function getIsMerchantVerified(): bool { return $this->get('is_merchant_verified'); }
    public function hasIsMerchantVerified(): bool { return $this->has('is_merchant_verified'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Customer name, up to 255 characters (Unicode code points) after trimming surrounding whitespace. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Customer phone number. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** ID of a wholesale price list in this merchant environment. Omit to leave unchanged; null clears it. An inactive list can be assigned but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns 404 RESOURCE_NOT_FOUND. minLength: 1. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * @return string|null
     * @throws SdkError When price_list_id is omitted; use hasPriceListId() or valueOrDefault().
     */
    public function getPriceListId(): string|null { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When segment is omitted; use hasSegment() or valueOrDefault().
     */
    public function getSegment(): string|null { return $this->get('segment'); }
    public function hasSegment(): bool { return $this->has('segment'); }
    /** Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Omit to leave unchanged; `null` is not accepted.
     * @return bool
     * @throws SdkError When tax_exempt is omitted; use hasTaxExempt() or valueOrDefault().
     */
    public function getTaxExempt(): bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
    /** Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. Omit to leave unchanged; null clears it. anyOf[1] (Value): {@see TaxIdentityPatchInput}. Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code'?: string|null, 'state'?: string|null}|object|null, 'tax_ids'?: list<DocumentTaxIDRequestInput|array<array-key, mixed>|\stdClass>}|object|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): mixed { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
