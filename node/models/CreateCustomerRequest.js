import { d3162 as c0 } from '../descriptors/data/125.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d128 as c1 } from '../descriptors/data/5.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3333 as c2 } from '../descriptors/data/134.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3444 as c3, d3446 as c4, d3445 as c5 } from '../descriptors/data/140.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d128 as d128 } from '../descriptors/data/5.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d128;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateCustomerRequest"]:c1(),["DocumentTaxID"]:c2(),["SharedCodec75"]:c3(),["SharedCodec956"]:c4(),["TaxIdentityPatch"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
