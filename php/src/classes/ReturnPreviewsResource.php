<?php
declare(strict_types=1);
namespace Flint;
final class ReturnPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.
     * @param array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return ReturnPreviewsCreateResponse200DataEligibility|ReturnPreviewsCreateResponse200DataResolution|\stdClass
     */
    public function create(array|Model $params, ?RequestOptions $options = null): ReturnPreviewsCreateResponse200DataEligibility|ReturnPreviewsCreateResponse200DataResolution|\stdClass { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (true) $input['body'] = (object) $rest; return SdkResponse::payload($this->runtime->request('createReturnPreview', (new ReturnPreviewsCreateInput($input))->toInputArray(), $options), ['data']); }
    /** @return SdkResponse<ReturnPreviewsCreateResponse200> */
    public function createWithResponse(array|Model $params, ?RequestOptions $options = null): SdkResponse { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (true) $input['body'] = (object) $rest; $result = $this->runtime->request('createReturnPreview', (new ReturnPreviewsCreateInput($input))->toInputArray(), $options); return new SdkResponse($result->data, $result->meta, $result->raw); }
}
