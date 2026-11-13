<?php
declare(strict_types=1);
$autoload = __DIR__;
while (!is_file($autoload . '/vendor/autoload.php') && !is_file($autoload . '/autoload.php')) {
    $parent = dirname($autoload);
    if ($parent === $autoload) throw new \RuntimeException('Run composer install in the application before running this example.');
    $autoload = $parent;
}
require_once is_file($autoload . '/vendor/autoload.php') ? $autoload . '/vendor/autoload.php' : $autoload . '/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('FLINT_BASE_URL') ?: null;
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->merchantSignups->create([
  'business_name' => 'Tidewater Yoga',
  'code_challenge' => 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM',
  'code_challenge_method' => 'S256',
  'external_reference_id' => 'studio_8812',
  'modes' => [
    'test',
    'live',
  ],
  'owner' => (object) [
    'email' => 'maya@tidewateryoga.example',
    'first_name' => 'Maya',
    'last_name' => 'Okafor',
  ],
  'partner_app_id' => 'papp_01KEZF7C00D8DXK5AXR7NPRJ0J',
  'requested_permission_ids' => [
    'setup_payments',
    'sell',
  ],
  'sandbox_initial_onboarding' => 'not_started',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->merchant_signup_id . PHP_EOL;
echo $result->partner_app_id . PHP_EOL;
$client->close();
