<?php
declare(strict_types=1);
namespace Flint;
final class ReportDownloadsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Authorizes the stable Flint download URL and redirects to a short-lived private file URL.
     * @param array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return Result<\stdClass>
     */
    public function get(string|Model $report_download_id, array|Model|null $params = null, ?RequestOptions $options = null): Result { $input = ['report_download_id' => $report_download_id]; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw new SdkError('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('X-Request-Id', $rest)) { $input['X-Request-Id'] = $rest['X-Request-Id']; unset($rest['X-Request-Id']); } if (array_key_exists('Flint-Version', $rest)) { $input['Flint-Version'] = $rest['Flint-Version']; unset($rest['Flint-Version']); } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw new SdkError('validation', 'Path values belong in positional arguments', 'not_sent'); $input[$name] = $value; } return $this->runtime->request('getReportDownload', $input instanceof ReportDownloadsGetInput ? $input->toInputArray() : (new ReportDownloadsGetInput($input))->toInputArray(), $options); }
}
