import { d4232 as c0, d4233 as c1, d4234 as c2, d4235 as c3, d4236 as c4, d4237 as c5 } from '../descriptors/data/180.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2454 as c6 } from '../descriptors/data/98.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2454 as d2454 } from '../descriptors/data/98.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2454;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LocationAddressRequest"]:c0(),["LocationCoordinate"]:c1(),["SharedCodec1201"]:c2(),["SharedCodec1202"]:c3(),["SharedCodec1203"]:c4(),["SharedCodec1204"]:c5(),["UpdateLocationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
