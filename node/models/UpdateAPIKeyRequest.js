import { d7993 as c0, d7994 as c1, d8007 as c2, d8008 as c4, d8009 as c5 } from '../descriptors/data/348.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7983 as c3 } from '../descriptors/data/347.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7746 as c6 } from '../descriptors/data/324.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7746 as d7746 } from '../descriptors/data/324.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7746;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3077"]:c0(),["SharedCodec3078"]:c1(),["SharedCodec341"]:c2(),["SharedCodec5"]:c3(),["SharedCodec578"]:c4(),["SharedCodec579"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
