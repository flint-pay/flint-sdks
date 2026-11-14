import { d7723 as c0 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7723 as d7723 } from '../descriptors/data/369.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7723;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredentialToken"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredentialToken(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
