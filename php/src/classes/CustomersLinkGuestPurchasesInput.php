<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read array{'customer_verification_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersLinkGuestPurchasesInput extends Model {
    /** @param array{'customer_id': string, 'body': array{'customer_verification_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersLinkGuestPurchasesInput')); }
    /** Flint customer ID. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The request body for: Link guest purchases to a customer. Example: {"customer_verification_id":"cver_01KEZF7C00E7S01991S7457CVK"}.
     * @return array{'customer_verification_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
