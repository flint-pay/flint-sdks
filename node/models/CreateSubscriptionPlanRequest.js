import { d380 as c0 } from '../descriptors/data/24.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5928 as c1, d5929 as c2, d5918 as c5 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5935 as c3 } from '../descriptors/data/266.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6552 as c4, d6549 as c29, d6550 as c30, d6551 as c31 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c6 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6135 as c7 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6689 as c8, d6685 as c9 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8693 as c10, d8694 as c11, d8695 as c12, d8696 as c13, d8697 as c14, d8698 as c15, d8699 as c16, d8692 as c33 } from '../descriptors/data/426.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6576 as c17, d6577 as c18, d6578 as c19, d6579 as c20, d6580 as c21, d6581 as c22 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6582 as c23, d6583 as c24 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8708 as c25, d8709 as c26, d8710 as c27, d8711 as c28, d8713 as c32 } from '../descriptors/data/427.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8716 as c34, d8717 as c35 } from '../descriptors/data/428.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5849 as c36 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d380 as d380 } from '../descriptors/data/24.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec121"]:c8(),["SharedCodec122"]:c9(),["SharedCodec1627"]:c10(),["SharedCodec1628"]:c11(),["SharedCodec1629"]:c12(),["SharedCodec1630"]:c13(),["SharedCodec1631"]:c14(),["SharedCodec1632"]:c15(),["SharedCodec1633"]:c16(),["SharedCodec335"]:c17(),["SharedCodec336"]:c18(),["SharedCodec337"]:c19(),["SharedCodec338"]:c20(),["SharedCodec339"]:c21(),["SharedCodec351"]:c22(),["SharedCodec352"]:c23(),["SharedCodec353"]:c24(),["SharedCodec428"]:c25(),["SharedCodec429"]:c26(),["SharedCodec430"]:c27(),["SharedCodec431"]:c28(),["SharedCodec833"]:c29(),["SharedCodec834"]:c30(),["SharedCodec835"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
