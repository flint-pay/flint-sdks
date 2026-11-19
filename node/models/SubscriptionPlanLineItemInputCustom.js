import { d8014 as c0 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8235 as c2 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8801 as c3, d8797 as c4 } from '../descriptors/data/390.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8690 as c5, d8682 as c6, d8691 as c7, d8683 as c8, d8684 as c9, d8692 as c10, d8693 as c11, d8694 as c12 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7620 as c13 } from '../descriptors/data/319.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7944 as c14 } from '../descriptors/data/342.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7620 as d7620 } from '../descriptors/data/319.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7620;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec189"]:c3(),["SharedCodec190"]:c4(),["SharedCodec481"]:c5(),["SharedCodec482"]:c6(),["SharedCodec483"]:c7(),["SharedCodec484"]:c8(),["SharedCodec485"]:c9(),["SharedCodec497"]:c10(),["SharedCodec498"]:c11(),["SharedCodec499"]:c12(),["SubscriptionPlanLineItemInputCustom"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
