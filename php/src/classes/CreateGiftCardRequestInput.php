<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string $customer_id
 * @property-read string $external_reference_id
 * @property-read mixed $funding
 * @property-read array{'email': string, 'message'?: string, 'name'?: string, 'send_at'?: string|\DateTimeInterface}|object $notification
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateGiftCardRequestInput extends Model {
    /** @param array{'currency': string, 'customer_id'?: string, 'external_reference_id'?: string, 'funding'?: mixed, 'notification'?: array{'email': string, 'message'?: string, 'name'?: string, 'send_at'?: string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateGiftCardRequestInput')); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return mixed
     * @throws SdkError When funding is omitted; use hasFunding() or valueOrDefault().
     */
    public function getFunding(): mixed { return $this->get('funding'); }
    public function hasFunding(): bool { return $this->has('funding'); }
    /** @return array{'email': string, 'message'?: string, 'name'?: string, 'send_at'?: string|\DateTimeInterface}|object
     * @throws SdkError When notification is omitted; use hasNotification() or valueOrDefault().
     */
    public function getNotification(): array|object { return $this->get('notification'); }
    public function hasNotification(): bool { return $this->has('notification'); }
}
