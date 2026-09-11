<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiResolvePromotionCodeInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiResolvePromotionCodeInput([
  'code' => 'example',
]);
$result = $client->api->resolvePromotionCode($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->promotion->promotion_id . PHP_EOL;
echo $result->data->data->promotion->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
