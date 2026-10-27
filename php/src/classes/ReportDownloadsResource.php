<?php
declare(strict_types=1);
namespace Flint;
final class ReportDownloadsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Authorizes the stable Flint download URL and redirects to a short-lived private file URL.
     * @param array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return Result<\stdClass>
     */
    public function get(string|Model $report_download_id, array|Model|null $params = null, ?RequestOptions $options = null): Result { if ($report_download_id instanceof Model && (is_array($report_download_id->jsonSerialize()) || is_object($report_download_id->jsonSerialize()))) throw SdkError::create('validation', 'Path parameter report_download_id requires a scalar value or a scalar model; entity models are not identifiers'); $input = ['report_download_id' => $report_download_id]; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', 'Path values belong in positional arguments', 'not_sent'); $input[$name] = $value; } return $this->runtime->request('getReportDownload', (new ReportDownloadsGetInput($input))->toInputArray(), $options); }
}
