import { d8114 as c0, d8112 as c3, d8113 as c12 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8838 as c1 } from '../descriptors/data/392.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9688 as c2, d9690 as c27 } from '../descriptors/data/443.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8225 as c4, d8226 as c5 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10951 as c6, d10952 as c7, d10932 as c22, d10933 as c23, d10934 as c24 } from '../descriptors/data/517.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9596 as c8, d9597 as c9, d9598 as c26 } from '../descriptors/data/437.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10928 as c10, d10929 as c11 } from '../descriptors/data/516.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8016 as c13, d8017 as c14, d8015 as c15 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8236 as c16, d8237 as c17 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10957 as c18, d10958 as c19, d10959 as c20, d10960 as c21 } from '../descriptors/data/518.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10986 as c25 } from '../descriptors/data/520.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7804 as c28 } from '../descriptors/data/331.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7804 as d7804 } from '../descriptors/data/331.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec169"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2873"]:c6(),["SharedCodec2874"]:c7(),["SharedCodec2892"]:c8(),["SharedCodec2893"]:c9(),["SharedCodec2979"]:c10(),["SharedCodec2980"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3070"]:c13(),["SharedCodec3071"]:c14(),["SharedCodec3072"]:c15(),["SharedCodec314"]:c16(),["SharedCodec315"]:c17(),["SharedCodec3206"]:c18(),["SharedCodec3207"]:c19(),["SharedCodec3208"]:c20(),["SharedCodec3209"]:c21(),["SharedCodec592"]:c22(),["SharedCodec593"]:c23(),["SharedCodec594"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
