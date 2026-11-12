"""Generate the Sunrise Hope Wellness logo SVGs into public/brand/.

Text is converted to outlines with fontTools so the SVGs render identically
everywhere, without depending on installed fonts.

Run: python3 -I scripts/build-logos.py
"""

import math
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "node_modules/@fontsource"
OUT = ROOT / "public/brand"

SERIF = TTFont(FONTS / "forum/files/forum-latin-400-normal.woff")
SANS = TTFont(FONTS / "jost/files/jost-latin-500-normal.woff")

SUN = "#e7b04a"
SUN_DEEP = "#d9923a"

PALETTES = {
    "": {"ink": "#2f3a2e", "water": "#5d7a63", "muted": "#7a8a74"},
    "-light": {"ink": "#fbf7ef", "water": "#fbf7ef", "muted": "#e9e2d3"},
}


def text_path(font: TTFont, text: str, size: float, tracking: float = 0.0) -> tuple[str, float]:
    """Return (svg path data at origin baseline, advance width)."""
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = size / font["head"].unitsPerEm
    pen = SVGPathPen(glyphs)
    x = 0.0
    for i, ch in enumerate(text):
        name = cmap[ord(ch)]
        tp = TransformPen(pen, (scale, 0, 0, -scale, x, 0))
        glyphs[name].draw(tp)
        x += glyphs[name].width * scale
        if i < len(text) - 1:
            x += tracking * size
    return pen.getCommands(), x


def text_el(font, text, size, cx, baseline, fill, tracking=0.0) -> str:
    d, w = text_path(font, text, size, tracking)
    return f'<path transform="translate({cx - w / 2:.2f} {baseline:.2f})" fill="{fill}" d="{d}"/>'


def mark(cx: float, horizon: float, s: float, water: str) -> str:
    """Rising sun over three water lines. s = sun radius."""
    parts = [
        f'<path d="M{cx - s:.2f} {horizon:.2f} A{s:.2f} {s:.2f} 0 0 1 {cx + s:.2f} {horizon:.2f} Z" fill="url(#sun)"/>'
    ]
    rays = 9
    for i in range(rays):
        a = math.pi * (i + 1) / (rays + 1)
        long = i % 2 == 0
        r1 = s * 1.28
        r2 = s * (1.72 if long else 1.52)
        x1, y1 = cx - r1 * math.cos(a), horizon - r1 * math.sin(a)
        x2, y2 = cx - r2 * math.cos(a), horizon - r2 * math.sin(a)
        parts.append(
            f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}" '
            f'stroke="{SUN}" stroke-width="{s * 0.13:.2f}" stroke-linecap="round"/>'
        )
    sw = s * 0.13
    for i, half in enumerate((1.45, 1.0, 0.55)):
        y = horizon + sw * 0.5 + i * s * 0.32
        parts.append(
            f'<line x1="{cx - s * half:.2f}" y1="{y:.2f}" x2="{cx + s * half:.2f}" y2="{y:.2f}" '
            f'stroke="{water}" stroke-width="{sw:.2f}" stroke-linecap="round"/>'
        )
    return "\n  ".join(parts)


def defs() -> str:
    return (
        '<defs><linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">'
        f'<stop offset="0" stop-color="{SUN}"/><stop offset="1" stop-color="{SUN_DEEP}"/>'
        "</linearGradient></defs>"
    )


def svg(w: float, h: float, body: str, label: str) -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:g} {h:g}" role="img" aria-label="{label}">\n'
        f"  {defs()}\n  {body}\n</svg>\n"
    )


def build() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    label = "Sunrise Hope Wellness"

    for suffix, p in PALETTES.items():
        # Small mark: just the visual.
        (OUT / f"mark{suffix}.svg").write_text(svg(120, 100, mark(60, 64, 26, p["water"]), label))

        # Full logo: mark + wordmark, stacked.
        w = 440
        body = "\n  ".join(
            [
                mark(w / 2, 92, 34, p["water"]),
                text_el(SERIF, "Sunrise Hope", 62, w / 2, 194, p["ink"], tracking=0.01),
                text_el(SANS, "WELLNESS", 15, w / 2, 230, p["muted"], tracking=0.42),
                text_el(SANS, "EST. 2012", 10, w / 2, 256, p["muted"], tracking=0.3),
            ]
        )
        (OUT / f"logo{suffix}.svg").write_text(svg(w, 272, body, label))

    # Favicon: mark on a sage tile.
    fav = (
        '<rect width="120" height="120" rx="28" fill="#e6d0bb"/>\n  '
        + mark(60, 74, 33, "#3f5a45")
    )
    (OUT / "favicon.svg").write_text(svg(120, 120, fav, label))


if __name__ == "__main__":
    build()
    for f in sorted(OUT.iterdir()):
        print(f.relative_to(ROOT))
