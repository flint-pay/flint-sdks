import { d8146 as c0, d8144 as c1, d8145 as c2, d8143 as c4 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8047 as c3 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9449 as c5, d9450 as c6, d9451 as c7, d9452 as c8 } from '../descriptors/data/429.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7764 as c9 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7764 as d7764 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["SharedCodec3071"]:c3(),["SharedCodec3074"]:c4(),["SharedCodec3123"]:c5(),["SharedCodec3124"]:c6(),["SharedCodec3125"]:c7(),["SharedCodec3126"]:c8(),["UpdateLocationRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
