<?php
declare(strict_types=1);
namespace Flint;
final class OpenapiResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.
     * @param OpenapiGetSpecParams|array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return Result<array<array-key, mixed>>
     */
    public function getSpec(array|Model|null $params = null, ?RequestOptions $options = null): Result { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (array_key_exists('version', $rest)) { $input['version'] = $rest['version']; unset($rest['version']); } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', $name . " can't be sent: path values belong in positional arguments", 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $name]]); $input[$name] = $value; } return $this->runtime->request('getOpenAPISpec', $input, $options); }
}
