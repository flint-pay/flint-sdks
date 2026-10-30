import { d5653 as c0, d5654 as c1, d5655 as c2, d5663 as c3, d5664 as c4 } from '../descriptors/data/255.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5655 as d5655 } from '../descriptors/data/255.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1(),["OrderTaxLocationRequest"]:c2(),["SharedCodec912"]:c3(),["SharedCodec913"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
