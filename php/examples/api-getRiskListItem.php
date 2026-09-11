<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetRiskListItemInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetRiskListItemInput([
  'risk_list_id' => 'example',
  'risk_list_item_id' => 'example',
]);
$result = $client->api->getRiskListItem($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->risk_list_id . PHP_EOL;
echo $result->data->data->risk_list_item_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
