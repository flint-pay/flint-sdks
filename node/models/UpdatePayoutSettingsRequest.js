import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8085 as c1, d8086 as c2, d8087 as c3, d8088 as c4, d8089 as c5, d8090 as c6 } from '../descriptors/data/391.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6683 as c7 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5690 as c8 } from '../descriptors/data/250.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5690 as d5690 } from '../descriptors/data/250.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1778"]:c1(),["SharedCodec1779"]:c2(),["SharedCodec1780"]:c3(),["SharedCodec1781"]:c4(),["SharedCodec1782"]:c5(),["SharedCodec1783"]:c6(),["SharedCodec85"]:c7(),["UpdatePayoutSettingsRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
