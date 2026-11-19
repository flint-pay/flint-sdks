import { d8461 as c0 } from '../descriptors/data/375.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1383 as c1 } from '../descriptors/data/68.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9386 as c2 } from '../descriptors/data/426.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8296 as c3, d8297 as c4, d8298 as c5, d8299 as c6 } from '../descriptors/data/366.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1383 as d1383 } from '../descriptors/data/68.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionInputOrder"]:c1(),["SharedCodec1970"]:c2(),["SharedCodec685"]:c3(),["SharedCodec686"]:c4(),["SharedCodec687"]:c5(),["SharedCodec688"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
