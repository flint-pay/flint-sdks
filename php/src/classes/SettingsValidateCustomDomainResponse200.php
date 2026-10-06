<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomDomainStatus $data
 * @property-read string $request_id
 * Presence-aware response; omitted fields throw when accessed. */
final class SettingsValidateCustomDomainResponse200 extends Model {
    /** @param array{'data': mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SettingsValidateCustomDomainResponse200')); }
    /** @return CustomDomainStatus
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): CustomDomainStatus { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
