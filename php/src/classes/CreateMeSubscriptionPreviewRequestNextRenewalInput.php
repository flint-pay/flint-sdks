<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read string $mode
 * @property-read string $subscription_id
 * @property-read SubscriptionSwapPreviewRequestInput|array<array-key, mixed>|\stdClass $swap
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateMeSubscriptionPreviewRequestNextRenewalInput extends Model {
    /** @param array{'delivery'?: SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id': string, 'swap'?: SubscriptionSwapPreviewRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateMeSubscriptionPreviewRequestNextRenewalInput')); }
    /** Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next paid renewal as if this delivery were saved. A held delivery with remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing, while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved, and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a subscription: delivery method, type, destination, and recipient.
     * @return SubscriptionDeliveryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Selects the next renewal preview. Value enum: "next_renewal".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the subscription to preview the next renewal for. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** A proposed variant swap for one line item. The preview prices the next renewal as if the swap were saved, using the same checks and current price as a buyer line item update. Nothing is saved. Can't be combined with `delivery`. A proposed item swap for a buyer renewal preview: the subscription line item and the variant to price in its place.
     * @return SubscriptionSwapPreviewRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When swap is omitted; use hasSwap() or valueOrDefault().
     */
    public function getSwap(): mixed { return $this->get('swap'); }
    public function hasSwap(): bool { return $this->has('swap'); }
}
