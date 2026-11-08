import { d358 as c0 } from '../descriptors/data/21.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5695 as c1, d5696 as c2, d5702 as c3 } from '../descriptors/data/249.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6782 as c4, d6779 as c26, d6780 as c27, d6781 as c28 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c5 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c6 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5964 as c7 } from '../descriptors/data/264.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5899 as c8, d5895 as c9 } from '../descriptors/data/260.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8260 as c10, d8261 as c11, d8262 as c12, d8263 as c13, d8264 as c14, d8259 as c30 } from '../descriptors/data/396.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8265 as c15, d8266 as c16 } from '../descriptors/data/397.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6376 as c17, d6377 as c18, d6378 as c19, d6379 as c20, d6380 as c21, d6381 as c22, d6382 as c23, d6383 as c24 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8275 as c25, d8277 as c29, d8280 as c31, d8281 as c32 } from '../descriptors/data/398.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5616 as c33 } from '../descriptors/data/245.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d358 as d358 } from '../descriptors/data/21.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec105"]:c8(),["SharedCodec106"]:c9(),["SharedCodec1495"]:c10(),["SharedCodec1496"]:c11(),["SharedCodec1497"]:c12(),["SharedCodec1498"]:c13(),["SharedCodec1499"]:c14(),["SharedCodec1500"]:c15(),["SharedCodec1501"]:c16(),["SharedCodec294"]:c17(),["SharedCodec295"]:c18(),["SharedCodec296"]:c19(),["SharedCodec297"]:c20(),["SharedCodec298"]:c21(),["SharedCodec310"]:c22(),["SharedCodec311"]:c23(),["SharedCodec312"]:c24(),["SharedCodec381"]:c25(),["SharedCodec772"]:c26(),["SharedCodec773"]:c27(),["SharedCodec774"]:c28(),["SubscriptionEndAfterCyclesRequest"]:c29(),["SubscriptionIntervalOptionRequest"]:c30(),["SubscriptionPlanChangeOptionRequest"]:c31(),["SubscriptionPlanLineItemRequest"]:c32(),["TextModifierRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
