import { d6537 as c0, d6538 as c1 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c2 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c3 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8432 as c4 } from '../descriptors/data/411.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8363 as c5, d8365 as c12, d8366 as c13, d8367 as c14, d8368 as c15 } from '../descriptors/data/407.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6648 as c6 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8355 as c7, d8356 as c8, d8357 as c9, d8358 as c10, d8359 as c11 } from '../descriptors/data/406.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8489 as c16 } from '../descriptors/data/414.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8432 as d8432 } from '../descriptors/data/411.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8432;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ReturnProcessResolutionRequest"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["SharedCodec121"]:c6(),["SharedCodec1523"]:c7(),["SharedCodec1524"]:c8(),["SharedCodec1525"]:c9(),["SharedCodec1526"]:c10(),["SharedCodec1527"]:c11(),["SharedCodec1528"]:c12(),["SharedCodec1529"]:c13(),["SharedCodec1530"]:c14(),["SharedCodec398"]:c15(),["SharedCodec404"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
