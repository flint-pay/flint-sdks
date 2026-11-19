import { d8461 as c0 } from '../descriptors/data/375.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9376 as c1 } from '../descriptors/data/425.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9384 as c2, d9385 as c3, d9386 as c4, d9387 as c5, d9388 as c6, d9389 as c7, d9390 as c8 } from '../descriptors/data/426.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8296 as c9, d8297 as c10, d8298 as c11, d8299 as c12 } from '../descriptors/data/366.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9376 as d9376 } from '../descriptors/data/425.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9376;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1968"]:c2(),["SharedCodec1969"]:c3(),["SharedCodec1970"]:c4(),["SharedCodec1971"]:c5(),["SharedCodec1975"]:c6(),["SharedCodec1976"]:c7(),["SharedCodec1977"]:c8(),["SharedCodec685"]:c9(),["SharedCodec686"]:c10(),["SharedCodec687"]:c11(),["SharedCodec688"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
