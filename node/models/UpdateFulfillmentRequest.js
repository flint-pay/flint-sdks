import { d8148 as c0, d8146 as c3, d8147 as c4, d8145 as c6 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8461 as c1, d8462 as c2 } from '../descriptors/data/376.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8049 as c5 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8972 as c7, d8973 as c8, d8974 as c9, d8975 as c10, d8976 as c11, d8977 as c12, d8978 as c13, d8979 as c14, d8980 as c15, d8981 as c16 } from '../descriptors/data/405.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7753 as c17 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7753 as d7753 } from '../descriptors/data/326.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1717"]:c1(),["SharedCodec1718"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3073"]:c5(),["SharedCodec3076"]:c6(),["SharedCodec3092"]:c7(),["SharedCodec3093"]:c8(),["SharedCodec3094"]:c9(),["SharedCodec3095"]:c10(),["SharedCodec3096"]:c11(),["SharedCodec3097"]:c12(),["SharedCodec3098"]:c13(),["SharedCodec3099"]:c14(),["SharedCodec3100"]:c15(),["SharedCodec3101"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
