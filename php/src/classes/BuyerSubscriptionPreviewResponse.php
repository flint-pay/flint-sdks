<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerSubscriptionPreviewResponseDataDeliveryOptions|BuyerSubscriptionPreviewResponseDataNextRenewal|\stdClass $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionPreviewResponse extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPreviewResponse')); }
    /**  oneOf[1] (Value): {@see BuyerSubscriptionPreview}. Available subscription delivery methods shown to the buyer. oneOf[2] (Value): {@see SubscriptionRenewalPreview}. A preview of a subscription's next renewal and its estimated pricing.
     * @return BuyerSubscriptionPreviewResponseDataDeliveryOptions|BuyerSubscriptionPreviewResponseDataNextRenewal|\stdClass
     */
    public function getData(): BuyerSubscriptionPreviewResponseDataDeliveryOptions|BuyerSubscriptionPreviewResponseDataNextRenewal|\stdClass { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
