<?php
declare(strict_types=1);
namespace Flint;
final class DeliveryPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Computes delivery options with mode delivery_options or up to 25 pickup locations with mode pickup_locations. Creates no resource, holds no inventory, and does not change the current selection. Pickup locations are nearest first when a buyer location is provided. Merchant callers receive diagnostics. Checkout credentials may use only pickup_locations for their own checkout session.
     * @param DeliveryPreviewsCreateParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return DeliveryPreviewResponseDataDeliveryOptions|DeliveryPreviewResponseDataPickupLocations|Model
     */
    public function create(array|Model $params, ?RequestOptions $options = null): DeliveryPreviewResponseDataDeliveryOptions|DeliveryPreviewResponseDataPickupLocations|Model { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('createDeliveryPreview', $input, $options), ['data']); }
}
