import { d221 as c0 } from '../descriptors/data/10.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6279 as c1 } from '../descriptors/data/285.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5893 as c2 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6117 as c3, d6118 as c4, d6119 as c5, d6120 as c6 } from '../descriptors/data/276.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d221 as d221 } from '../descriptors/data/10.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerTaxExemptionRequest"]:c0(),["CustomerTaxExemptionCoverageRequest"]:c1(),["MetadataRequest"]:c2(),["SharedCodec488"]:c3(),["SharedCodec489"]:c4(),["SharedCodec490"]:c5(),["SharedCodec491"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
