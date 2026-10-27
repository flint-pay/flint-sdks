<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_request_log_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperGetCurrentAPIKeyRequestLogInput extends Model {
    /** @param array{'api_request_log_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperGetCurrentAPIKeyRequestLogInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When api_request_log_id is omitted; use hasApiRequestLogId() or valueOrDefault().
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
}
