import { d5085 as c0 } from '../descriptors/data/233.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5085 as d5085 } from '../descriptors/data/233.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5085;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReceiptSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiptSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
