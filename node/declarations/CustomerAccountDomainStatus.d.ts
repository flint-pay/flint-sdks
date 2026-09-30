
import type { CustomerAccountDNSRecord } from './CustomerAccountDNSRecord.js';

export type CustomerAccountDomainStatus = { "dns_records": Array<CustomerAccountDNSRecord>; "domain_status": "provisioning" | "active" | "attention_required" | (string & {}); "hostname": string; /** RFC3339 timestamp. Format: date-time. */ "last_checked_at": string; };
