<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiRevokeDeliveryDependencyInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiRevokeDeliveryDependencyInput((array) json_decode('{"body":{"reason":"unsafe_configuration","target":{"target_type":"location_geography","location_id":"example","location_geography_revision":"100"}}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->revokeDeliveryDependency($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
