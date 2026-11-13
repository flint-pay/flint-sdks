import { d7939 as c0 } from '../descriptors/data/380.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7939 as d7939 } from '../descriptors/data/380.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7939;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkCustomTextConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkCustomTextConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
