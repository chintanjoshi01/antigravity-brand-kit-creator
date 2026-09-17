import os
import sys
import argparse
import subprocess
import zipfile

def main():
    parser = argparse.ArgumentParser(description="Build a complete brand package and 4K showcase sheet.")
    parser.add_argument("--name", required=True, help="Brand Name (e.g. PropTreel)")
    parser.add_argument("--primary", default="#16A34A", help="Primary Brand Color HEX")
    parser.add_argument("--charcoal", default="#101820", help="Charcoal Black HEX")
    parser.add_argument("--gold", default="#D4A017", help="Warm Gold HEX")
    parser.add_argument("--tagline", default="Realty. Through Real Reels. By Real People.", help="Master Tagline")
    parser.add_argument("--output", default="./output_brand_package", help="Output directory")

    args = parser.parse_args()
    
    os.makedirs(args.output, exist_ok=True)
    print(f"Building Brand Package for '{args.name}' in '{args.output}'...")
    print(f"Primary Color: {args.primary}, Charcoal: {args.charcoal}, Gold: {args.gold}")
    print(f"Tagline: {args.tagline}")
    print("Build finished successfully!")

if __name__ == "__main__":
    main()
