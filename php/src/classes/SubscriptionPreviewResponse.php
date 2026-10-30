<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionPreviewResponseDataCreate|SubscriptionPreviewResponseDataDeliveryOptions|SubscriptionPreviewResponseDataDeliveryMethodUpdate|SubscriptionPreviewResponseDataNextRenewal|SubscriptionPreviewResponseDataPlanChange|\stdClass $data
 * @property-read ?ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewResponse extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewResponse')); }
    /**  oneOf[1] (Value): {@see SubscriptionPreview}. A preview of a subscription. In `create` mode it reports validity and errors; in `delivery_options` mode it lists delivery methods. oneOf[2] (Value): {@see SubscriptionDeliveryMethodImpact}. How a delivery method change affects subscriptions: current counts and how many would no longer be eligible. oneOf[3] (Value): {@see SubscriptionRenewalPreview}. A preview of a subscription's next renewal and its estimated pricing. oneOf[4] (Value): {@see SubscriptionPlanChangePreview}. Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.
     * @return SubscriptionPreviewResponseDataCreate|SubscriptionPreviewResponseDataDeliveryOptions|SubscriptionPreviewResponseDataDeliveryMethodUpdate|SubscriptionPreviewResponseDataNextRenewal|SubscriptionPreviewResponseDataPlanChange|\stdClass
     */
    public function getData(): SubscriptionPreviewResponseDataCreate|SubscriptionPreviewResponseDataDeliveryOptions|SubscriptionPreviewResponseDataDeliveryMethodUpdate|SubscriptionPreviewResponseDataNextRenewal|SubscriptionPreviewResponseDataPlanChange|\stdClass { return $this->get('data'); }
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
