import { d8024 as c0, d8025 as c1, d8014 as c4, d8016 as c16, d8017 as c17, d8015 as c18 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8031 as c2, d8036 as c19 } from '../descriptors/data/348.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8663 as c3, d8660 as c7, d8661 as c8, d8662 as c9 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c5 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8235 as c6 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8801 as c10, d8797 as c11 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10879 as c12, d10880 as c13, d10881 as c14, d10882 as c15, d10886 as c21, d10887 as c22, d10888 as c23, d10889 as c24, d10878 as c38 } from '../descriptors/data/513.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8359 as c20 } from '../descriptors/data/366.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8690 as c25, d8682 as c26, d8691 as c27, d8683 as c28, d8684 as c29, d8692 as c30, d8693 as c31, d8694 as c32 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10894 as c33, d10895 as c34, d10896 as c35, d10897 as c36, d10899 as c37 } from '../descriptors/data/514.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10902 as c39, d10904 as c41 } from '../descriptors/data/515.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7944 as c40 } from '../descriptors/data/342.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7803 as c42 } from '../descriptors/data/330.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7803 as d7803 } from '../descriptors/data/330.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7803;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec1454"]:c7(),["SharedCodec1455"]:c8(),["SharedCodec1456"]:c9(),["SharedCodec189"]:c10(),["SharedCodec190"]:c11(),["SharedCodec2955"]:c12(),["SharedCodec2956"]:c13(),["SharedCodec2957"]:c14(),["SharedCodec2958"]:c15(),["SharedCodec3070"]:c16(),["SharedCodec3071"]:c17(),["SharedCodec3072"]:c18(),["SharedCodec3074"]:c19(),["SharedCodec3076"]:c20(),["SharedCodec3202"]:c21(),["SharedCodec3203"]:c22(),["SharedCodec3204"]:c23(),["SharedCodec3205"]:c24(),["SharedCodec481"]:c25(),["SharedCodec482"]:c26(),["SharedCodec483"]:c27(),["SharedCodec484"]:c28(),["SharedCodec485"]:c29(),["SharedCodec497"]:c30(),["SharedCodec498"]:c31(),["SharedCodec499"]:c32(),["SharedCodec581"]:c33(),["SharedCodec582"]:c34(),["SharedCodec583"]:c35(),["SharedCodec584"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
