import { d7985 as c0, d7986 as c1, d7999 as c2, d8000 as c4, d8001 as c5 } from '../descriptors/data/348.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7975 as c3 } from '../descriptors/data/347.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7737 as c6 } from '../descriptors/data/325.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7737 as d7737 } from '../descriptors/data/325.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3069"]:c0(),["SharedCodec3070"]:c1(),["SharedCodec339"]:c2(),["SharedCodec5"]:c3(),["SharedCodec574"]:c4(),["SharedCodec575"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
