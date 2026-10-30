<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $hostname
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCustomDomainRequestInput extends Model {
    /** @param array{'hostname': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCustomDomainRequestInput')); }
    /** Hostname to configure, such as checkout.example.com or account.example.com. minLength: 1. maxLength: 253.
     * @return string
     * @throws SdkError When hostname is omitted; use hasHostname() or valueOrDefault().
     */
    public function getHostname(): string { return $this->get('hostname'); }
    public function hasHostname(): bool { return $this->has('hostname'); }
    /** Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum: "checkout", "customer_account".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
