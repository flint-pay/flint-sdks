import { d8158 as c0, d8156 as c3, d8157 as c4, d8155 as c6 } from '../descriptors/data/359.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8471 as c1, d8472 as c2 } from '../descriptors/data/376.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8057 as c5 } from '../descriptors/data/352.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8984 as c7, d8985 as c8, d8986 as c9, d8987 as c10, d8988 as c11, d8989 as c12, d8990 as c13, d8991 as c14, d8992 as c15, d8993 as c16 } from '../descriptors/data/405.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7762 as c17 } from '../descriptors/data/326.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7762 as d7762 } from '../descriptors/data/326.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7762;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1722"]:c1(),["SharedCodec1723"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3081"]:c5(),["SharedCodec3084"]:c6(),["SharedCodec3100"]:c7(),["SharedCodec3101"]:c8(),["SharedCodec3102"]:c9(),["SharedCodec3103"]:c10(),["SharedCodec3104"]:c11(),["SharedCodec3105"]:c12(),["SharedCodec3106"]:c13(),["SharedCodec3107"]:c14(),["SharedCodec3108"]:c15(),["SharedCodec3109"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
