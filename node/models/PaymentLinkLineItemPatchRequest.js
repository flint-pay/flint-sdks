import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6135 as c1 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7985 as c2 } from '../descriptors/data/383.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8011 as c3 } from '../descriptors/data/385.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8016 as c4, d8017 as c5, d8019 as c6, d8020 as c7, d8021 as c8, d8022 as c9, d8023 as c10, d8024 as c11 } from '../descriptors/data/386.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8025 as c12, d8026 as c13, d8027 as c14 } from '../descriptors/data/387.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7985 as d7985 } from '../descriptors/data/383.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7985;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1195"]:c3(),["SharedCodec1200"]:c4(),["SharedCodec1201"]:c5(),["SharedCodec1203"]:c6(),["SharedCodec1204"]:c7(),["SharedCodec1205"]:c8(),["SharedCodec1206"]:c9(),["SharedCodec1207"]:c10(),["SharedCodec1208"]:c11(),["SharedCodec1209"]:c12(),["SharedCodec1210"]:c13(),["SharedCodec1211"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
