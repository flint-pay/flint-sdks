<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AccessLink $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class OrdersCreateAccessLinkResponse201 extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreateAccessLinkResponse201')); }
    /** Shape $ (Value): {@see AccessLink}. A link that opens an order, subscription, Return, or customer's account in the merchant's Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long it works. Its url is a bearer credential, returned only when the link is created.
     * @return AccessLink
     */
    public function getData(): AccessLink { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see ResponseMeta}. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
