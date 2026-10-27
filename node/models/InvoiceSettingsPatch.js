import { d3162 as c0 } from '../descriptors/data/125.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5074 as c1, d5075 as c4, d5076 as c5, d5078 as c6 } from '../descriptors/data/232.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3392 as c2, d3393 as c3 } from '../descriptors/data/137.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3013 as c7 } from '../descriptors/data/116.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5108 as c8, d5109 as c9, d5110 as c10 } from '../descriptors/data/233.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3446 as c11 } from '../descriptors/data/140.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d5078 as d5078 } from '../descriptors/data/232.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5078;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["InvoiceAutopayRetryPolicy"]:c1(),["InvoicePaymentOptionLimit"]:c2(),["InvoicePaymentPolicy"]:c3(),["InvoiceReminderPolicy"]:c4(),["InvoiceReminderRule"]:c5(),["InvoiceSettingsPatch"]:c6(),["MoneyValue"]:c7(),["SharedCodec953"]:c8(),["SharedCodec954"]:c9(),["SharedCodec955"]:c10(),["SharedCodec956"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
