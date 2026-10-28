import { d947 as c0, d948 as c1 } from '../descriptors/data/42.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d947 as d947 } from '../descriptors/data/42.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d947;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RotatePartnerAppSecretRequest"]:c0(),["RotateWebhookSecretRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
