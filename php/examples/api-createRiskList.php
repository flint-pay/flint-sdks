<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateRiskListInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateRiskListInput([
  'body' => (object) [
    'alias' => 'example',
    'name' => 'example',
    'item_type' => 'card_fingerprint',
  ],
]);
$result = $client->api->createRiskList($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->risk_list_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
