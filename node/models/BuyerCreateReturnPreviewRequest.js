import { d44 as c0 } from '../descriptors/data/1.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6953 as c1 } from '../descriptors/data/317.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6996 as c2 } from '../descriptors/data/323.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7159 as c3, d7161 as c4, d7163 as c5, d7166 as c7, d7168 as c8, d7169 as c9, d7170 as c10, d7171 as c12, d7172 as c14 } from '../descriptors/data/333.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7178 as c6, d7179 as c15 } from '../descriptors/data/334.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7094 as c11, d7095 as c13 } from '../descriptors/data/329.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7102 as c16, d7103 as c17, d7104 as c18, d7105 as c19 } from '../descriptors/data/330.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d44 as d44 } from '../descriptors/data/1.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d44;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1341"]:c7(),["SharedCodec1343"]:c8(),["SharedCodec1344"]:c9(),["SharedCodec1345"]:c10(),["SharedCodec45"]:c11(),["SharedCodec46"]:c12(),["SharedCodec47"]:c13(),["SharedCodec48"]:c14(),["SharedCodec49"]:c15(),["SharedCodec83"]:c16(),["SharedCodec84"]:c17(),["SharedCodec85"]:c18(),["SharedCodec86"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
