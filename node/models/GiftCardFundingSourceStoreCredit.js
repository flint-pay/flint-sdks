import { d404 as c0 } from '../descriptors/data/22.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3910 as c1 } from '../descriptors/data/165.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d404 as d404 } from '../descriptors/data/22.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceStoreCredit"]:c0(),["SharedCodec133"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceStoreCredit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
