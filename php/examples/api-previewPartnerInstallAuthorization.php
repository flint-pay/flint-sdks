<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiPreviewPartnerInstallAuthorizationInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', token: getenv('API_TOKEN') ?: null, allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiPreviewPartnerInstallAuthorizationInput((array) json_decode('{"client_id":"example","redirect_uri":"example","mode":"test"}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->previewPartnerInstallAuthorization($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
