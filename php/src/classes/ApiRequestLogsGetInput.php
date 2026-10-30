<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $api_request_log_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ApiRequestLogsGetInput extends Model {
    /** @param array{'api_request_log_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiRequestLogsGetInput')); }
    /** Flint API request log ID. Example: "rlog_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When api_request_log_id is omitted; use hasApiRequestLogId() or valueOrDefault().
     */
    public function getApiRequestLogId(): string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
}
