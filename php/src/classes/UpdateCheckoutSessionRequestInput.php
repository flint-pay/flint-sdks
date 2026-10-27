<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerContactRequestInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass $subscription_terms
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCheckoutSessionRequestInput extends Model {
    /** @param array{'buyer_contact'?: CheckoutBuyerContactRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'subscription_terms'?: CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCheckoutSessionRequestInput')); }
    /** Shape $ (Value): {@see CheckoutBuyerContactRequestInput}. Checkout session credentials only. Saves the contact the buyer entered while the session is open. A patch object: omitted fields are unchanged, and null clears a field. A merchant credential that sends buyer_contact receives CHECKOUT_SESSION_UPDATE_FIELD_NOT_ALLOWED. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: 1.
     * @return CheckoutBuyerContactRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** Shape $ (Value): integer string. Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Omit to leave unchanged; send null to clear. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see CheckoutSubscriptionTermsRequestInput}. Subscription plan sessions only. The billing interval and quantity the buyer chose from subscription_terms.billing_interval_options and quantity_options. Send billing_interval and billing_interval_count together. Accepted from your API key or the checkout credential. Subscription terms you set on a checkout session: billing interval, interval count, and quantity.
     * @return CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_terms is omitted; use hasSubscriptionTerms() or valueOrDefault().
     */
    public function getSubscriptionTerms(): mixed { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** Shape $ (Value): string. Checkout credentials only. A valid IANA timezone, such as America/Toronto, used for Flint-sent receipts. Omission keeps the previous observation; null is invalid. minLength: 1. maxLength: 64.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
