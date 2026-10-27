import { d157 as c0 } from '../descriptors/data/7.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3885 as c1 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c2 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3927 as c3, d3928 as c4, d3929 as c5, d3926 as c23, d3930 as c24, d3931 as c25, d3932 as c26 } from '../descriptors/data/166.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3894 as c6, d3895 as c7, d3896 as c8, d3897 as c9, d3898 as c10, d3899 as c11, d3900 as c12, d3901 as c13 } from '../descriptors/data/164.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3902 as c14, d3903 as c15, d3904 as c16, d3905 as c17, d3906 as c18, d3907 as c19, d3908 as c20, d3909 as c21, d3910 as c22 } from '../descriptors/data/165.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d157 as d157 } from '../descriptors/data/7.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d157;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["GiftCardFundingSource"]:c1(),["MoneyValue"]:c2(),["SharedCodec114"]:c3(),["SharedCodec115"]:c4(),["SharedCodec116"]:c5(),["SharedCodec117"]:c6(),["SharedCodec118"]:c7(),["SharedCodec119"]:c8(),["SharedCodec120"]:c9(),["SharedCodec121"]:c10(),["SharedCodec122"]:c11(),["SharedCodec123"]:c12(),["SharedCodec124"]:c13(),["SharedCodec125"]:c14(),["SharedCodec126"]:c15(),["SharedCodec127"]:c16(),["SharedCodec128"]:c17(),["SharedCodec129"]:c18(),["SharedCodec130"]:c19(),["SharedCodec131"]:c20(),["SharedCodec132"]:c21(),["SharedCodec133"]:c22(),["SharedCodec134"]:c23(),["SharedCodec135"]:c24(),["SharedCodec136"]:c25(),["SharedCodec137"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
