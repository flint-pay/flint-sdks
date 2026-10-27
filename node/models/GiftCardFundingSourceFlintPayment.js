import { d400 as c0 } from '../descriptors/data/22.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3898 as c1 } from '../descriptors/data/164.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d400 as d400 } from '../descriptors/data/22.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d400;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceFlintPayment"]:c0(),["SharedCodec121"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceFlintPayment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
