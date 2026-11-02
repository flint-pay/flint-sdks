import { d293 as c0 } from '../descriptors/data/17.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1244 as c1 } from '../descriptors/data/58.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6676 as c2, d6684 as c7 } from '../descriptors/data/317.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6633 as c3 } from '../descriptors/data/314.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6541 as c4, d6542 as c5, d6543 as c6 } from '../descriptors/data/308.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6685 as c8, d6686 as c9, d6687 as c10, d6688 as c11, d6689 as c12 } from '../descriptors/data/318.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5419 as c13 } from '../descriptors/data/243.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d293 as d293 } from '../descriptors/data/17.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1159"]:c4(),["SharedCodec1160"]:c5(),["SharedCodec1161"]:c6(),["SharedCodec1192"]:c7(),["SharedCodec1193"]:c8(),["SharedCodec1194"]:c9(),["SharedCodec1195"]:c10(),["SharedCodec1196"]:c11(),["SharedCodec1197"]:c12(),["SharedCodec231"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
