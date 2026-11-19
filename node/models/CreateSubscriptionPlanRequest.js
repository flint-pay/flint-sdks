import { d416 as c0 } from '../descriptors/data/25.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8024 as c1, d8025 as c2, d8014 as c5 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8031 as c3 } from '../descriptors/data/348.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8663 as c4, d8660 as c8, d8661 as c9, d8662 as c10 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c6 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8235 as c7 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8801 as c11, d8797 as c12 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10879 as c13, d10880 as c14, d10881 as c15, d10882 as c16, d10883 as c17, d10884 as c18, d10885 as c19, d10878 as c33 } from '../descriptors/data/513.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8690 as c20, d8682 as c21, d8691 as c22, d8683 as c23, d8684 as c24, d8692 as c25, d8693 as c26, d8694 as c27 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10894 as c28, d10895 as c29, d10896 as c30, d10897 as c31, d10899 as c32 } from '../descriptors/data/514.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10902 as c34, d10903 as c35 } from '../descriptors/data/515.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7944 as c36 } from '../descriptors/data/342.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d416 as d416 } from '../descriptors/data/25.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d416;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec1454"]:c8(),["SharedCodec1455"]:c9(),["SharedCodec1456"]:c10(),["SharedCodec189"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2955"]:c13(),["SharedCodec2956"]:c14(),["SharedCodec2957"]:c15(),["SharedCodec2958"]:c16(),["SharedCodec2960"]:c17(),["SharedCodec2961"]:c18(),["SharedCodec2962"]:c19(),["SharedCodec481"]:c20(),["SharedCodec482"]:c21(),["SharedCodec483"]:c22(),["SharedCodec484"]:c23(),["SharedCodec485"]:c24(),["SharedCodec497"]:c25(),["SharedCodec498"]:c26(),["SharedCodec499"]:c27(),["SharedCodec581"]:c28(),["SharedCodec582"]:c29(),["SharedCodec583"]:c30(),["SharedCodec584"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
