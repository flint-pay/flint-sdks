import { d4539 as c0, d4540 as c1 } from '../descriptors/data/200.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4539 as d4539 } from '../descriptors/data/200.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4539;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceCredential"]:c0(),["SharedCodec1009"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
