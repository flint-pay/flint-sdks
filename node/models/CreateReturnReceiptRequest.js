import { d350 as c0 } from '../descriptors/data/22.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8434 as c1 } from '../descriptors/data/411.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8436 as c2, d8444 as c7, d8445 as c8, d8446 as c9, d8447 as c10, d8448 as c11, d8449 as c12 } from '../descriptors/data/412.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8390 as c3 } from '../descriptors/data/408.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8296 as c4, d8297 as c5, d8298 as c6 } from '../descriptors/data/402.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6978 as c13 } from '../descriptors/data/325.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d350 as d350 } from '../descriptors/data/22.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec1468"]:c4(),["SharedCodec1469"]:c5(),["SharedCodec1470"]:c6(),["SharedCodec1506"]:c7(),["SharedCodec1507"]:c8(),["SharedCodec1508"]:c9(),["SharedCodec1509"]:c10(),["SharedCodec1510"]:c11(),["SharedCodec1511"]:c12(),["SharedCodec304"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
