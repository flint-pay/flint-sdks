<?php
declare(strict_types=1);
namespace Flint;
final class SubscriptionPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Evaluates a proposed subscription, delivery destination, or delivery method update without saving changes. Malformed JSON, unknown fields and request-level problems (a missing or unsupported mode, fields that belong to another mode) return 400. In create mode, every problem with the proposed subscription is returned in errors with is_valid false, not only the first. A preview does not reserve inventory or guarantee a future shipping rate.
     * @param SubscriptionPreviewsCreateInput|array{'Flint-Version'?: string, 'body': array{'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string}|object|array{'mode': string, 'subscription': CreateSubscriptionRequestInput|array<array-key, mixed>|\stdClass}|object|array{'delivery_method': UpdateDeliveryMethodRequestInput|array<array-key, mixed>|\stdClass, 'delivery_method_id': string, 'mode': string}|object} $input
     * @return SubscriptionPreviewsCreateResponse200DataCreate|SubscriptionPreviewsCreateResponse200DataDeliveryOptions|SubscriptionPreviewsCreateResponse200DataDeliveryMethodUpdate|\stdClass
     */
    public function create(SubscriptionPreviewsCreateInput|array $input, ?RequestOptions $options = null): SubscriptionPreviewsCreateResponse200DataCreate|SubscriptionPreviewsCreateResponse200DataDeliveryOptions|SubscriptionPreviewsCreateResponse200DataDeliveryMethodUpdate|\stdClass { return SdkResponse::payload($this->runtime->request('createSubscriptionPreview', $input instanceof SubscriptionPreviewsCreateInput ? $input->toInputArray() : (new SubscriptionPreviewsCreateInput($input))->toInputArray(), $options), ['data']); }
    /** @return SdkResponse<SubscriptionPreviewsCreateResponse200> */
    public function createWithResponse(SubscriptionPreviewsCreateInput|array $input, ?RequestOptions $options = null): SdkResponse { $result = $this->runtime->request('createSubscriptionPreview', $input instanceof SubscriptionPreviewsCreateInput ? $input->toInputArray() : (new SubscriptionPreviewsCreateInput($input))->toInputArray(), $options); return new SdkResponse($result->data, $result->meta, $result->raw); }
}
