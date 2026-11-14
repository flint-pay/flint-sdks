import { d6336 as c0 } from '../descriptors/data/288.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6656 as c1, d6655 as c2, d6657 as c5 } from '../descriptors/data/306.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8818 as c3 } from '../descriptors/data/434.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5725 as c4 } from '../descriptors/data/253.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5725 as d5725 } from '../descriptors/data/253.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5725;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1708"]:c0(),["SharedCodec1714"]:c1(),["SharedCodec1715"]:c2(),["TaxCalculationCallbackConfigurationPatchRequest"]:c3(),["UpdateTaxCalculationCallbackRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
