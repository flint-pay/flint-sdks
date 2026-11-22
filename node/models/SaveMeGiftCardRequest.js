import { d1896 as c0 } from '../descriptors/data/94.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9552 as c1, d9553 as c2, d9554 as c3 } from '../descriptors/data/439.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9555 as c4, d9556 as c5 } from '../descriptors/data/440.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d1896 as d1896 } from '../descriptors/data/94.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1896;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec2825"]:c1(),["SharedCodec2826"]:c2(),["SharedCodec2827"]:c3(),["SharedCodec2828"]:c4(),["SharedCodec2829"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
