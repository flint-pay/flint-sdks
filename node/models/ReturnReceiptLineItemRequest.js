import { d1244 as c0 } from '../descriptors/data/58.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6633 as c1 } from '../descriptors/data/314.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6684 as c2 } from '../descriptors/data/317.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6685 as c3, d6686 as c4, d6687 as c5, d6688 as c6, d6689 as c7 } from '../descriptors/data/318.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1244 as d1244 } from '../descriptors/data/58.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1192"]:c2(),["SharedCodec1193"]:c3(),["SharedCodec1194"]:c4(),["SharedCodec1195"]:c5(),["SharedCodec1196"]:c6(),["SharedCodec1197"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
