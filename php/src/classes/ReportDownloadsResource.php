<?php
declare(strict_types=1);
namespace Flint;
final class ReportDownloadsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Authorizes the stable Flint download URL and redirects to a short-lived private file URL.
     * @param string|Model $report_download_id Flint report download ID.
     * @param ReportDownloadsGetParams|array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return Result<\stdClass>
     */
    public function get(string|Model $report_download_id, array|Model|null $params = null, ?RequestOptions $options = null): Result { if ($report_download_id instanceof Model && (is_array($report_download_id->jsonSerialize()) || is_object($report_download_id->jsonSerialize()))) throw SdkError::create('validation', 'Path parameter report_download_id requires a scalar value or a scalar model; entity models are not identifiers', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'report_download_id']]); $input = ['report_download_id' => $report_download_id]; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', $name . " can't be sent: path values belong in positional arguments", 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $name]]); $input[$name] = $value; } return $this->runtime->request('getReportDownload', $input, $options); }
}
