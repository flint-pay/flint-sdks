import { d5941 as c0, d5942 as c4 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7736 as c2, d7745 as c3 } from '../descriptors/data/371.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c5 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7783 as c6, d7784 as c7, d7785 as c8, d7786 as c9, d7787 as c10, d7788 as c11, d7789 as c12, d7790 as c13, d7791 as c14, d7792 as c16 } from '../descriptors/data/373.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7646 as c15 } from '../descriptors/data/365.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6609 as c17, d6610 as c18, d6611 as c19, d6612 as c20, d6613 as c21 } from '../descriptors/data/305.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7833 as c22, d7834 as c23, d7835 as c24 } from '../descriptors/data/375.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5872 as c25 } from '../descriptors/data/263.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5685 as c26 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5685 as d5685 } from '../descriptors/data/248.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec1687"]:c4(),["SharedCodec1690"]:c5(),["SharedCodec1722"]:c6(),["SharedCodec1723"]:c7(),["SharedCodec1724"]:c8(),["SharedCodec1725"]:c9(),["SharedCodec1726"]:c10(),["SharedCodec1727"]:c11(),["SharedCodec1728"]:c12(),["SharedCodec1729"]:c13(),["SharedCodec1730"]:c14(),["SharedCodec1731"]:c15(),["SharedCodec1732"]:c16(),["SharedCodec327"]:c17(),["SharedCodec328"]:c18(),["SharedCodec329"]:c19(),["SharedCodec330"]:c20(),["SharedCodec331"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
