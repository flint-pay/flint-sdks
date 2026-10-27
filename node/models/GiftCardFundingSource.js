import { d3885 as c0 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3894 as c1, d3895 as c2, d3896 as c3, d3897 as c4, d3898 as c5, d3899 as c6, d3900 as c7, d3901 as c8 } from '../descriptors/data/164.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3902 as c9, d3903 as c10, d3904 as c11, d3905 as c12, d3906 as c13, d3907 as c14, d3908 as c15, d3909 as c16, d3910 as c17 } from '../descriptors/data/165.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3885 as d3885 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3885;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec117"]:c1(),["SharedCodec118"]:c2(),["SharedCodec119"]:c3(),["SharedCodec120"]:c4(),["SharedCodec121"]:c5(),["SharedCodec122"]:c6(),["SharedCodec123"]:c7(),["SharedCodec124"]:c8(),["SharedCodec125"]:c9(),["SharedCodec126"]:c10(),["SharedCodec127"]:c11(),["SharedCodec128"]:c12(),["SharedCodec129"]:c13(),["SharedCodec130"]:c14(),["SharedCodec131"]:c15(),["SharedCodec132"]:c16(),["SharedCodec133"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
