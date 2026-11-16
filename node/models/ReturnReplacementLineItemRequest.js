import { d6607 as c0, d6608 as c1 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8437 as c3, d8439 as c5, d8440 as c6, d8441 as c7 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c4 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8442 as c8, d8443 as c9, d8444 as c10, d8445 as c11, d8446 as c12 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8437 as d8437 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["ReturnReplacementLineItemRequest"]:c3(),["SharedCodec116"]:c4(),["SharedCodec1515"]:c5(),["SharedCodec1516"]:c6(),["SharedCodec1517"]:c7(),["SharedCodec1518"]:c8(),["SharedCodec1519"]:c9(),["SharedCodec1520"]:c10(),["SharedCodec1521"]:c11(),["SharedCodec1522"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
