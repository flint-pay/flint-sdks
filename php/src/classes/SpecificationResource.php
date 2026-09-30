<?php
declare(strict_types=1);
namespace Flint;
final class SpecificationResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.
     * @param array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return Result<array<array-key, mixed>>
     */
    public function get(array|Model|null $params = null, ?RequestOptions $options = null): Result { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw new SdkError('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('version', $rest)) { $input['version'] = $rest['version']; unset($rest['version']); } if (array_key_exists('Flint-Version', $rest)) { $input['Flint-Version'] = $rest['Flint-Version']; unset($rest['Flint-Version']); } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw new SdkError('validation', 'Path values belong in positional arguments', 'not_sent'); $input[$name] = $value; } return $this->runtime->request('getOpenAPISpec', $input instanceof SpecificationGetInput ? $input->toInputArray() : (new SpecificationGetInput($input))->toInputArray(), $options); }
}
