<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateDeliveryMethodInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCreateDeliveryMethodInput((array) json_decode('{"body":{"configuration":{"minimum_option_lifetime_seconds":"120","origin":{"location_id":"loc_01K1P6G4M7H2N8Q9R3S5T6V7WX","type":"fixed_location"},"pricing":{"calculated":{},"type":"calculated"}},"name":"Standard shipping","type":"shipment"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->createDeliveryMethod($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
