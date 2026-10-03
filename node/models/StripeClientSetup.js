import { d2286 as c0, d2287 as c1, d2288 as c2 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2287 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["StripeClientAuthority"]:c0(),["StripeClientSetup"]:c1(),["StripeClientSetupStripe"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeStripeClientSetup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
