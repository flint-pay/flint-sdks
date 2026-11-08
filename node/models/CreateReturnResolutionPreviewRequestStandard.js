import { d337 as c0 } from '../descriptors/data/19.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6374 as c1 } from '../descriptors/data/286.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6375 as c2 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c3 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7972 as c4, d7973 as c5, d7974 as c13, d7975 as c14, d7976 as c15, d7977 as c16, d7978 as c17 } from '../descriptors/data/382.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7178 as c6, d7179 as c18 } from '../descriptors/data/334.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5895 as c7 } from '../descriptors/data/260.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7964 as c8, d7965 as c9, d7966 as c10, d7967 as c11, d7968 as c12 } from '../descriptors/data/381.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d337 as d337 } from '../descriptors/data/19.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d337;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec106"]:c7(),["SharedCodec1400"]:c8(),["SharedCodec1401"]:c9(),["SharedCodec1402"]:c10(),["SharedCodec1403"]:c11(),["SharedCodec1404"]:c12(),["SharedCodec1405"]:c13(),["SharedCodec1406"]:c14(),["SharedCodec1407"]:c15(),["SharedCodec350"]:c16(),["SharedCodec352"]:c17(),["SharedCodec49"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
