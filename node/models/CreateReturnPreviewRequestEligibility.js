import { d7525 as c0, d7527 as c6, d7529 as c7, d7533 as c12, d7535 as c13, d7536 as c14 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d347 as c1 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8421 as c2 } from '../descriptors/data/412.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6607 as c3, d6608 as c4 } from '../descriptors/data/304.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c5 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8437 as c8, d8433 as c9, d8439 as c16, d8440 as c17, d8441 as c18, d8431 as c25, d8434 as c26, d8432 as c27, d8435 as c28, d8436 as c29 } from '../descriptors/data/413.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7546 as c10, d7537 as c15, d7542 as c30, d7547 as c31 } from '../descriptors/data/360.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6723 as c11 } from '../descriptors/data/311.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8442 as c19, d8443 as c20, d8444 as c21, d8445 as c22, d8446 as c23, d8447 as c24 } from '../descriptors/data/414.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d347 as d347 } from '../descriptors/data/21.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d347;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec116"]:c11(),["SharedCodec1453"]:c12(),["SharedCodec1455"]:c13(),["SharedCodec1456"]:c14(),["SharedCodec1457"]:c15(),["SharedCodec1515"]:c16(),["SharedCodec1516"]:c17(),["SharedCodec1517"]:c18(),["SharedCodec1518"]:c19(),["SharedCodec1519"]:c20(),["SharedCodec1520"]:c21(),["SharedCodec1521"]:c22(),["SharedCodec1522"]:c23(),["SharedCodec398"]:c24(),["SharedCodec399"]:c25(),["SharedCodec400"]:c26(),["SharedCodec401"]:c27(),["SharedCodec402"]:c28(),["SharedCodec403"]:c29(),["SharedCodec51"]:c30(),["SharedCodec54"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
