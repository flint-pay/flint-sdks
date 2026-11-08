<?php
declare(strict_types=1);
namespace Flint;
final class ReturnPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.
     * @param ReturnPreviewsCreateParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return CreateReturnPreviewResponseDataEligibility|CreateReturnPreviewResponseDataResolution|Model
     */
    public function create(array|Model $params, ?RequestOptions $options = null): CreateReturnPreviewResponseDataEligibility|CreateReturnPreviewResponseDataResolution|Model { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (array_key_exists('Flint-Merchant-Id', $rest)) { $input['Flint-Merchant-Id'] = $rest['Flint-Merchant-Id']; unset($rest['Flint-Merchant-Id']); } if (array_key_exists('Flint-Mode', $rest)) { $input['Flint-Mode'] = $rest['Flint-Mode']; unset($rest['Flint-Mode']); } if (array_key_exists('Flint-Sandbox-Id', $rest)) { $input['Flint-Sandbox-Id'] = $rest['Flint-Sandbox-Id']; unset($rest['Flint-Sandbox-Id']); } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('createReturnPreview', $input, $options), ['data']); }
}
