<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdatePromotionCodeInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiUpdatePromotionCodeInput([
  'promotion_id' => 'example',
  'promotion_code_id' => 'example',
  'body' => (object) [],
]);
$result = $client->api->updatePromotionCode($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->promotion_code_id . PHP_EOL;
echo $result->data->data->promotion_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
