import { d6374 as c0 } from '../descriptors/data/286.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6375 as c1 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c2 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7972 as c3, d7974 as c10, d7975 as c11, d7976 as c12 } from '../descriptors/data/382.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5895 as c4 } from '../descriptors/data/260.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7964 as c5, d7965 as c6, d7966 as c7, d7967 as c8, d7968 as c9 } from '../descriptors/data/381.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7972 as d7972 } from '../descriptors/data/382.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7972;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["ReturnReplacementLineItemRequest"]:c3(),["SharedCodec106"]:c4(),["SharedCodec1400"]:c5(),["SharedCodec1401"]:c6(),["SharedCodec1402"]:c7(),["SharedCodec1403"]:c8(),["SharedCodec1404"]:c9(),["SharedCodec1405"]:c10(),["SharedCodec1406"]:c11(),["SharedCodec1407"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
