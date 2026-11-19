import { d8146 as c0, d8144 as c3, d8145 as c4, d8143 as c6 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8459 as c1, d8460 as c2 } from '../descriptors/data/375.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8047 as c5 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8970 as c7, d8971 as c8, d8972 as c9, d8973 as c10, d8974 as c11, d8975 as c12, d8976 as c13, d8977 as c14, d8978 as c15, d8979 as c16 } from '../descriptors/data/404.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7751 as c17 } from '../descriptors/data/325.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7751 as d7751 } from '../descriptors/data/325.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7751;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1717"]:c1(),["SharedCodec1718"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3071"]:c5(),["SharedCodec3074"]:c6(),["SharedCodec3090"]:c7(),["SharedCodec3091"]:c8(),["SharedCodec3092"]:c9(),["SharedCodec3093"]:c10(),["SharedCodec3094"]:c11(),["SharedCodec3095"]:c12(),["SharedCodec3096"]:c13(),["SharedCodec3097"]:c14(),["SharedCodec3098"]:c15(),["SharedCodec3099"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
