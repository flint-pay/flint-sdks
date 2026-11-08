import { d5695 as c0, d5696 as c1, d5702 as c2 } from '../descriptors/data/249.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6782 as c3, d6779 as c31, d6780 as c32, d6781 as c33 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c4, d5687 as c13, d5688 as c14, d5686 as c15 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c5 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5964 as c6 } from '../descriptors/data/264.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5899 as c7, d5895 as c8 } from '../descriptors/data/260.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8260 as c9, d8261 as c10, d8262 as c11, d8263 as c12, d8259 as c35 } from '../descriptors/data/396.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5707 as c16 } from '../descriptors/data/250.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6073 as c17 } from '../descriptors/data/270.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8267 as c18, d8268 as c19, d8269 as c20, d8270 as c21 } from '../descriptors/data/397.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6376 as c22, d6377 as c23, d6378 as c24, d6379 as c25, d6380 as c26, d6381 as c27, d6382 as c28, d6383 as c29 } from '../descriptors/data/287.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d8275 as c30, d8277 as c34, d8280 as c36, d8282 as c38 } from '../descriptors/data/398.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5616 as c37 } from '../descriptors/data/245.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5492 as c39 } from '../descriptors/data/238.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5492 as d5492 } from '../descriptors/data/238.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5492;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec105"]:c7(),["SharedCodec106"]:c8(),["SharedCodec1495"]:c9(),["SharedCodec1496"]:c10(),["SharedCodec1497"]:c11(),["SharedCodec1498"]:c12(),["SharedCodec1561"]:c13(),["SharedCodec1562"]:c14(),["SharedCodec1563"]:c15(),["SharedCodec1565"]:c16(),["SharedCodec1567"]:c17(),["SharedCodec1681"]:c18(),["SharedCodec1682"]:c19(),["SharedCodec1683"]:c20(),["SharedCodec1684"]:c21(),["SharedCodec294"]:c22(),["SharedCodec295"]:c23(),["SharedCodec296"]:c24(),["SharedCodec297"]:c25(),["SharedCodec298"]:c26(),["SharedCodec310"]:c27(),["SharedCodec311"]:c28(),["SharedCodec312"]:c29(),["SharedCodec381"]:c30(),["SharedCodec772"]:c31(),["SharedCodec773"]:c32(),["SharedCodec774"]:c33(),["SubscriptionEndAfterCyclesRequest"]:c34(),["SubscriptionIntervalOptionRequest"]:c35(),["SubscriptionPlanChangeOptionRequest"]:c36(),["TextModifierRequest"]:c37(),["UpdateSubscriptionPlanLineItemRequest"]:c38(),["UpdateSubscriptionPlanRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
