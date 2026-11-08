<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionWithSecret $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionCustomerVerificationConfirmationResponse extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionCustomerVerificationConfirmationResponse')); }
    /** Resource, collection, or operation result returned by this request. The checkout session with any newly issued checkout credential. Hosted launches return url without checkout_auth_token. Embedded launches return checkout_auth_token without url. Customer binding confirmation returns its newly issued credential for either surface. A session in which a buyer completes an order's payment.
     * @return CheckoutSessionWithSecret
     */
    public function getData(): CheckoutSessionWithSecret { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Identifier of this API request, used to correlate logs and support requests. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
