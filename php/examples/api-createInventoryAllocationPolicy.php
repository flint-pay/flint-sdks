<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateInventoryAllocationPolicyInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCreateInventoryAllocationPolicyInput((array) json_decode('{"body":{"configuration":{"location_groups":[{"group_priority":1,"location_id":"example"}],"maximum_locations_per_assignment":1,"splitting_behavior":"single_location"},"name":"example"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->createInventoryAllocationPolicy($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
