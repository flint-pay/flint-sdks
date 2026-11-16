import { d6607 as c0, d6608 as c1 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c2 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8511 as c4, d8510 as c22 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8518 as c5, d8519 as c6, d8520 as c7, d8522 as c8 } from '../descriptors/data/419.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8437 as c9, d8439 as c13, d8440 as c14, d8441 as c15 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c10 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8527 as c11, d8528 as c12 } from '../descriptors/data/420.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8442 as c16, d8443 as c17, d8444 as c18, d8445 as c19, d8446 as c20, d8447 as c21 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8511 as d8511 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8511;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ReturnProcessDecision"]:c5(),["ReturnProcessDispositionRequest"]:c6(),["ReturnProcessInspectionRequest"]:c7(),["ReturnProcessResolutionRequest"]:c8(),["ReturnReplacementLineItemRequest"]:c9(),["SharedCodec116"]:c10(),["SharedCodec1473"]:c11(),["SharedCodec1474"]:c12(),["SharedCodec1515"]:c13(),["SharedCodec1516"]:c14(),["SharedCodec1517"]:c15(),["SharedCodec1518"]:c16(),["SharedCodec1519"]:c17(),["SharedCodec1520"]:c18(),["SharedCodec1521"]:c19(),["SharedCodec1522"]:c20(),["SharedCodec398"]:c21(),["SharedCodec404"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
