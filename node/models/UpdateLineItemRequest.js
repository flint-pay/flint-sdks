import { d8014 as c0, d8015 as c4 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9860 as c2 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9869 as c3 } from '../descriptors/data/454.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8111 as c5 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9907 as c6, d9908 as c7, d9909 as c8, d9910 as c9, d9911 as c10, d9912 as c11, d9913 as c12, d9914 as c13, d9915 as c14, d9916 as c16 } from '../descriptors/data/455.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9769 as c15 } from '../descriptors/data/447.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8690 as c17, d8682 as c18, d8691 as c19, d8683 as c20, d8684 as c21 } from '../descriptors/data/384.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9957 as c22, d9958 as c23 } from '../descriptors/data/457.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9959 as c24 } from '../descriptors/data/458.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7944 as c25 } from '../descriptors/data/342.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7753 as c26 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7753 as d7753 } from '../descriptors/data/326.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec3072"]:c4(),["SharedCodec3075"]:c5(),["SharedCodec3107"]:c6(),["SharedCodec3108"]:c7(),["SharedCodec3109"]:c8(),["SharedCodec3110"]:c9(),["SharedCodec3111"]:c10(),["SharedCodec3112"]:c11(),["SharedCodec3113"]:c12(),["SharedCodec3114"]:c13(),["SharedCodec3115"]:c14(),["SharedCodec3116"]:c15(),["SharedCodec3117"]:c16(),["SharedCodec481"]:c17(),["SharedCodec482"]:c18(),["SharedCodec483"]:c19(),["SharedCodec484"]:c20(),["SharedCodec485"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
