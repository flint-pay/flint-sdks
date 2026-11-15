import { d5923 as c0, d5924 as c1, d5913 as c4, d5915 as c13, d5916 as c14, d5914 as c15 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5930 as c2, d5935 as c16 } from '../descriptors/data/268.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6557 as c3, d6554 as c34, d6555 as c35, d6556 as c36 } from '../descriptors/data/302.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c5 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6131 as c6 } from '../descriptors/data/280.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6699 as c7 } from '../descriptors/data/311.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6695 as c8 } from '../descriptors/data/310.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8692 as c9, d8693 as c10, d8694 as c11, d8695 as c12, d8691 as c38 } from '../descriptors/data/427.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6254 as c17 } from '../descriptors/data/286.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8699 as c18, d8700 as c19, d8701 as c20, d8702 as c21 } from '../descriptors/data/428.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6581 as c22, d6582 as c23, d6583 as c24, d6584 as c25, d6585 as c26, d6586 as c27, d6587 as c28, d6588 as c29 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8707 as c30, d8708 as c31, d8709 as c32, d8710 as c33, d8712 as c37, d8715 as c39, d8717 as c41 } from '../descriptors/data/429.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5844 as c40 } from '../descriptors/data/262.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5707 as c42 } from '../descriptors/data/251.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5707 as d5707 } from '../descriptors/data/251.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5707;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec115"]:c7(),["SharedCodec116"]:c8(),["SharedCodec1610"]:c9(),["SharedCodec1611"]:c10(),["SharedCodec1612"]:c11(),["SharedCodec1613"]:c12(),["SharedCodec1678"]:c13(),["SharedCodec1679"]:c14(),["SharedCodec1680"]:c15(),["SharedCodec1682"]:c16(),["SharedCodec1684"]:c17(),["SharedCodec1809"]:c18(),["SharedCodec1810"]:c19(),["SharedCodec1811"]:c20(),["SharedCodec1812"]:c21(),["SharedCodec327"]:c22(),["SharedCodec328"]:c23(),["SharedCodec329"]:c24(),["SharedCodec330"]:c25(),["SharedCodec331"]:c26(),["SharedCodec343"]:c27(),["SharedCodec344"]:c28(),["SharedCodec345"]:c29(),["SharedCodec426"]:c30(),["SharedCodec427"]:c31(),["SharedCodec428"]:c32(),["SharedCodec429"]:c33(),["SharedCodec834"]:c34(),["SharedCodec835"]:c35(),["SharedCodec836"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
