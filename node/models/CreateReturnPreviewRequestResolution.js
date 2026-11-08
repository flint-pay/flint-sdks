import { d7159 as c0, d7161 as c6, d7163 as c7, d7166 as c12, d7168 as c13, d7169 as c14, d7170 as c15, d7172 as c30 } from '../descriptors/data/333.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d329 as c1 } from '../descriptors/data/19.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7951 as c2 } from '../descriptors/data/380.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6374 as c3 } from '../descriptors/data/286.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6375 as c4 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c5 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7972 as c8, d7973 as c9, d7974 as c21, d7975 as c22, d7976 as c23, d7977 as c24, d7978 as c26, d7979 as c28, d7980 as c29 } from '../descriptors/data/382.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7178 as c10, d7179 as c31 } from '../descriptors/data/334.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5895 as c11 } from '../descriptors/data/260.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7964 as c16, d7965 as c17, d7966 as c18, d7967 as c19, d7968 as c20, d7961 as c25, d7962 as c27 } from '../descriptors/data/381.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d329 as d329 } from '../descriptors/data/19.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec106"]:c11(),["SharedCodec1341"]:c12(),["SharedCodec1343"]:c13(),["SharedCodec1344"]:c14(),["SharedCodec1345"]:c15(),["SharedCodec1400"]:c16(),["SharedCodec1401"]:c17(),["SharedCodec1402"]:c18(),["SharedCodec1403"]:c19(),["SharedCodec1404"]:c20(),["SharedCodec1405"]:c21(),["SharedCodec1406"]:c22(),["SharedCodec1407"]:c23(),["SharedCodec350"]:c24(),["SharedCodec351"]:c25(),["SharedCodec352"]:c26(),["SharedCodec353"]:c27(),["SharedCodec354"]:c28(),["SharedCodec355"]:c29(),["SharedCodec48"]:c30(),["SharedCodec49"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
