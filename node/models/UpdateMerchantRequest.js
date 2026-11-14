import { d6020 as c0, d6018 as c3, d6019 as c4, d6017 as c6 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5928 as c1, d5929 as c2, d5919 as c5 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7567 as c7, d7568 as c8 } from '../descriptors/data/360.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5678 as c9 } from '../descriptors/data/248.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5678 as d5678 } from '../descriptors/data/248.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5678;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["SharedCodec0"]:c3(),["SharedCodec1"]:c4(),["SharedCodec1697"]:c5(),["SharedCodec1700"]:c6(),["SharedCodec1747"]:c7(),["SharedCodec1748"]:c8(),["UpdateMerchantRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateMerchantRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
