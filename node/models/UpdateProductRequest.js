import { d8066 as c0, d8067 as c1, d8073 as c2, d8078 as c6 } from '../descriptors/data/353.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8058 as c3, d8059 as c4, d8057 as c5 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10392 as c7, d10393 as c8 } from '../descriptors/data/487.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10411 as c9, d10412 as c10 } from '../descriptors/data/489.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7795 as c11 } from '../descriptors/data/329.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7795 as d7795 } from '../descriptors/data/329.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7795;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["SharedCodec3079"]:c3(),["SharedCodec3080"]:c4(),["SharedCodec3081"]:c5(),["SharedCodec3083"]:c6(),["SharedCodec3177"]:c7(),["SharedCodec3178"]:c8(),["UpdateProductOptionRequest"]:c9(),["UpdateProductOptionValueRequest"]:c10(),["UpdateProductRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
