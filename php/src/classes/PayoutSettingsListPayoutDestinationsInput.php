<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string $type
 * @property-read string $status
 * @property-read string $available_payout_method
 * @property-read bool $default_for_currency
 * @property-read bool $include_deleted
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutSettingsListPayoutDestinationsInput extends Model {
    /** @param array{'currency'?: string, 'type'?: string, 'status'?: string, 'available_payout_method'?: string, 'default_for_currency'?: bool, 'include_deleted'?: bool, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsListPayoutDestinationsInput')); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When available_payout_method is omitted; use hasAvailablePayoutMethod() or valueOrDefault().
     */
    public function getAvailablePayoutMethod(): string { return $this->get('available_payout_method'); }
    public function hasAvailablePayoutMethod(): bool { return $this->has('available_payout_method'); }
    /** @return bool
     * @throws SdkError When default_for_currency is omitted; use hasDefaultForCurrency() or valueOrDefault().
     */
    public function getDefaultForCurrency(): bool { return $this->get('default_for_currency'); }
    public function hasDefaultForCurrency(): bool { return $this->has('default_for_currency'); }
    /** @return bool
     * @throws SdkError When include_deleted is omitted; use hasIncludeDeleted() or valueOrDefault().
     */
    public function getIncludeDeleted(): bool { return $this->get('include_deleted'); }
    public function hasIncludeDeleted(): bool { return $this->has('include_deleted'); }
    /** @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
