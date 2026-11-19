import { d8047 as c0 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8143 as c1 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10032 as c2, d10033 as c3, d10034 as c4, d10035 as c5 } from '../descriptors/data/466.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7774 as c6 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7774 as d7774 } from '../descriptors/data/327.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7774;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3071"]:c0(),["SharedCodec3074"]:c1(),["SharedCodec3140"]:c2(),["SharedCodec3141"]:c3(),["SharedCodec3142"]:c4(),["SharedCodec3143"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
