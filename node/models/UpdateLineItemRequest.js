import { d4512 as c0 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3254 as c2 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3632 as c3, d3635 as c9, d3636 as c10, d3631 as c11 } from '../descriptors/data/149.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4538 as c4, d4539 as c5, d4540 as c6, d4541 as c8 } from '../descriptors/data/200.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4470 as c7 } from '../descriptors/data/196.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3144 as c12, d3145 as c13, d3146 as c14 } from '../descriptors/data/123.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3030 as c15 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2443 as c16 } from '../descriptors/data/96.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2443 as d2443 } from '../descriptors/data/96.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2443;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardPurchaseRecipientPatchRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTax"]:c2(),["OrderLineItemModifierRequest"]:c3(),["SharedCodec1185"]:c4(),["SharedCodec1186"]:c5(),["SharedCodec1187"]:c6(),["SharedCodec1188"]:c7(),["SharedCodec1189"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SubscribedLineRequest"]:c11(),["TaxCalculationRequest"]:c12(),["TaxComponentRequest"]:c13(),["TaxJurisdiction"]:c14(),["TextModifierRequest"]:c15(),["UpdateLineItemRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
