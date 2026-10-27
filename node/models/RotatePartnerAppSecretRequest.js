import { d947 as c0, d948 as c1 } from '../descriptors/data/42.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d947 as d947 } from '../descriptors/data/42.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d947;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RotatePartnerAppSecretRequest"]:c0(),["RotateWebhookSecretRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
