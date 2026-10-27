import { d4668 as c0 } from '../descriptors/data/208.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4668 as d4668 } from '../descriptors/data/208.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4668;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkThemeConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkThemeConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
