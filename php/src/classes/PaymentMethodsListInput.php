<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $type
 * @property-read string $status
 * @property-read string $usage
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodsListInput extends Model {
    /** @param array{'customer_id'?: string, 'page_size'?: int, 'page_token'?: string, 'type'?: string, 'status'?: string, 'usage'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodsListInput')); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
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
     * @throws SdkError When usage is omitted; use hasUsage() or valueOrDefault().
     */
    public function getUsage(): string { return $this->get('usage'); }
    public function hasUsage(): bool { return $this->has('usage'); }
}
