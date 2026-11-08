import { d6374 as c0 } from '../descriptors/data/286.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6375 as c1 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c2 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5895 as c3 } from '../descriptors/data/260.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7964 as c4, d7965 as c5, d7966 as c6, d7967 as c7, d7968 as c8 } from '../descriptors/data/381.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5686 as c9 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5790 as c10 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6073 as c11 } from '../descriptors/data/270.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8000 as c12, d8001 as c13, d8002 as c14, d8003 as c15, d8004 as c16 } from '../descriptors/data/383.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8022 as c17, d8023 as c18, d8024 as c19 } from '../descriptors/data/384.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5479 as c20 } from '../descriptors/data/237.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5479 as d5479 } from '../descriptors/data/237.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5479;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec106"]:c3(),["SharedCodec1400"]:c4(),["SharedCodec1401"]:c5(),["SharedCodec1402"]:c6(),["SharedCodec1403"]:c7(),["SharedCodec1404"]:c8(),["SharedCodec1563"]:c9(),["SharedCodec1566"]:c10(),["SharedCodec1567"]:c11(),["SharedCodec1650"]:c12(),["SharedCodec1651"]:c13(),["SharedCodec1652"]:c14(),["SharedCodec1653"]:c15(),["SharedCodec1654"]:c16(),["UpdateReturnReplacementLineItemRequest"]:c17(),["UpdateReturnResolutionAdjustmentRequest"]:c18(),["UpdateReturnResolutionLineItemRequest"]:c19(),["UpdateReturnResolutionRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
