"""Scan every release file and nested archive without logging matched values."""

import io
import json
from pathlib import Path, PurePosixPath
import re
import sys
import tarfile
import zipfile

PATTERNS = {
    "private key": rb"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----",
    "GitHub token": rb"(?:gh[pousr]_[A-Za-z0-9]{32,}|github_pat_[A-Za-z0-9_]{60,})",
    "AWS key": rb"AKIA[A-Z0-9]{16}",
    "Stripe live key": rb"(?:sk|rk)_live_[A-Za-z0-9]{20,}",
    "Flint token": rb"(?:fwat_|fcat_|fcrt_|flint_(?:test|live|sk|pk)_)[A-Za-z0-9_-]{25,}",
    "JWT": rb"eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{25,}\.[A-Za-z0-9_-]{20,}",
    "credential URL": rb"https?://[^\s/<>]{1,80}:[^\s/<>]{6,80}@",
}
PRIVATE_PARTS = {
    ".git", ".env", ".tools", ".generated", ".context", ".sdk-generator.json",
    ".npmrc", "node_modules", "vendor", "playwright-report", "test-results",
}
PUBLIC_DOMAINS = {
    b"example.com", b"example.org", b"example.invalid", b"example.test",
    b"withflintpay.com", b"users.noreply.github.com", b"flintpay.com",
    b"npmjs.com", b"php.net", b"github.com", b"google.com",
}
findings = []
count = 0


def scan(name, data, depth=0, member_path=None):
    global count
    count += 1
    path = PurePosixPath((member_path if member_path is not None else name).replace("\\", "/"))
    if (path.is_absolute() or ".." in path.parts
            or any(p in PRIVATE_PARTS or p.startswith(".env.") for p in path.parts)
            or path.suffix in {".har", ".log", ".sqlite", ".db"}):
        findings.append((name, "private runtime path"))
    if depth > 5:
        findings.append((name, "archive nesting exceeds scan limit"))
        return
    if name.endswith(".zip") or zipfile.is_zipfile(io.BytesIO(data)):
        try:
            with zipfile.ZipFile(io.BytesIO(data)) as archive:
                for entry in archive.infolist():
                    if not entry.is_dir():
                        if (entry.external_attr >> 16) & 0o170000 == 0o120000:
                            findings.append((name + "!/" + entry.filename, "archive link or special file"))
                        scan(name + "!/" + entry.filename, archive.read(entry), depth + 1, entry.filename)
        except (zipfile.BadZipFile, RuntimeError, OSError):
            findings.append((name, "invalid archive"))
        return
    if name.endswith((".tgz", ".tar.gz", ".tar")):
        try:
            with tarfile.open(fileobj=io.BytesIO(data)) as archive:
                for entry in archive.getmembers():
                    if entry.isfile():
                        scan(name + "!/" + entry.name, archive.extractfile(entry).read(), depth + 1, entry.name)
                    elif not entry.isdir():
                        findings.append((name + "!/" + entry.name, "archive link or special file"))
        except (tarfile.TarError, OSError):
            findings.append((name, "invalid archive"))
        return
    for kind, pattern in PATTERNS.items():
        if re.search(pattern, data):
            findings.append((name, kind))
    for email in re.findall(rb"(?i)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}", data):
        domain = email.rsplit(b"@", 1)[1].lower()
        if domain not in PUBLIC_DOMAINS and not domain.endswith((b".invalid", b".example", b".test")):
            findings.append((name, "email requires public-data review"))


root = Path(sys.argv[1]).resolve()
if not root.is_dir():
    raise SystemExit("Expected a release directory")
for path in sorted(root.rglob("*")):
    if path.is_symlink():
        findings.append((str(path.relative_to(root)), "runtime symlink"))
    elif path.is_file():
        scan(str(path.relative_to(root)), path.read_bytes())
if not count:
    raise SystemExit("Refusing an empty release directory")
print(json.dumps({"files_scanned": count, "findings": sorted(set(findings))}, indent=2))
raise SystemExit(bool(findings))
