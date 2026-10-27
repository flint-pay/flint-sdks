import { d762 as c0 } from '../descriptors/data/32.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d762 as d762 } from '../descriptors/data/32.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d762;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LinkCustomerGuestPurchasesRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLinkCustomerGuestPurchasesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
