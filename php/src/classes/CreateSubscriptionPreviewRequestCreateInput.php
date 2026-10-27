<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read CreateSubscriptionRequestInput|array<array-key, mixed>|\stdClass $subscription
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionPreviewRequestCreateInput extends Model {
    /** @param array{'mode': string, 'subscription': CreateSubscriptionRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionPreviewRequestCreateInput')); }
    /** Shape $ (Value): string.  Value enum: "create".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): {@see CreateSubscriptionRequestInput}. The request body for: Create subscription.
     * @return CreateSubscriptionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
}
