import { d6607 as c0, d6608 as c1 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c3 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8439 as c4, d8440 as c5, d8441 as c6 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8442 as c7, d8443 as c8 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5942 as c9 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c10 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6282 as c11 } from '../descriptors/data/287.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8479 as c12, d8480 as c13, d8481 as c14, d8482 as c15, d8483 as c16 } from '../descriptors/data/416.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8504 as c17, d8505 as c18 } from '../descriptors/data/417.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8506 as c19 } from '../descriptors/data/418.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5722 as c20 } from '../descriptors/data/251.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5722 as d5722 } from '../descriptors/data/251.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5722;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec116"]:c3(),["SharedCodec1515"]:c4(),["SharedCodec1516"]:c5(),["SharedCodec1517"]:c6(),["SharedCodec1518"]:c7(),["SharedCodec1519"]:c8(),["SharedCodec1687"]:c9(),["SharedCodec1690"]:c10(),["SharedCodec1691"]:c11(),["SharedCodec1785"]:c12(),["SharedCodec1786"]:c13(),["SharedCodec1787"]:c14(),["SharedCodec1788"]:c15(),["SharedCodec1789"]:c16(),["UpdateReturnReplacementLineItemRequest"]:c17(),["UpdateReturnResolutionAdjustmentRequest"]:c18(),["UpdateReturnResolutionLineItemRequest"]:c19(),["UpdateReturnResolutionRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
