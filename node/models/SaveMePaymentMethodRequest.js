import { d955 as c0 } from '../descriptors/data/43.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d955 as d955 } from '../descriptors/data/43.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d955;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMePaymentMethodRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMePaymentMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
