import { d6020 as c0, d6018 as c1, d6019 as c2, d6017 as c5 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6314 as c3, d6315 as c16 } from '../descriptors/data/287.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5919 as c4 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6836 as c6, d6837 as c7, d6838 as c8, d6839 as c9, d6840 as c10, d6841 as c11, d6842 as c12, d6843 as c13, d6844 as c14, d6845 as c15 } from '../descriptors/data/318.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5663 as c17 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5663 as d5663 } from '../descriptors/data/247.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5663;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1697"]:c4(),["SharedCodec1700"]:c5(),["SharedCodec1716"]:c6(),["SharedCodec1717"]:c7(),["SharedCodec1718"]:c8(),["SharedCodec1719"]:c9(),["SharedCodec1720"]:c10(),["SharedCodec1721"]:c11(),["SharedCodec1722"]:c12(),["SharedCodec1723"]:c13(),["SharedCodec1724"]:c14(),["SharedCodec1725"]:c15(),["SharedCodec999"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
