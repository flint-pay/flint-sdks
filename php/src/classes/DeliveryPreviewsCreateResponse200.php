<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryPreviewsCreateResponse200DataDeliveryOptions|DeliveryPreviewsCreateResponse200DataPickupLocations|\stdClass $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200 extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200')); }
    /** Shape $ (Value): {@see DeliveryPreview} or {@see DeliveryPickupAvailability}. Shape $.oneOf[1] (Value): {@see DeliveryPreview}. The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics. Shape $.oneOf[2] (Value): {@see DeliveryPickupAvailability}. The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics.
     * @return DeliveryPreviewsCreateResponse200DataDeliveryOptions|DeliveryPreviewsCreateResponse200DataPickupLocations|\stdClass
     */
    public function getData(): DeliveryPreviewsCreateResponse200DataDeliveryOptions|DeliveryPreviewsCreateResponse200DataPickupLocations|\stdClass { return $this->get('data'); }
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
