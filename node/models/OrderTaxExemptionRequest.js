import { d6279 as c0 } from '../descriptors/data/285.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7197 as c1 } from '../descriptors/data/335.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7205 as c2, d7206 as c3, d7207 as c4, d7208 as c5, d7209 as c6, d7210 as c7, d7211 as c8 } from '../descriptors/data/336.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6117 as c9, d6118 as c10, d6119 as c11, d6120 as c12 } from '../descriptors/data/276.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7197 as d7197 } from '../descriptors/data/335.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1096"]:c2(),["SharedCodec1097"]:c3(),["SharedCodec1098"]:c4(),["SharedCodec1099"]:c5(),["SharedCodec1100"]:c6(),["SharedCodec1101"]:c7(),["SharedCodec1102"]:c8(),["SharedCodec488"]:c9(),["SharedCodec489"]:c10(),["SharedCodec490"]:c11(),["SharedCodec491"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
