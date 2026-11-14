import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7885 as c1 } from '../descriptors/data/378.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7909 as c2, d7910 as c3, d7911 as c4, d7912 as c5, d7913 as c6, d7914 as c7, d7915 as c8, d7916 as c9, d7917 as c10, d7918 as c11, d7919 as c12, d7920 as c13 } from '../descriptors/data/379.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5685 as c14 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5685 as d5685 } from '../descriptors/data/249.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec1764"]:c2(),["SharedCodec1765"]:c3(),["SharedCodec1766"]:c4(),["SharedCodec1767"]:c5(),["SharedCodec1768"]:c6(),["SharedCodec1769"]:c7(),["SharedCodec1770"]:c8(),["SharedCodec1771"]:c9(),["SharedCodec1772"]:c10(),["SharedCodec1773"]:c11(),["SharedCodec1774"]:c12(),["SharedCodec1775"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
