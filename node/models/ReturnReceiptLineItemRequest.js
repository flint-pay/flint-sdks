import { d8434 as c0 } from '../descriptors/data/411.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8390 as c1 } from '../descriptors/data/408.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8444 as c2, d8445 as c3, d8446 as c4, d8447 as c5, d8448 as c6, d8449 as c7 } from '../descriptors/data/412.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8434 as d8434 } from '../descriptors/data/411.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1506"]:c2(),["SharedCodec1507"]:c3(),["SharedCodec1508"]:c4(),["SharedCodec1509"]:c5(),["SharedCodec1510"]:c6(),["SharedCodec1511"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
