<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string $customer_id
 * @property-read string $purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCustomerVerificationRequestInput extends Model {
    /** @param array{'channel'?: string, 'customer_id': string, 'purpose': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCustomerVerificationRequestInput')); }
    /** Shape $ (Value): string. Defaults to email when omitted. Explicit null and an empty value are not accepted. Default: "email". Value enum: "email".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.  Value enum: "link_guest_purchases".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
