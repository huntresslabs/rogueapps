#!/usr/bin/env python3
"""Convert data/rogueapps.toml to public/rogueapps.json at build time."""

import json
import sys
import tomllib
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC = ROOT / "data" / "rogueapps.toml"
DEST = ROOT / "public" / "rogueapps.json"


def main() -> None:
    if not SRC.exists():
        print(f"error: source file not found: {SRC}", file=sys.stderr)
        sys.exit(1)

    if not DEST.parent.exists():
        print(f"error: web root not found: {DEST.parent} (run zola build first)", file=sys.stderr)
        sys.exit(1)

    data = tomllib.loads(SRC.read_text())
    DEST.write_text(json.dumps(data["apps"], indent=2))
    print(f"wrote {DEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
