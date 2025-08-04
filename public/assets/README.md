# Assets Organization

This directory contains all static assets for the Urico landing page, organized in a logical structure.

## Directory Structure

```
assets/
├── banners/          # Banner images for hero sections, promotions
├── images/
│   ├── agv/         # AGV (Automated Guided Vehicle) product images
│   │   ├── agv_01.png to agv_29.jpeg
│   ├── backgrounds/ # Background images for sections
│   ├── gallery/     # General gallery images
│   ├── icons/       # Icon images and graphics
│   ├── products/    # Other product images
│   └── ui/          # UI elements, buttons, decorative images
└── logos/           # Company logos and branding
    ├── urico_logo_dark.svg
    └── urico_logo_light.svg
```

## Naming Conventions

- **AGV Images**: `agv_XX.{png|jpeg}` where XX is zero-padded number (01-29)
- **Logos**: `urico_logo_{variant}.svg`
- **General Images**: Use descriptive names with underscores, lowercase
- **File Extensions**: Prefer `.png` for graphics with transparency, `.jpg` for photos, `.svg` for logos/icons

## Usage Guidelines

1. **AGV Images**: Use for product showcases, gallery sections
2. **Logos**: Use appropriate variant based on background (dark/light)
3. **Banners**: Place promotional and hero section images here
4. **Icons**: Small graphics, UI elements, decorative images
5. **Backgrounds**: Section backgrounds, patterns, textures

## Adding New Assets

When adding new assets:
1. Choose the appropriate subdirectory
2. Use descriptive, lowercase names with underscores
3. Optimize images for web (compress, appropriate dimensions)
4. Update this README if adding new categories
