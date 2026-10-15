<?php
declare(strict_types=1);
namespace Flint;
final class RiskPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Create a risk preview for the authenticated merchant environment.
     * @param array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return RuleValidation
     */
    public function create(array|Model $params, ?RequestOptions $options = null): RuleValidation { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('X-Request-Id', $rest)) { $input['X-Request-Id'] = $rest['X-Request-Id']; unset($rest['X-Request-Id']); } if (true) $input['body'] = (object) $rest; return SdkResponse::payload($this->runtime->request('createRiskPreview', $input instanceof RiskPreviewsCreateInput ? $input->toInputArray() : (new RiskPreviewsCreateInput($input))->toInputArray(), $options), ['data']); }
    /** @return SdkResponse<RiskPreviewsCreateResponse200> */
    public function createWithResponse(array|Model $params, ?RequestOptions $options = null): SdkResponse { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('X-Request-Id', $rest)) { $input['X-Request-Id'] = $rest['X-Request-Id']; unset($rest['X-Request-Id']); } if (true) $input['body'] = (object) $rest; $result = $this->runtime->request('createRiskPreview', $input instanceof RiskPreviewsCreateInput ? $input->toInputArray() : (new RiskPreviewsCreateInput($input))->toInputArray(), $options); return new SdkResponse($result->data, $result->meta, $result->raw); }
}
