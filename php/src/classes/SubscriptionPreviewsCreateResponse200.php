<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionPreviewsCreateResponse200DataCreate|SubscriptionPreviewsCreateResponse200DataDeliveryOptions|SubscriptionPreviewsCreateResponse200DataDeliveryMethodUpdate|SubscriptionPreviewsCreateResponse200DataNextRenewal|SubscriptionPreviewsCreateResponse200DataPlanChange|\stdClass $data
 * @property-read ?ResponseMeta $meta
 * @property-read ?string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewsCreateResponse200 extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewsCreateResponse200')); }
    /** Shape $ (Value): {@see SubscriptionPreview} or {@see SubscriptionDeliveryMethodImpact} or {@see SubscriptionRenewalPreview} or {@see SubscriptionPlanChangePreview}. Shape $.oneOf[1] (Value): {@see SubscriptionPreview}. A preview of a subscription. In `create` mode it reports validity and errors; in `delivery_options` mode it lists delivery methods. Shape $.oneOf[2] (Value): {@see SubscriptionDeliveryMethodImpact}. How a delivery method change affects subscriptions: current counts and how many would no longer be eligible. Shape $.oneOf[3] (Value): {@see SubscriptionRenewalPreview}. A preview of a subscription's next renewal and its estimated pricing. Shape $.oneOf[4] (Value): {@see SubscriptionPlanChangePreview}. Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.
     * @return SubscriptionPreviewsCreateResponse200DataCreate|SubscriptionPreviewsCreateResponse200DataDeliveryOptions|SubscriptionPreviewsCreateResponse200DataDeliveryMethodUpdate|SubscriptionPreviewsCreateResponse200DataNextRenewal|SubscriptionPreviewsCreateResponse200DataPlanChange|\stdClass
     */
    public function getData(): SubscriptionPreviewsCreateResponse200DataCreate|SubscriptionPreviewsCreateResponse200DataDeliveryOptions|SubscriptionPreviewsCreateResponse200DataDeliveryMethodUpdate|SubscriptionPreviewsCreateResponse200DataNextRenewal|SubscriptionPreviewsCreateResponse200DataPlanChange|\stdClass { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see ResponseMeta}. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getRequestId(): ?string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
