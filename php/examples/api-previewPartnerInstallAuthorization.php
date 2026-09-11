<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiPreviewPartnerInstallAuthorizationInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$input = new ApiPreviewPartnerInstallAuthorizationInput([
  'client_id' => 'example',
  'redirect_uri' => 'example',
  'mode' => 'test',
]);
$result = $client->api->previewPartnerInstallAuthorization($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->client_id . PHP_EOL;
echo $result->data->data->partner_app_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
