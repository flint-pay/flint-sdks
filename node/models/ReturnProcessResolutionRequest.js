import { d6607 as c0, d6608 as c1 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c2 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8522 as c4 } from '../descriptors/data/419.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8437 as c5, d8439 as c7, d8440 as c8, d8441 as c9 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c6 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8442 as c10, d8443 as c11, d8444 as c12, d8445 as c13, d8446 as c14, d8447 as c15 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8510 as c16 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8522 as d8522 } from '../descriptors/data/419.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8522;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ReturnProcessResolutionRequest"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["SharedCodec116"]:c6(),["SharedCodec1515"]:c7(),["SharedCodec1516"]:c8(),["SharedCodec1517"]:c9(),["SharedCodec1518"]:c10(),["SharedCodec1519"]:c11(),["SharedCodec1520"]:c12(),["SharedCodec1521"]:c13(),["SharedCodec1522"]:c14(),["SharedCodec398"]:c15(),["SharedCodec404"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
