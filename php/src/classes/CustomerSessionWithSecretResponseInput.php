<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerSessionWithSecretInput|array<array-key, mixed>|\stdClass $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionWithSecretResponseInput extends Model {
    /** @param array{'data': CustomerSessionWithSecretInput|array<array-key, mixed>|\stdClass, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionWithSecretResponseInput')); }
    /** A customer session with its `secret` and `refresh_token`, returned only when the session is created or refreshed. A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion.
     * @return CustomerSessionWithSecretInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): mixed { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ResponseMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
