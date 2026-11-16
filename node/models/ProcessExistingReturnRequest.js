import { d6607 as c0, d6608 as c1 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c2 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c3 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8511 as c4, d8510 as c29 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1238 as c5 } from '../descriptors/data/60.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8518 as c6, d8519 as c7, d8520 as c8, d8521 as c9, d8522 as c10 } from '../descriptors/data/419.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8437 as c11, d8439 as c19, d8440 as c20, d8441 as c21 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8372 as c12, d8375 as c14, d8376 as c15, d8377 as c16 } from '../descriptors/data/409.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c13 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8527 as c17, d8528 as c18 } from '../descriptors/data/420.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8442 as c22, d8443 as c23, d8444 as c24, d8445 as c25, d8446 as c26, d8447 as c28 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7045 as c27 } from '../descriptors/data/331.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1238 as d1238 } from '../descriptors/data/60.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ProcessExistingReturnRequest"]:c5(),["ReturnProcessDecision"]:c6(),["ReturnProcessDispositionRequest"]:c7(),["ReturnProcessInspectionRequest"]:c8(),["ReturnProcessReceiptRequest"]:c9(),["ReturnProcessResolutionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnSourceSystemRequest"]:c12(),["SharedCodec116"]:c13(),["SharedCodec1460"]:c14(),["SharedCodec1461"]:c15(),["SharedCodec1462"]:c16(),["SharedCodec1473"]:c17(),["SharedCodec1474"]:c18(),["SharedCodec1515"]:c19(),["SharedCodec1516"]:c20(),["SharedCodec1517"]:c21(),["SharedCodec1518"]:c22(),["SharedCodec1519"]:c23(),["SharedCodec1520"]:c24(),["SharedCodec1521"]:c25(),["SharedCodec1522"]:c26(),["SharedCodec298"]:c27(),["SharedCodec398"]:c28(),["SharedCodec404"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
