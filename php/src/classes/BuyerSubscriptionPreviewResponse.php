<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerSubscriptionPreviewResponseDataDeliveryOptions|BuyerSubscriptionPreviewResponseDataNextRenewal|BuyerSubscriptionPreviewResponseDataPlanChange|BuyerSubscriptionPreviewResponseDataQuantityChange|\stdClass $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionPreviewResponse extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPreviewResponse')); }
    /** Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@see BuyerSubscriptionPreview}. Available subscription delivery methods shown to the buyer. oneOf[2] (Value): {@see SubscriptionRenewalPreview}. A preview of a subscription's next renewal and its estimated pricing. oneOf[3] (Value): {@see SubscriptionPlanChangePreview}. Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts. oneOf[4] (Value): {@see SubscriptionQuantityChangePreview}. Estimated pricing for a quantity change that keeps the billing period and anchor.
     * @return BuyerSubscriptionPreviewResponseDataDeliveryOptions|BuyerSubscriptionPreviewResponseDataNextRenewal|BuyerSubscriptionPreviewResponseDataPlanChange|BuyerSubscriptionPreviewResponseDataQuantityChange|\stdClass
     */
    public function getData(): BuyerSubscriptionPreviewResponseDataDeliveryOptions|BuyerSubscriptionPreviewResponseDataNextRenewal|BuyerSubscriptionPreviewResponseDataPlanChange|BuyerSubscriptionPreviewResponseDataQuantityChange|\stdClass { return $this->get('data'); }
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
