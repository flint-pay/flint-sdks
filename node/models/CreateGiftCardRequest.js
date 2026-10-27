import { d163 as c0 } from '../descriptors/data/8.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3885 as c1 } from '../descriptors/data/163.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3940 as c2, d3927 as c5, d3928 as c6, d3929 as c7, d3926 as c25, d3930 as c26, d3931 as c27, d3932 as c28 } from '../descriptors/data/166.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3953 as c3, d3960 as c29 } from '../descriptors/data/167.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c4 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3894 as c8, d3895 as c9, d3896 as c10, d3897 as c11, d3898 as c12, d3899 as c13, d3900 as c14, d3901 as c15 } from '../descriptors/data/164.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3902 as c16, d3903 as c17, d3904 as c18, d3905 as c19, d3906 as c20, d3907 as c21, d3908 as c22, d3909 as c23, d3910 as c24 } from '../descriptors/data/165.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d163 as d163 } from '../descriptors/data/8.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardFundingSource"]:c1(),["GiftCardNotificationRecipient"]:c2(),["InitialGiftCardFunding"]:c3(),["MoneyValue"]:c4(),["SharedCodec114"]:c5(),["SharedCodec115"]:c6(),["SharedCodec116"]:c7(),["SharedCodec117"]:c8(),["SharedCodec118"]:c9(),["SharedCodec119"]:c10(),["SharedCodec120"]:c11(),["SharedCodec121"]:c12(),["SharedCodec122"]:c13(),["SharedCodec123"]:c14(),["SharedCodec124"]:c15(),["SharedCodec125"]:c16(),["SharedCodec126"]:c17(),["SharedCodec127"]:c18(),["SharedCodec128"]:c19(),["SharedCodec129"]:c20(),["SharedCodec130"]:c21(),["SharedCodec131"]:c22(),["SharedCodec132"]:c23(),["SharedCodec133"]:c24(),["SharedCodec134"]:c25(),["SharedCodec135"]:c26(),["SharedCodec136"]:c27(),["SharedCodec137"]:c28(),["SharedCodec141"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
