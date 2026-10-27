import { d4659 as c0 } from '../descriptors/data/207.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4659 as d4659 } from '../descriptors/data/207.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkLegalPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLegalPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
