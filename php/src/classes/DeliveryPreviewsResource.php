<?php
declare(strict_types=1);
namespace Flint;
final class DeliveryPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Computes exact display-only delivery outcomes without persisting a resource, holding inventory, or granting selection authority.
     * @param array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return DeliveryPreview
     */
    public function create(array|Model $params, ?RequestOptions $options = null): DeliveryPreview { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw new SdkError('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('Flint-Version', $rest)) { $input['Flint-Version'] = $rest['Flint-Version']; unset($rest['Flint-Version']); } if (true) $input['body'] = (object) $rest; return SdkResponse::payload($this->runtime->request('createDeliveryPreview', $input instanceof DeliveryPreviewsCreateInput ? $input->toInputArray() : (new DeliveryPreviewsCreateInput($input))->toInputArray(), $options), ['data']); }
    /** @return SdkResponse<DeliveryPreviewsCreateResponse200> */
    public function createWithResponse(array|Model $params, ?RequestOptions $options = null): SdkResponse { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw new SdkError('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('Flint-Version', $rest)) { $input['Flint-Version'] = $rest['Flint-Version']; unset($rest['Flint-Version']); } if (true) $input['body'] = (object) $rest; $result = $this->runtime->request('createDeliveryPreview', $input instanceof DeliveryPreviewsCreateInput ? $input->toInputArray() : (new DeliveryPreviewsCreateInput($input))->toInputArray(), $options); return new SdkResponse($result->data, $result->meta, $result->raw); }
}
