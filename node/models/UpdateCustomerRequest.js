import { d8468 as c0, d8459 as c1, d8460 as c2, d8469 as c8, d8470 as c9 } from '../descriptors/data/375.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8144 as c3, d8145 as c4 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8048 as c5, d8049 as c6, d8047 as c7 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8427 as c10, d8428 as c11, d8429 as c12 } from '../descriptors/data/373.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7742 as c13 } from '../descriptors/data/325.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7742 as d7742 } from '../descriptors/data/325.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7742;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1717"]:c1(),["SharedCodec1718"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3069"]:c5(),["SharedCodec3070"]:c6(),["SharedCodec3071"]:c7(),["SharedCodec3076"]:c8(),["SharedCodec3077"]:c9(),["SharedCodec3078"]:c10(),["SharedCodec3079"]:c11(),["SharedCodec3080"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
