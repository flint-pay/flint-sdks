import { d5928 as c0, d5929 as c1, d5918 as c4, d5920 as c13, d5921 as c14, d5919 as c15 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5935 as c2, d5940 as c16 } from '../descriptors/data/266.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6552 as c3, d6549 as c34, d6550 as c35, d6551 as c36 } from '../descriptors/data/300.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c5 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6135 as c6 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6689 as c7, d6685 as c8 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8693 as c9, d8694 as c10, d8695 as c11, d8696 as c12, d8700 as c18, d8701 as c19, d8702 as c20, d8703 as c21, d8692 as c38 } from '../descriptors/data/426.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6255 as c17 } from '../descriptors/data/284.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6576 as c22, d6577 as c23, d6578 as c24, d6579 as c25, d6580 as c26, d6581 as c27 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6582 as c28, d6583 as c29 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8708 as c30, d8709 as c31, d8710 as c32, d8711 as c33, d8713 as c37 } from '../descriptors/data/427.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8716 as c39, d8718 as c41 } from '../descriptors/data/428.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5849 as c40 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5723 as c42 } from '../descriptors/data/252.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5723 as d5723 } from '../descriptors/data/252.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5723;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec121"]:c7(),["SharedCodec122"]:c8(),["SharedCodec1627"]:c9(),["SharedCodec1628"]:c10(),["SharedCodec1629"]:c11(),["SharedCodec1630"]:c12(),["SharedCodec1695"]:c13(),["SharedCodec1696"]:c14(),["SharedCodec1697"]:c15(),["SharedCodec1699"]:c16(),["SharedCodec1701"]:c17(),["SharedCodec1826"]:c18(),["SharedCodec1827"]:c19(),["SharedCodec1828"]:c20(),["SharedCodec1829"]:c21(),["SharedCodec335"]:c22(),["SharedCodec336"]:c23(),["SharedCodec337"]:c24(),["SharedCodec338"]:c25(),["SharedCodec339"]:c26(),["SharedCodec351"]:c27(),["SharedCodec352"]:c28(),["SharedCodec353"]:c29(),["SharedCodec428"]:c30(),["SharedCodec429"]:c31(),["SharedCodec430"]:c32(),["SharedCodec431"]:c33(),["SharedCodec833"]:c34(),["SharedCodec834"]:c35(),["SharedCodec835"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
