<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read UpdateDeliveryMethodRequestInput|array<array-key, mixed>|\stdClass $delivery_method
 * @property-read string $delivery_method_id
 * @property-read string $mode
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput extends Model {
    /** @param array{'delivery_method': UpdateDeliveryMethodRequestInput|array<array-key, mixed>|\stdClass, 'delivery_method_id': string, 'mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput')); }
    /** Shape $ (Value): {@see UpdateDeliveryMethodRequestInput}. The request body for: Update delivery method.
     * @return UpdateDeliveryMethodRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_method is omitted; use hasDeliveryMethod() or valueOrDefault().
     */
    public function getDeliveryMethod(): mixed { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** Shape $ (Value): string. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string.  Value enum: "delivery_method_update".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
