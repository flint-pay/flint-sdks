import { d741 as c0, d737 as c1, d738 as c2, d739 as c3, d740 as c4, d227 as c5 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d741 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d741;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["SharedCodec235"]:c1(),["SharedCodec236"]:c2(),["SharedCodec237"]:c3(),["SharedCodec238"]:c4(),["SharedCodec58"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContext(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
