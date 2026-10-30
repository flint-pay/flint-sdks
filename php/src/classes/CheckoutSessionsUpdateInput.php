<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read array{'buyer_contact'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'subscription_terms'?: mixed, 'timezone'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsUpdateInput extends Model {
    /** @param array{'checkout_session_id': string, 'body': array{'buyer_contact'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'subscription_terms'?: mixed, 'timezone'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsUpdateInput')); }
    /** Flint checkout session ID. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The request body for: Update checkout session. Example: {"buyer_contact":{"email":"ada@example.com","phone":"+14155551234"}}.
     * @return array{'buyer_contact'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'subscription_terms'?: mixed, 'timezone'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
