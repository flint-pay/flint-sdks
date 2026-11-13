<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass $destination
 * @property-read string $mode
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateMeSubscriptionPreviewRequestDeliveryOptionsInput extends Model {
    /** @param array{'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateMeSubscriptionPreviewRequestDeliveryOptionsInput')); }
    /** Address to evaluate each method against: one of the customer's saved addresses or a new address. Where to deliver a subscription: a saved customer address by ID, or a new address.
     * @return SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Selects the delivery options preview. Value enum: "delivery_options".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the subscription to list delivery methods for. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
