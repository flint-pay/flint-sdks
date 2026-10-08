<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerContactRequestInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read string $external_reference_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass $subscription_terms
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCheckoutSessionRequestInput extends Model {
    /** @param array{'buyer_contact'?: CheckoutBuyerContactRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'subscription_terms'?: CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCheckoutSessionRequestInput')); }
    /** @return CheckoutBuyerContactRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_terms is omitted; use hasSubscriptionTerms() or valueOrDefault().
     */
    public function getSubscriptionTerms(): mixed { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
