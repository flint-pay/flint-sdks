import { d359 as c0 } from '../descriptors/data/22.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6607 as c1, d6608 as c2 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c3 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c4 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8437 as c5, d8433 as c6, d8439 as c9, d8440 as c10, d8441 as c11, d8434 as c18 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7546 as c7, d7547 as c20 } from '../descriptors/data/360.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c8 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8442 as c12, d8443 as c13, d8444 as c14, d8445 as c15, d8446 as c16, d8447 as c17 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8510 as c19 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d359 as d359 } from '../descriptors/data/22.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["ReturnResolutionAdjustmentRequest"]:c6(),["ReturnResolutionLineItemRequest"]:c7(),["SharedCodec116"]:c8(),["SharedCodec1515"]:c9(),["SharedCodec1516"]:c10(),["SharedCodec1517"]:c11(),["SharedCodec1518"]:c12(),["SharedCodec1519"]:c13(),["SharedCodec1520"]:c14(),["SharedCodec1521"]:c15(),["SharedCodec1522"]:c16(),["SharedCodec398"]:c17(),["SharedCodec400"]:c18(),["SharedCodec404"]:c19(),["SharedCodec54"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
