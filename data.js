window.PIPA_PROJECTS = {
  "site": {
    "title": "Pipa",
    "subtitle": "Xiaomi Pad 6 ports",
    "tagline": "Community Linux and mobile OS work for pipa — kernels, packages, and flashable images.",
    "device": "Xiaomi Pad 6 (pipa)",
    "githubOrgHints": [
      "aymanrgab",
      "thespider2",
      "PAD6-DEV"
    ]
  },
  "ports": [
    {
      "id": "droidian",
      "name": "Droidian",
      "blurb": "Debian-based mobile UI (Phosh) on Halium. Device adaptation for USB gadget, audio deep_buffer, sensors, and pipa quirks.",
      "status": "active",
      "tags": [
        "Halium",
        "Phosh",
        "Debian"
      ],
      "links": [
        {
          "label": "Adaptation",
          "url": "https://github.com/aymanrgab/adaptation-droidian-pipa"
        },
        {
          "label": "Images",
          "url": "https://github.com/thespider2/droidian-images-xiaomi-pipa"
        },
        {
          "label": "Apt repo",
          "url": "https://github.com/thespider2/droidian-pipa-repo"
        },
        {
          "label": "Installer",
          "url": "https://github.com/thespider2/droidian-installer"
        }
      ]
    },
    {
      "id": "endeavouros",
      "name": "EndeavourOS",
      "blurb": "Arch-based desktop images (Plasma / GNOME) with Mu-Silicium boot and packages from pipa-pkgs. CircleCI ARM builds.",
      "status": "active",
      "tags": [
        "Arch",
        "Plasma",
        "GNOME",
        "UEFI"
      ],
      "links": [
        {
          "label": "Builder",
          "url": "https://github.com/aymanrgab/endeavouros-pipa"
        },
        {
          "label": "Packages",
          "url": "https://github.com/thespider2/pipa-pkgs"
        }
      ]
    },
    {
      "id": "ultramarine",
      "name": "Ultramarine",
      "blurb": "Fedora-based Ultramarine port via Katsu. Freedreno display, ath11k Wi‑Fi, ALSA speakers, libcamera — GNOME or Plasma images.",
      "status": "active",
      "tags": [
        "Fedora",
        "Katsu",
        "Freedreno"
      ],
      "links": [
        {
          "label": "Repository",
          "url": "https://github.com/aymanrgab/ultramarine-pipa"
        },
        {
          "label": "DNF packages",
          "url": "https://github.com/thespider2/pipa-pkgs"
        }
      ]
    },
    {
      "id": "ubuntu-desktop",
      "name": "Ubuntu Desktop",
      "blurb": "Ubuntu 26.04 (Resolute) GNOME or Plasma rootfs via mmdebstrap. Same Mu-Silicium / ESP / boot / rootfs flash map as Ultramarine.",
      "status": "active",
      "tags": [
        "Ubuntu",
        "GNOME",
        "Plasma"
      ],
      "links": [
        {
          "label": "Repository",
          "url": "https://github.com/PAD6-DEV/Ubuntu-pipa"
        },
        {
          "label": "Apt packages",
          "url": "https://github.com/thespider2/pipa-pkgs"
        }
      ]
    },
    {
      "id": "ubuntu-touch",
      "name": "Ubuntu Touch",
      "blurb": "Halium 13 port: boot, display, touch, Wi‑Fi, BT, audio, camera, OpenStore, torch, battery, and sensors working on UT 26.04.",
      "status": "active",
      "tags": [
        "Halium 13",
        "Lomiri",
        "UT 26.04"
      ],
      "features": [
        "Boot",
        "Display",
        "Touch",
        "WiFi",
        "Bluetooth",
        "Audio",
        "Camera",
        "OpenStore",
        "Torch",
        "Battery",
        "Sensors"
      ],
      "links": [
        {
          "label": "Repository",
          "url": "https://github.com/thespider2/ubuntu-touch-xiaomi-pipa"
        }
      ]
    },
    {
      "id": "nemo",
      "name": "Nemo / openSUSE",
      "blurb": "Nemomobile on openSUSE Tumbleweed with Glacier, mapped to the pipa UEFI flash layout. Device RPM from nemo-pipa-packaging.",
      "status": "active",
      "tags": [
        "openSUSE",
        "Glacier",
        "UEFI"
      ],
      "links": [
        {
          "label": "Images / flash",
          "url": "https://github.com/thespider2/manjaro-nemo-pipa"
        },
        {
          "label": "Device packaging",
          "url": "https://github.com/thespider2/nemo-pipa-packaging"
        }
      ]
    },
    {
      "id": "sailfish",
      "name": "Sailfish OS",
      "blurb": "Native mainline port (mesa freedreno + eglfs), not hybris. Qualcomm U-Boot into GPT linux rootfs; CI builds flash sets.",
      "status": "active",
      "tags": [
        "Sailfish",
        "Mainline",
        "U-Boot"
      ],
      "links": [
        {
          "label": "Repository",
          "url": "https://github.com/PAD6-DEV/sailfish-pipa"
        }
      ]
    }
  ],
  "shared": [
    {
      "id": "kernel",
      "name": "Kernel",
      "blurb": "Android/Linux kernel tree for pipa used across Droidian, Ubuntu Touch, and related Halium work.",
      "status": "active",
      "tags": [
        "4.19 / mainline work"
      ],
      "links": [
        {
          "label": "linux-android-xiaomi-pipa",
          "url": "https://github.com/aymanrgab/linux-android-xiaomi-pipa"
        }
      ]
    },
    {
      "id": "pipa-pkgs",
      "name": "pipa-pkgs",
      "blurb": "Multi-distro package repo on GitHub Pages: pacman (Arch/EndeavourOS), DNF (Ultramarine), and apt (Ubuntu).",
      "status": "active",
      "tags": [
        "pacman",
        "dnf",
        "apt",
        "OTA"
      ],
      "links": [
        {
          "label": "Source",
          "url": "https://github.com/thespider2/pipa-pkgs"
        },
        {
          "label": "Packages site",
          "url": "https://thespider2.github.io/pipa-pkgs/"
        }
      ]
    },
    {
      "id": "droidian-images",
      "name": "Droidian images",
      "blurb": "Fastboot and recovery flashable Droidian images for pipa (current and next channels).",
      "status": "active",
      "tags": [
        "fastboot",
        "recovery"
      ],
      "links": [
        {
          "label": "Repository",
          "url": "https://github.com/thespider2/droidian-images-xiaomi-pipa"
        },
        {
          "label": "Releases (next)",
          "url": "https://github.com/thespider2/droidian-images-xiaomi-pipa/releases/tag/next"
        }
      ]
    },
    {
      "id": "droidian-repo",
      "name": "Droidian apt repo",
      "blurb": "Device-specific Debian packages published for the pipa Droidian adaptation.",
      "status": "active",
      "tags": [
        "apt"
      ],
      "links": [
        {
          "label": "Repository",
          "url": "https://github.com/thespider2/droidian-pipa-repo"
        }
      ]
    },
    {
      "id": "droidian-installer",
      "name": "Droidian Installer",
      "blurb": "Desktop installer fork that merges the official Droidian configs with the pipa community overlay for one-click flashing.",
      "status": "active",
      "tags": [
        "AppImage",
        "fastboot",
        "installer"
      ],
      "links": [
        {
          "label": "Repository",
          "url": "https://github.com/thespider2/droidian-installer"
        },
        {
          "label": "Releases",
          "url": "https://github.com/thespider2/droidian-installer/releases"
        }
      ]
    }
  ]
};
