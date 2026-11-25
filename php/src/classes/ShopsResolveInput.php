<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $shop_id
 * @property-read array{'client_reference'?: string, 'line_items': list<mixed>, 'prefill'?: mixed, 'resolution_context': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ShopsResolveInput extends Model {
    /** @param array{'shop_id': string, 'body': array{'client_reference'?: string, 'line_items': list<mixed>, 'prefill'?: mixed, 'resolution_context': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopsResolveInput')); }
    /** Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * @return string
     * @throws SdkError When shop_id is omitted; use hasShopId() or valueOrDefault().
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** A cart to turn into a hosted checkout. Example: {"line_items":[{"quantity":2,"shop_listing_id":"shl_01ARZ3NDEKTSV4RRFFQ69G5FAV"}],"resolution_context":"shrc_v1.example"}.
     * @return array{'client_reference'?: string, 'line_items': list<mixed>, 'prefill'?: mixed, 'resolution_context': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
