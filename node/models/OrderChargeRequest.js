import { d8014 as c0 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c1 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9859 as c2, d9861 as c3 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9876 as c4, d9877 as c5 } from '../descriptors/data/454.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9359 as c6, d9361 as c7 } from '../descriptors/data/421.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9957 as c8, d9958 as c9 } from '../descriptors/data/457.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9959 as c10 } from '../descriptors/data/458.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9861 as d9861 } from '../descriptors/data/453.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9861;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTaxRequest"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec1872"]:c4(),["SharedCodec1873"]:c5(),["SharedCodec504"]:c6(),["SharedCodec506"]:c7(),["TaxCalculationRequestRequest"]:c8(),["TaxComponentRequestRequest"]:c9(),["TaxJurisdictionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
