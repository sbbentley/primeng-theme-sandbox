import Aura from "@primeng/themes/aura";
import { definePreset } from "@primeng/themes";

export const MyPreset = definePreset(Aura, {
    primitive: {
        // These have been updated to match the corner-radius variables we have in Figma (we don't have those in design-tokens repo yet)
        borderRadius: {
            none: "0", // corner-radius/square
            xs: "3px", // we dont have a Figma variable for this one, I assumed 3px for this
            sm: "6px", // corner-radius/sm
            md: "9px", // corner-radius/md
            lg: "15px",  // corner-radius/lg
            xl: "18px" // we dont have a Figma variable for this one, I assumed 18px for this
        },
        fontSize: {
            heading: {
              xs: "18px",
              sm: "20px",
              md: "24px",
              lg: "28px",
              xl: "32px",
              xxl: "36px"
            },
            body: {
              base: "14px",
              xs: "11px",
              sm: "12px",
              lg: "16px"
            }

        },
        basic: {
            brand: "var(--hcm-color-theme)"
        },
        green: {
            // Note: green is currently referenced under "success", this would need to be changed to reference teal instead.
            50: "#EEF5EE", // --hcm-color-green-5
            100: "#CCE3CE", // --hcm-color-green-10
            200: "#9ECCA9", // --hcm-color-green-20
            300: "#6EB588", // --hcm-color-green-30
            400: "#599875", // --hcm-color-green-40
            500: "#487D62", // --hcm-color-green-50
            600: "#3D6C57", // --hcm-color-green-60
            700: "#335D4C", // --hcm-color-green-70
            800: "#27463B", // --hcm-color-green-80
            900: "#1D302A", // --hcm-color-green-90
            950: "#1D302A" // --hcm-color-green-90
        },
        red: {
            // Note: This one may need tweaking after we can see how it looks when referenced under "danger" and "invalid"
            50: "#FFF0F0", // --hcm-color-red-5: #FFF0F0;
            100: "#FFD6D4", // --hcm-color-red-10: #FFD6D4;
            200: "#FFBBB8", // --hcm-color-red-15: #FFBBB8;
            300: "#FF9F9B", // --hcm-color-red-20: #FF9F9B;
            400: "#FE807D", // --hcm-color-red-25: #FE807D;
            500: "#F95F5F", // --hcm-color-red-30: #F95F5F;
            600: "#F03A44", // --hcm-color-red-40: #F03A44;
            700: "#CE363A", // --hcm-color-red-50: #CE363A;
            800: "#CE363A", // --hcm-color-red-50: #CE363A;
            900: "#AC3230", // --hcm-color-red-60: #AC3230;
            950: "#AC3230" // --hcm-color-red-60: #AC3230;
        },
        orange: {
            // Note: This one may need tweaking after we can see how it looks when referenced under "warn"
            50: "#FEF8E7", // --hcm-color-orange-5: #FEF8E7;
            100: "#FFE4C3", // --hcm-color-orange-10: #FFE4C3;
            200: "#FFC69E", // --hcm-color-orange-15: #FFC69E;
            300: "#FF9E7A", // --hcm-color-orange-20: #FF9E7A;
            400: "#FF7C57", // --hcm-color-orange-25: #FF7C57;
            500: "#F76344", // --hcm-color-orange-30: #F76344;
            600: "#DA5740", // --hcm-color-orange-40: #DA5740;
            700: "#BC4B3B", // --hcm-color-orange-50: #BC4B3B;
            800: "#BC4B3B", // --hcm-color-orange-50: #BC4B3B;
            900: "#9F3F36", // --hcm-color-orange-60: #9F3F36;
            950: "#9F3F36" // --hcm-color-orange-60: #9F3F36;
        },
        teal: {
            50: "#E8F6F0", // --hcm-color-teal-5
            100: "#C7E7D8", // --hcm-color-teal-10
            200: "#74C8B2", // --hcm-color-teal-20
            300: "#00A998", // --hcm-color-teal-30
            400: "#00978E", // --hcm-color-teal-40
            500: "#00827B", // --hcm-color-teal-50
            600: "#006E6D", // --hcm-color-teal-60
            700: "#005A5E", // --hcm-color-teal-70
            800: "#00474D", // --hcm-color-teal-80
            900: "#13343A", // --hcm-color-teal-90
            950: "#13343A" // --hcm-color-teal-90
        },
        cyan: {
            50: "#EDF5FC", // --hcm-color-cyan-5:  #EDF5FC;
            100: "#C9E3F6", // --hcm-color-cyan-10: #C9E3F6;
            200: "#7BC1E7", // --hcm-color-cyan-20: #7BC1E7;
            300: "#00A2D6", // --hcm-color-cyan-30: #00A2D6;
            400: "#008EB9", // --hcm-color-cyan-40: #008EB9;
            500: "#007B9D", // --hcm-color-cyan-50: #007B9D; //Primary Button
            600: "#006787", // --hcm-color-cyan-60: #006787;
            700: "#00556D", // --hcm-color-cyan-70: #00556D;
            800: "#054354", // --hcm-color-cyan-80: #054354;
            900: "#0D323D", // --hcm-color-cyan-90: #0D323D;
            950: "#0D323D" // --hcm-color-cyan-90: #0D323D;
        },
        blue: {
            50: "#ECF4FF", // --hcm-color-blue-5:  #ECF4FF;
            100: "#C6DFFE", // --hcm-color-blue-10: #C6DFFE;
            200: "#96C4FD", // --hcm-color-blue-20: #96C4FD;
            300: "#64A9FB", // --hcm-color-blue-30: #64A9FB;
            400: "#2F8BFA", // --hcm-color-blue-40: #2F8BFA;
            500: "#006CED", // --hcm-color-blue-50: #006CED;
            600: "#005ECF", // --hcm-color-blue-60: #005ECF;
            700: "#0051B1", // --hcm-color-blue-70: #0051B1;
            800: "#003D87", // --hcm-color-blue-80: #003D87;
            900: "#002B5E", // --hcm-color-blue-90: #002B5E;
            950: "#002B5E" // --hcm-color-blue-90: #002B5E;
        },
        violet: {
            50: "#F2F3FF", // --hcm-color-violet-5
            100: "#DDDDFE", // --hcm-color-violet-10
            200: "#BDAFF7", // --hcm-color-violet-20
            300: "#A682DB", // --hcm-color-violet-30
            400: "#9870BC", // --hcm-color-violet-40
            500: "#895F9E", // --hcm-color-violet-50
            600: "#775082", // --hcm-color-violet-60
            700: "#62426A", // --hcm-color-violet-70
            800: "#4F3451", // --hcm-color-violet-80
            900: "#302B40", // --hcm-color-violet-90
            950: "#302B40" // --hcm-color-violet-90
        },
        // fuchsia = magenta
        fuchsia: {
            50: "#FFF0F1", // --hcm-color-magenta-5
            100: "#FFD6DA", // --hcm-color-magenta-10
            200: "#FE9DAE", // --hcm-color-magenta-20
            300: "#F65D89", // --hcm-color-magenta-30
            400: "#EF3279", // --hcm-color-magenta-40
            500: "#CD2E6B", // --hcm-color-magenta-50
            600: "#AD2B56", // --hcm-color-magenta-60
            700: "#8D2749", // --hcm-color-magenta-70
            800: "#6E223B", // --hcm-color-magenta-80
            900: "#501C2E", // --hcm-color-magenta-90
            950: "#501C2E" // --hcm-color-magenta-90
        },
        slate: {
            // --hcm-color-slate-15: #C9CCD4;
            // --hcm-color-slate-25: #A3A5B4;
            50: "#F2F4F6", // --hcm-color-slate-5
            100: "#DEE0E4", // --hcm-color-slate-10
            200: "#B6B8C4", // --hcm-color-slate-20
            300: "#9192A3", // --hcm-color-slate-30
            400: "#807F94", // --hcm-color-slate-40
            500: "#6F6D81", // --hcm-color-slate-50
            600: "#5F5C6D", // --hcm-color-slate-60
            700: "#4D4C5A", // --hcm-color-slate-70
            800: "#3E3C47", // --hcm-color-slate-80
            900: "#2F2D34", // --hcm-color-slate-90
            950: "#201F23" // --hcm-color-slate-100
        },
        gray: {
            // --hcm-color-gray-15: #CCCCCC;
            // --hcm-color-gray-25: #A6A6A6;
            50: "#F3F3F3", // --hcm-color-gray-5 //Input Disabled
            100: "#E0E0E0", // --hcm-color-gray-10
            200: "#B9B9B9", // --hcm-color-gray-20 //Input Border Color
            300: "#939393", // --hcm-color-gray-30
            400: "#818181", // --hcm-color-gray-40
            500: "#6F6F6F", // --hcm-color-gray-50
            600: "#5E5E5E", // --hcm-color-gray-60
            700: "#4E4E4E", // --hcm-color-gray-70
            800: "#3E3E3E", // --hcm-color-gray-80
            900: "#2E2E2E", // --hcm-color-gray-90
            950: "#1F1F1F" // --hcm-color-gray-100
        },
        neutral: {
            // these should reference the gray colors
            50: "#F3F3F3", // --hcm-color-neutral-5: var(--hcm-color-gray-5);
            100: "#E0E0E0", // --hcm-color-neutral-10: var(--hcm-color-gray-10);
            200: "#CCCCCC", // --hcm-color-neutral-15: var(--hcm-color-gray-15);
            300: "#B9B9B9", // --hcm-color-neutral-20: var(--hcm-color-gray-20);
            400: "#818181", // --hcm-color-neutral-40: var(--hcm-color-gray-40);
            500: "#6F6F6F", // --hcm-color-neutral-50: var(--hcm-color-gray-50);
            600: "#5E5E5E", // --hcm-color-neutral-60: var(--hcm-color-gray-60);
            700: "#4E4E4E", // --hcm-color-neutral-70: var(--hcm-color-gray-70);
            800: "#3E3E3E", // --hcm-color-neutral-80: var(--hcm-color-gray-80);
            900: "#2E2E2E", // --hcm-color-neutral-90: var(--hcm-color-gray-90);
            950: "#1F1F1F" // --hcm-color-neutral-100: var(--hcm-color-gray-100);
        },
        // stone = neutral-alt
        stone: {
            // these should reference the slate colors
            50: "#F2F4F6", // --hcm-color-neutral-alt-5: var(--hcm-color-slate-5);
            100: "#DEE0E4", // --hcm-color-neutral-alt-10: var(--hcm-color-slate-10);
            200: "#B6B8C4", // --hcm-color-neutral-alt-20: var(--hcm-color-slate-20);
            300: "#9192A3", // There is no neutral-alt-30 in design-tokens, referencing --hcm-color-slate-30 instead
            400: "#807F94", // --hcm-color-neutral-alt-40: var(--hcm-color-slate-40);
            500: "#6F6D81", // --hcm-color-neutral-alt-50: var(--hcm-color-slate-50);
            600: "#5F5C6D", // --hcm-color-neutral-alt-60: var(--hcm-color-slate-60);
            700: "#4D4C5A", // --hcm-color-neutral-alt-70: var(--hcm-color-slate-70);
            800: "#3E3C47", // --hcm-color-neutral-alt-80: var(--hcm-color-slate-80);
            900: "#2F2D34", // --hcm-color-neutral-alt-90: var(--hcm-color-slate-90);
            950: "#201F23" // There is no neutral-alt-100 in design-tokens, referencing --hcm-color-slate-100 instead
        }
    },
    semantic: {
        transitionDuration: "0.2s",
        focusRing: {
            width: "0",
            style: "none",
            color: "unset",
            offset: "0"

        },
        disabledOpacity: "0.38",
        iconSize: "1rem",
        anchorGutter: "0",
        primary: {
            50: "#EDF5FC", // --hcm-color-cyan-5:  #EDF5FC;
            100: "#C9E3F6", // --hcm-color-cyan-10: #C9E3F6;
            200: "#7BC1E7", // --hcm-color-cyan-20: #7BC1E7;
            300: "#00A2D6", // --hcm-color-cyan-30: #00A2D6;
            400: "#008EB9", // --hcm-color-cyan-40: #008EB9;
            500: "#007B9D", // --hcm-color-cyan-50: #007B9D; //Primary Button
            600: "#006787", // --hcm-color-cyan-60: #006787;
            700: "#00556D", // --hcm-color-cyan-70: #00556D;
            800: "#054354", // --hcm-color-cyan-80: #054354;
            900: "#0D323D", // --hcm-color-cyan-90: #0D323D;
            950: "#0D323D" // --hcm-color-cyan-90: #0D323D;
        },
        formField: {
            paddingX: "0.75rem",
            paddingY: "0.6rem",
            sm: {
                fontSize: "{fontSize.body.base}",
                paddingX: "0.625rem",
                paddingY: "0.325rem"
            },
            lg: {
                fontSize: "{fontSize.body.lg}",
                paddingX: "0.875rem",
                paddingY: "0.88rem"
            },
            borderRadius: "{border.radius.md}",
            focusRing: {
                width: "1px",
                style: "solid",
                color: "{primary.color}",
                offset: "0px",
                shadow: "none"
            },
            transitionDuration: "{transition.duration}",
        },
        list: {
            padding: "0.5rem .5rem",
            gap: "0",
            header: {
                padding: "0.75rem 1rem"
            },
            option: {
                padding: "0.75rem 1rem",
                borderRadius: "{border.radius.md}"
            },
            optionGroup: {
                padding: "0.75rem 1rem",
                fontWeight: "700"
            }
        },
        content: {
            borderRadius: "{border.radius.md}"
        },
        mask: {
            transitionDuration: "0.15s"
        },
        navigation: {
            list: {
                padding: "6px 9px",
                gap: "0"
            },
            item: {
                padding: "0.75rem 1rem",
                borderRadius: "{border.radius.md}",
                gap: "0.5rem"
            },
            submenuLabel: {
                padding: "0.75rem 1rem",
                fontWeight: "700"
            },
            submenuIcon: {
                size: "0.875rem"
            }
        },
        overlay: {
            select: {
                borderRadius: "{border.radius.md}",
                shadow: "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"
            },
            popover: {
                borderRadius: "{border.radius.md}",
                padding: "1rem",
                shadow: "0px 3px 5px 0px rgba(9, 30, 66, 0.20), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)"
            },
            modal: {
                borderRadius: "{border.radius.md}",
                padding: "1.5rem",
                shadow: "0px 8px 12px 0px rgba(9, 30, 66, 0.15), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)"
            },
            navigation: {
                shadow: "0px 3px 5px 0px rgba(9, 30, 66, 0.20), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)"
            }
        },
        colorScheme: {
            light: {
                focusRing: {
                    shadow: "0 0 1px 4px {surface.200}"
                },

                surface: {
                    0: "#ffffff", //Card and menu background
                    50: "#F3F3F3", // --hcm-color-gray-5
                    100: "#E0E0E0", // --hcm-color-gray-10
                    200: "#B9B9B9", // --hcm-color-gray-20
                    300: "#939393", // --hcm-color-gray-30
                    400: "#818181", // --hcm-color-gray-40
                    500: "#6F6F6F", // --hcm-color-gray-50
                    600: "#5E5E5E", // --hcm-color-gray-60
                    700: "#4E4E4E", // --hcm-color-gray-70
                    800: "#3E3E3E", // --hcm-color-gray-80
                    900: "#2E2E2E", // --hcm-color-gray-90
                    950: "#1F1F1F" // --hcm-color-gray-100
                },
                primary: {
                    color: "{primary.500}",
                    contrastColor: "#ffffff",
                    hoverColor: "{primary.600}",
                    activeColor: "{primary.700}"
                },
                highlight: {
                    background: "color-mix(in srgb, {primary.color}, transparent 88%)",
                    focusBackground: "color-mix(in srgb, {primary.color}, transparent 76%)",
                    color: "{surface.800}",
                    focusColor: "{primary.800}"
                },
                mask: {
                    background: "rgba(0,0,0,0.32)",
                    color: "{surface.200}"
                },
                formField: {
                    background: "{surface.0}",
                    disabledBackground: "{surface.50}",
                    filledBackground: "{surface.100}",
                    filledHoverBackground: "{surface.200}",
                    filledFocusBackground: "{surface.100}",
                    borderColor: "{neutral.100}",
                    hoverBorderColor: "{primary.color}",
                    focusBorderColor: "{primary.color}",
                    invalidBorderColor: "{red.700}",
                    color: "{neutral.700}",
                    disabledColor: "{surface.600}",
                    placeholderColor: "{neutral.400}",
                    invalidPlaceholderColor: "{red.700}",
                    floatLabelColor: "{surface.600}",
                    floatLabelFocusColor: "{primary.600}",
                    floatLabelActiveColor: "{surface.600}",
                    floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
                    iconColor: "{surface.600}",
                    shadow: "none"
                },
                text: {
                    color: "{surface.950}",
                    hoverColor: "{surface.900}",
                    mutedColor: "{surface.600}",
                    hoverMutedColor: "{surface.600}"
                },
                content: {
                    background: "{surface.0}",
                    hoverBackground: "{slate.50}",
                    borderColor: "{surface.100}",
                    color: "{text.color}",
                    hoverColor: "{text.hover.color}"
                },
                overlay: {
                    select: {
                        background: "{surface.0}",
                        borderColor: "{surface.0}",
                        color: "{text.color}"
                    },
                    popover: {
                        background: "{surface.0}",
                        borderColor: "{surface.0}",
                        color: "{text.color}"
                    },
                    modal: {
                        background: "{surface.0}",
                        borderColor: "{surface.0}",
                        color: "{text.color}"
                    }
                },
                list: {
                    option: {
                        focusBackground: "{slate.50}",
                        selectedBackground: "{slate.100}",
                        selectedFocusBackground: "{slate.100}",
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        selectedColor: "{surface.800}",
                        selectedFocusColor: "{highlight.focus.color}",
                        icon: {
                            color: "{surface.600}",
                            focusColor: "{surface.600}"
                        }
                    },
                    optionGroup: {
                        background: "transparent",
                        color: "{text.color}"
                    }
                },
                navigation: {
                    item: {
                        focusBackground: "{slate.50}",
                        activeBackground: "{slate.100}",
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        activeColor: "{text.hover.color}",
                        icon: {
                            color: "{surface.700}",
                            focusColor: "{surface.700}",
                            activeColor: "{surface.700}"
                        }
                    },
                    submenuLabel: {
                        background: "transparent",
                        color: "{text.color}"
                    },
                    submenuIcon: {
                        color: "{surface.600}",
                        focusColor: "{surface.600}",
                        activeColor: "{surface.600}"
                    }
                }
            },
            dark: {
                focusRing: {
                    shadow: "0 0 1px 4px {surface.700}"
                },
                surface: {
                    0: "#ffffff",
                    50: "#fafafa",
                    100: "#f4f4f5",
                    200: "#e4e4e7",
                    300: "#d4d4d8",
                    400: "#a1a1aa",
                    500: "#71717a",
                    600: "#52525b",
                    700: "#3f3f46",
                    800: "#27272a",
                    900: "#18181b",
                    950: "#09090b"
                },
                primary: {
                    color: "{primary.400}",
                    contrastColor: "{surface.900}",
                    hoverColor: "{primary.300}",
                    activeColor: "{primary.200}"
                },
                highlight: {
                    background: "color-mix(in srgb, {primary.400}, transparent 84%)",
                    focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
                    color: "rgba(255,255,255,.87)",
                    focusColor: "rgba(255,255,255,.87)"
                },
                mask: {
                    background: "rgba(0,0,0,0.6)",
                    color: "{surface.200}"
                },
                formField: {
                    background: "{surface.950}",
                    disabledBackground: "{surface.700}",
                    filledBackground: "{surface.800}",
                    filledHoverBackground: "{surface.700}",
                    filledFocusBackground: "{surface.800}",
                    borderColor: "{surface.600}",
                    hoverBorderColor: "{surface.400}",
                    focusBorderColor: "{primary.color}",
                    invalidBorderColor: "{red.300}",
                    color: "{surface.0}",
                    disabledColor: "{surface.400}",
                    placeholderColor: "{surface.400}",
                    invalidPlaceholderColor: "{red.300}",
                    floatLabelColor: "{surface.400}",
                    floatLabelFocusColor: "{primary.color}",
                    floatLabelActiveColor: "{surface.400}",
                    floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
                    iconColor: "{surface.400}",
                    shadow: "none"
                },
                text: {
                    color: "{surface.0}",
                    hoverColor: "{surface.0}",
                    mutedColor: "{surface.400}",
                    hoverMutedColor: "{surface.400}"
                },
                content: {
                    background: "{surface.900}",
                    hoverBackground: "{surface.800}",
                    borderColor: "{surface.700}",
                    color: "{text.color}",
                    hoverColor: "{text.hover.color}"
                },
                overlay: {
                    select: {
                        background: "{surface.900}",
                        borderColor: "{surface.900}",
                        color: "{text.color}"
                    },
                    popover: {
                        background: "{surface.900}",
                        borderColor: "{surface.900}",
                        color: "{text.color}"
                    },
                    modal: {
                        background: "{surface.900}",
                        borderColor: "{surface.900}",
                        color: "{text.color}"
                    }
                },
                list: {
                    option: {
                        focusBackground: "{surface.800}",
                        selectedBackground: "{highlight.background}",
                        selectedFocusBackground: "{highlight.focus.background}",
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        selectedColor: "{highlight.color}",
                        selectedFocusColor: "{highlight.focus.color}",
                        icon: {
                            color: "{surface.400}",
                            focusColor: "{surface.400}"
                        }
                    },
                    optionGroup: {
                        background: "transparent",
                        color: "{text.muted.color}"
                    }
                },
                navigation: {
                    item: {
                        focusBackground: "{surface.800}",
                        activeBackground: "{surface.700}",
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        activeColor: "{text.hover.color}",
                        icon: {
                            color: "{surface.400}",
                            focusColor: "{surface.400}",
                            activeColor: "{surface.400}"
                        }
                    },
                    submenuLabel: {
                        background: "transparent",
                        color: "{text.muted.color}"
                    },
                    submenuIcon: {
                        color: "{surface.400}",
                        focusColor: "{surface.400}",
                        activeColor: "{surface.400}"
                    }
                }
            }
        }
    },
    components: {
        accordion: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            panel: {
                borderWidth: "0",
                borderColor: "{content.border.color}"
            },
            header: {
                color: "{text.color}",
                hoverColor: "{text.color}",
                activeColor: "{text.color}",
                padding: "1.25rem",
                fontWeight: "600",
                borderRadius: "0",
                borderWidth: "0",
                borderColor: "{content.border.color}",
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                activeBackground: "{content.background}",
                activeHoverBackground: "{content.background}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                },
                toggleIcon: {
                    color: "{text.muted.color}",
                    hoverColor: "{text.muted.color}",
                    activeColor: "{text.muted.color}",
                    activeHoverColor: "{text.muted.color}"
                },
                first: {
                    topBorderRadius: "{content.border.radius}",
                    borderWidth: "0"
                },
                last: {
                    bottomBorderRadius: "{content.border.radius}",
                    activeBottomBorderRadius: "0"
                }
            },
            content: {
                borderWidth: "0",
                borderColor: "{content.border.color}",
                background: "{content.background}",
                color: "{text.color}",
                padding: "0 1.25rem 1.25rem 1.25rem"
            }
        },
        autocomplete: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledHoverBackground: "{form.field.filled.hover.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}"
            },
            overlay: {
                background: "{overlay.select.background}",
                borderColor: "{overlay.select.border.color}",
                borderRadius: "{overlay.select.border.radius}",
                color: "{overlay.select.color}",
                shadow: "{overlay.select.shadow}"
            },
            list: {
                padding: "{list.padding}",
                gap: "{list.gap}"
            },
            option: {
                focusBackground: "{list.option.focus.background}",
                selectedBackground: "{list.option.selected.background}",
                selectedFocusBackground: "{list.option.selected.focus.background}",
                color: "{list.option.color}",
                focusColor: "{list.option.focus.color}",
                selectedColor: "{list.option.selected.color}",
                selectedFocusColor: "{list.option.selected.focus.color}",
                padding: "{list.option.padding}",
                borderRadius: "{list.option.border.radius}"
            },
            optionGroup: {
                background: "{list.option.group.background}",
                color: "{list.option.group.color}",
                fontWeight: "{list.option.group.font.weight}",
                padding: "{list.option.group.padding}"
            },
            dropdown: {
                width: "3rem",
                sm: {
                    width: "2.5rem"
                },
                lg: {
                    width: "3.5rem"
                },
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.border.color}",
                activeBorderColor: "{form.field.border.color}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            },
            chip: {
                borderRadius: "{border.radius.sm}"
            },
            emptyMessage: {
                padding: "{list.option.padding}"
            },
            colorScheme: {
                light: {
                    chip: {
                        focusBackground: "{surface.300}",
                        focusColor: "{surface.950}"
                    },
                    dropdown: {
                        background: "{surface.100}",
                        hoverBackground: "{surface.200}",
                        activeBackground: "{surface.300}",
                        color: "{surface.600}",
                        hoverColor: "{surface.700}",
                        activeColor: "{surface.800}"
                    }
                },
                dark: {
                    chip: {
                        focusBackground: "{surface.600}",
                        focusColor: "{surface.0}"
                    },
                    dropdown: {
                        background: "{surface.800}",
                        hoverBackground: "{surface.700}",
                        activeBackground: "{surface.600}",
                        color: "{surface.300}",
                        hoverColor: "{surface.200}",
                        activeColor: "{surface.100}"
                    }
                }
            }
        },
        avatar: {
            root: {
                width: "2rem",
                height: "2rem",
                fontSize: "1rem",
                background: "{content.border.color}",
                color: "{content.color}",
                borderRadius: "{content.border.radius}"
            },
            icon: {
                size: "1rem"
            },
            group: {
                borderColor: "{content.background}",
                offset: "-0.75rem"
            },
            lg: {
                width: "3rem",
                height: "3rem",
                fontSize: "1.5rem",
                icon: {
                    size: "1.5rem"
                },
                group: {
                    offset: "-1rem"
                }
            },
            xl: {
                width: "4rem",
                height: "4rem",
                fontSize: "2rem",
                icon: {
                    size: "2rem"
                },
                group: {
                    offset: "-1.5rem"
                }
            }
        },
        badge: {
            root: {
                borderRadius: "{border.radius.md}",
                padding: "0 0.5rem",
                fontSize: "0.75rem",
                fontWeight: "700",
                minWidth: "1.5rem",
                height: "1.5rem"
            },
            dot: {
                size: "0.5rem"
            },
            sm: {
                fontSize: "0.625rem",
                minWidth: "1.25rem",
                height: "1.25rem"
            },
            lg: {
                fontSize: "0.875rem",
                minWidth: "1.75rem",
                height: "1.75rem"
            },
            xl: {
                fontSize: "1rem",
                minWidth: "2rem",
                height: "2rem"
            },
            colorScheme: {
                light: {
                    primary: {
                        background: "{primary.color}",
                        color: "{primary.contrast.color}"
                    },
                    secondary: {
                        background: "{surface.100}",
                        color: "{surface.600}"
                    },
                    success: {
                        background: "{teal.500}",
                        color: "{surface.0}"
                    },
                    info: {
                        background: "{blue.500}",
                        color: "{surface.0}"
                    },
                    warn: {
                        background: "{orange.500}",
                        color: "{surface.0}"
                    },
                    danger: {
                        background: "{red.700}",
                        color: "{surface.0}"
                    },
                    contrast: {
                        background: "{surface.950}",
                        color: "{surface.0}"
                    }
                },
                dark: {
                    primary: {
                        background: "{primary.color}",
                        color: "{primary.contrast.color}"
                    },
                    secondary: {
                        background: "{surface.800}",
                        color: "{surface.300}"
                    },
                    success: {
                        background: "{green.400}",
                        color: "{green.950}"
                    },
                    info: {
                        background: "{blue.400}",
                        color: "{blue.950}"
                    },
                    warn: {
                        background: "{orange.400}",
                        color: "{orange.950}"
                    },
                    danger: {
                        background: "{red.400}",
                        color: "{red.950}"
                    },
                    contrast: {
                        background: "{surface.0}",
                        color: "{surface.950}"
                    }
                }
            }
        },
        blockui: {
            root: {
                borderRadius: "{content.border.radius}"
            }
        },
        breadcrumb: {
            root: {
                padding: "1rem",
                background: "{content.background}",
                gap: "0.5rem",
                transitionDuration: "{transition.duration}"
            },
            item: {
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                borderRadius: "{content.border.radius}",
                gap: "{navigation.item.gap}",
                icon: {
                    color: "{navigation.item.icon.color}",
                    hoverColor: "{navigation.item.icon.focus.color}"
                },
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            separator: {
                color: "{navigation.item.icon.color}"
            }
        },
        button: {
            root: {
                borderRadius: "{form.field.border.radius}",
                roundedBorderRadius: "2rem",
                gap: "0.5rem",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                iconOnlyWidth: "2.5rem",
                sm: {
                    fontSize: "{form.field.sm.font.size}",
                    paddingX: "{form.field.sm.padding.x}",
                    paddingY: "{form.field.sm.padding.y}"
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    paddingX: "{form.field.lg.padding.x}",
                    paddingY: "{form.field.lg.padding.y}"
                },
                label: {
                    fontWeight: "500"
                },
                raisedShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    offset: "{focus.ring.offset}"
                },
                badgeSize: "1rem",
                transitionDuration: "{form.field.transition.duration}"
            },
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            background: "{primary.color}",
                            hoverBackground: "{primary.hover.color}",
                            activeBackground: "{primary.active.color}",
                            borderColor: "{primary.color}",
                            hoverBorderColor: "{primary.hover.color}",
                            activeBorderColor: "{primary.active.color}",
                            color: "{primary.contrast.color}",
                            hoverColor: "{primary.contrast.color}",
                            activeColor: "{primary.contrast.color}",
                            focusRing: {
                                color: "{primary.color}",
                                shadow: "none"
                            },
                        },
                        secondary: {
                            background: "{surface.100}",
                            hoverBackground: "{surface.200}",
                            activeBackground: "{surface.300}",
                            borderColor: "{surface.100}",
                            hoverBorderColor: "{surface.200}",
                            activeBorderColor: "{surface.300}",
                            color: "{surface.600}",
                            hoverColor: "{surface.700}",
                            activeColor: "{surface.800}",
                            focusRing: {
                                color: "{surface.600}",
                                shadow: "none"
                            }
                        },
                        info: {
                            background: "{blue.500}",
                            hoverBackground: "{blue.400}",
                            activeBackground: "{blue.300}",
                            borderColor: "{blue.500}",
                            hoverBorderColor: "{blue.400}",
                            activeBorderColor: "{blue.300}",
                            color: "#ffffff",
                            hoverColor: "#ffffff",
                            activeColor: "#ffffff",
                            focusRing: {
                                color: "{blue.500}",
                                shadow: "none"
                            }
                        },
                        success: {
                            background: "{teal.500}",
                            hoverBackground: "{teal.400}",
                            activeBackground: "{teal.300}",
                            borderColor: "{teal.500}",
                            hoverBorderColor: "{teal.400}",
                            activeBorderColor: "{teal.300}",
                            color: "#ffffff",
                            hoverColor: "#ffffff",
                            activeColor: "#ffffff",
                            focusRing: {
                                color: "{teal.500}",
                                shadow: "none"
                            }
                        },
                        warn: {
                            background: "{orange.500}",
                            hoverBackground: "{orange.400}",
                            activeBackground: "{orange.300}",
                            borderColor: "{orange.500}",
                            hoverBorderColor: "{orange.400}",
                            activeBorderColor: "{orange.300}",
                            color: "#ffffff",
                            hoverColor: "#ffffff",
                            activeColor: "#ffffff",
                            focusRing: {
                                color: "{orange.500}",
                                shadow: "none"
                            }
                        },
                        help: {
                            background: "{violet.500}",
                            hoverBackground: "{violet.400}",
                            activeBackground: "{violet.300}",
                            borderColor: "{violet.500}",
                            hoverBorderColor: "{violet.400}",
                            activeBorderColor: "{violet.300}",
                            color: "#ffffff",
                            hoverColor: "#ffffff",
                            activeColor: "#ffffff",
                            focusRing: {
                                color: "{violet.500}",
                                shadow: "none"
                            }
                        },
                        danger: {
                            background: "{red.700}",
                            hoverBackground: "{red.400}",
                            activeBackground: "{red.300}",
                            borderColor: "{red.700}",
                            hoverBorderColor: "{red.400}",
                            activeBorderColor: "{red.300}",
                            color: "#ffffff",
                            hoverColor: "#ffffff",
                            activeColor: "#ffffff",
                            focusRing: {
                                color: "{red.700}",
                                shadow: "none"
                            }
                        },
                        contrast: {
                            background: "{surface.950}",
                            hoverBackground: "{surface.800}",
                            activeBackground: "{surface.700}",
                            borderColor: "{surface.950}",
                            hoverBorderColor: "{surface.800}",
                            activeBorderColor: "{surface.700}",
                            color: "{surface.0}",
                            hoverColor: "{surface.0}",
                            activeColor: "{surface.0}",
                            focusRing: {
                                color: "{surface.950}",
                                shadow: "none"
                            }
                        }
                    },
                    outlined: {
                        primary: {
                            hoverBackground: "{primary.50}",
                            activeBackground: "{primary.100}",
                            borderColor: "{primary.color}",
                            color: "{primary.color}"
                        },
                        secondary: {
                            hoverBackground: "{slate.50}",
                            activeBackground: "{slate.100}",
                            borderColor: "{surface.400}",
                            color: "{surface.600}"
                        },
                        success: {
                            hoverBackground: "{green.50}",
                            activeBackground: "{green.100}",
                            borderColor: "{green.500}",
                            color: "{green.500}"
                        },
                        info: {
                            hoverBackground: "{blue.50}",
                            activeBackground: "{blue.100}",
                            borderColor: "{blue.500}",
                            color: "{blue.500}"
                        },
                        warn: {
                            hoverBackground: "{orange.50}",
                            activeBackground: "{orange.100}",
                            borderColor: "{orange.500}",
                            color: "{orange.500}"
                        },
                        help: {
                            hoverBackground: "{violet.50}",
                            activeBackground: "{violet.100}",
                            borderColor: "{violet.500}",
                            color: "{violet.500}"
                        },
                        danger: {
                            hoverBackground: "{red.50}",
                            activeBackground: "{red.100}",
                            borderColor: "{red.500}",
                            color: "{red.500}"
                        },
                        contrast: {
                            hoverBackground: "{surface.50}",
                            activeBackground: "{surface.100}",
                            borderColor: "{surface.950}",
                            color: "{surface.950}"
                        },
                        plain: {
                            hoverBackground: "{surface.50}",
                            activeBackground: "{surface.100}",
                            borderColor: "{surface.900}",
                            color: "{surface.900}"
                        }
                    },
                    text: {
                        primary: {
                            hoverBackground: "{primary.50}",
                            activeBackground: "{primary.100}",
                            color: "{primary.color}"
                        },
                        secondary: {
                            hoverBackground: "{surface.50}",
                            activeBackground: "{surface.100}",
                            color: "{surface.600}"
                        },
                        success: {
                            hoverBackground: "{green.50}",
                            activeBackground: "{green.100}",
                            color: "{green.500}"
                        },
                        info: {
                            hoverBackground: "{blue.50}",
                            activeBackground: "{blue.100}",
                            color: "{blue.500}"
                        },
                        warn: {
                            hoverBackground: "{orange.50}",
                            activeBackground: "{orange.100}",
                            color: "{orange.500}"
                        },
                        help: {
                            hoverBackground: "{violet.50}",
                            activeBackground: "{violet.100}",
                            color: "{violet.500}"
                        },
                        danger: {
                            hoverBackground: "{red.50}",
                            activeBackground: "{red.100}",
                            color: "{red.500}"
                        },
                        contrast: {
                            hoverBackground: "{surface.50}",
                            activeBackground: "{surface.100}",
                            color: "{surface.950}"
                        },
                        plain: {
                            hoverBackground: "{surface.50}",
                            activeBackground: "{surface.100}",
                            color: "{surface.900}"
                        }
                    },
                    link: {
                        color: "{primary.color}",
                        hoverColor: "{primary.color}",
                        activeColor: "{primary.color}"
                    }
                },
                dark: {
                    root: {
                        primary: {
                            background: "{primary.color}",
                            hoverBackground: "{primary.hover.color}",
                            activeBackground: "{primary.active.color}",
                            borderColor: "{primary.color}",
                            hoverBorderColor: "{primary.hover.color}",
                            activeBorderColor: "{primary.active.color}",
                            color: "{primary.contrast.color}",
                            hoverColor: "{primary.contrast.color}",
                            activeColor: "{primary.contrast.color}",
                            focusRing: {
                                color: "{primary.color}",
                                shadow: "none"
                            }
                        },
                        secondary: {
                            background: "{surface.800}",
                            hoverBackground: "{surface.700}",
                            activeBackground: "{surface.600}",
                            borderColor: "{surface.800}",
                            hoverBorderColor: "{surface.700}",
                            activeBorderColor: "{surface.600}",
                            color: "{surface.300}",
                            hoverColor: "{surface.200}",
                            activeColor: "{surface.100}",
                            focusRing: {
                                color: "{surface.300}",
                                shadow: "none"
                            }
                        },
                        info: {
                            background: "{blue.400}",
                            hoverBackground: "{blue.300}",
                            activeBackground: "{blue.200}",
                            borderColor: "{blue.400}",
                            hoverBorderColor: "{blue.300}",
                            activeBorderColor: "{blue.200}",
                            color: "{blue.950}",
                            hoverColor: "{blue.950}",
                            activeColor: "{blue.950}",
                            focusRing: {
                                color: "{blue.400}",
                                shadow: "none"
                            }
                        },
                        success: {
                            background: "{green.400}",
                            hoverBackground: "{green.300}",
                            activeBackground: "{green.200}",
                            borderColor: "{green.400}",
                            hoverBorderColor: "{green.300}",
                            activeBorderColor: "{green.200}",
                            color: "{green.950}",
                            hoverColor: "{green.950}",
                            activeColor: "{green.950}",
                            focusRing: {
                                color: "{green.400}",
                                shadow: "none"
                            }
                        },
                        warn: {
                            background: "{orange.400}",
                            hoverBackground: "{orange.300}",
                            activeBackground: "{orange.200}",
                            borderColor: "{orange.400}",
                            hoverBorderColor: "{orange.300}",
                            activeBorderColor: "{orange.200}",
                            color: "{orange.950}",
                            hoverColor: "{orange.950}",
                            activeColor: "{orange.950}",
                            focusRing: {
                                color: "{orange.400}",
                                shadow: "none"
                            }
                        },
                        help: {
                            background: "{violet.400}",
                            hoverBackground: "{violet.300}",
                            activeBackground: "{violet.200}",
                            borderColor: "{violet.400}",
                            hoverBorderColor: "{violet.300}",
                            activeBorderColor: "{violet.200}",
                            color: "{violet.950}",
                            hoverColor: "{violet.950}",
                            activeColor: "{violet.950}",
                            focusRing: {
                                color: "{violet.400}",
                                shadow: "none"
                            }
                        },
                        danger: {
                            background: "{red.400}",
                            hoverBackground: "{red.300}",
                            activeBackground: "{red.200}",
                            borderColor: "{red.400}",
                            hoverBorderColor: "{red.300}",
                            activeBorderColor: "{red.200}",
                            color: "{red.950}",
                            hoverColor: "{red.950}",
                            activeColor: "{red.950}",
                            focusRing: {
                                color: "{red.400}",
                                shadow: "none"
                            }
                        },
                        contrast: {
                            background: "{surface.0}",
                            hoverBackground: "{surface.100}",
                            activeBackground: "{surface.200}",
                            borderColor: "{surface.0}",
                            hoverBorderColor: "{surface.100}",
                            activeBorderColor: "{surface.200}",
                            color: "{surface.950}",
                            hoverColor: "{surface.950}",
                            activeColor: "{surface.950}",
                            focusRing: {
                                color: "{surface.0}",
                                shadow: "none"
                            }
                        }
                    },
                    outlined: {
                        primary: {
                            hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
                            borderColor: "{primary.700}",
                            color: "{primary.color}"
                        },
                        secondary: {
                            hoverBackground: "rgba(255,255,255,0.04)",
                            activeBackground: "rgba(255,255,255,0.16)",
                            borderColor: "{surface.700}",
                            color: "{surface.400}"
                        },
                        success: {
                            hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
                            borderColor: "{green.700}",
                            color: "{green.400}"
                        },
                        info: {
                            hoverBackground: "color-mix(in srgb, {blue.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {blue.400}, transparent 84%)",
                            borderColor: "{blue.700}",
                            color: "{blue.400}"
                        },
                        warn: {
                            hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
                            borderColor: "{orange.700}",
                            color: "{orange.400}"
                        },
                        help: {
                            hoverBackground: "color-mix(in srgb, {violet.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {violet.400}, transparent 84%)",
                            borderColor: "{violet.700}",
                            color: "{violet.400}"
                        },
                        danger: {
                            hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
                            borderColor: "{red.700}",
                            color: "{red.400}"
                        },
                        contrast: {
                            hoverBackground: "{surface.800}",
                            activeBackground: "{surface.700}",
                            borderColor: "{surface.500}",
                            color: "{surface.0}"
                        },
                        plain: {
                            hoverBackground: "{surface.800}",
                            activeBackground: "{surface.700}",
                            borderColor: "{surface.600}",
                            color: "{surface.0}"
                        }
                    },
                    text: {
                        primary: {
                            hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
                            color: "{primary.color}"
                        },
                        secondary: {
                            hoverBackground: "{surface.800}",
                            activeBackground: "{surface.700}",
                            color: "{surface.400}"
                        },
                        success: {
                            hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
                            color: "{green.400}"
                        },
                        info: {
                            hoverBackground: "color-mix(in srgb, {blue.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {blue.400}, transparent 84%)",
                            color: "{blue.400}"
                        },
                        warn: {
                            hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
                            color: "{orange.400}"
                        },
                        help: {
                            hoverBackground: "color-mix(in srgb, {violet.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {violet.400}, transparent 84%)",
                            color: "{violet.400}"
                        },
                        danger: {
                            hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
                            activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
                            color: "{red.400}"
                        },
                        contrast: {
                            hoverBackground: "{surface.800}",
                            activeBackground: "{surface.700}",
                            color: "{surface.0}"
                        },
                        plain: {
                            hoverBackground: "{surface.800}",
                            activeBackground: "{surface.700}",
                            color: "{surface.0}"
                        }
                    },
                    link: {
                        color: "{primary.color}",
                        hoverColor: "{primary.color}",
                        activeColor: "{primary.color}"
                    }
                }
            }
        },
        datepicker: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            panel: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                borderRadius: "{content.border.radius}",
                shadow: "{overlay.popover.shadow}",
                padding: "0.5rem"
            },
            header: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                padding: "0 0 0.5rem 0"
            },
            title: {
                gap: "0.5rem",
                fontWeight: "700"
            },
            dropdown: {
                width: "3rem",
                sm: {
                    width: "2.5rem"
                },
                lg: {
                    width: "3.5rem"
                },
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.border.color}",
                activeBorderColor: "{form.field.border.color}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "nıne"
                }
            },
            inputIcon: {
                color: "{form.field.icon.color}"
            },
            selectMonth: {
                hoverBackground: "{content.hover.background}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                padding: "0.5rem 0.75rem",
                borderRadius: "{content.border.radius}"
            },
            selectYear: {
                hoverBackground: "{content.hover.background}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                padding: "0.5rem 0.75rem",
                borderRadius: "{content.border.radius}"
            },
            group: {
                borderColor: "{content.border.color}",
                gap: "{overlay.popover.padding}"
            },
            dayView: {
                margin: "0.5rem 0 0 0"
            },
            weekDay: {
                padding: "0.5rem",
                fontWeight: "700",
                color: "{content.color}"
            },
            date: {
                hoverBackground: "{content.hover.background}",
                selectedBackground: "{primary.color}",
                rangeSelectedBackground: "{highlight.background}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                selectedColor: "{primary.contrast.color}",
                rangeSelectedColor: "{highlight.color}",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                padding: "0.125rem",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                },
            },
            monthView: {
                margin: "0.5rem 0 0 0"
            },
            month: {
                padding: "0.625rem",
                borderRadius: "{content.border.radius}"
            },
            yearView: {
                margin: "0.5rem 0 0 0"
            },
            year: {
                padding: "0.625rem",
                borderRadius: "{content.border.radius}"
            },
            buttonbar: {
                padding: "0.5rem 0 0 0",
                borderColor: "{content.border.color}"
            },
            timePicker: {
                padding: "0.5rem 0 0 0",
                borderColor: "{content.border.color}",
                gap: "0.5rem",
                buttonGap: "0.25rem"
            },
            colorScheme: {
                light: {
                    dropdown: {
                        background: "{surface.100}",
                        hoverBackground: "{surface.200}",
                        activeBackground: "{surface.300}",
                        color: "{surface.600}",
                        hoverColor: "{surface.700}",
                        activeColor: "{surface.800}"
                    },
                    today: {
                        background: "{surface.200}",
                        color: "{surface.900}"
                    }
                },
                dark: {
                    dropdown: {
                        background: "{surface.800}",
                        hoverBackground: "{surface.700}",
                        activeBackground: "{surface.600}",
                        color: "{surface.300}",
                        hoverColor: "{surface.200}",
                        activeColor: "{surface.100}"
                    },
                    today: {
                        background: "{surface.700}",
                        color: "{surface.0}"
                    }
                }
            },
            css: ({dt}: any) => `
              .p-datepicker-select-year {
                  font-size: ${dt('fontSize.body.base')} !important;
              }

              .p-datepicker-select-month {
                font-size: ${dt('fontSize.body.base')} !important;
              }
              `
        },
        card: {
            root: {
                background: "{content.background}",
                borderRadius: "{border.radius.lg}",
                color: "{content.color}",
                shadow: "0px 1px 1px 0px rgba(9, 30, 66, 0.25), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)",
            },
            body: {
                padding: "1.5rem",
                gap: "0.75rem"
            },
            caption: {
                gap: "0.5rem"
            },
            title: {
                fontSize: "1.25rem",
                fontWeight: "500"
            },
            subtitle: {
                color: "{text.muted.color}"
            }
        },
        carousel: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            content: {
                gap: "0.25rem"
            },
            indicatorList: {
                padding: "1rem",
                gap: "1rem"
            },
            indicator: {
                width: "1.25rem",
                height: "1.25rem",
                borderRadius: "50%",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            },
            colorScheme: {
                light: {
                    indicator: {
                        background: "{surface.200}",
                        hoverBackground: "{surface.300}",
                        activeBackground: "{basic.brand}"
                    }
                },
                dark: {
                    indicator: {
                        background: "{surface.700}",
                        hoverBackground: "{surface.600}",
                        activeBackground: "{primary.color}"
                    }
                }
            }
        },
        cascadeselect: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledHoverBackground: "{form.field.filled.hover.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    fontSize: "{form.field.sm.font.size}",
                    paddingX: "{form.field.sm.padding.x}",
                    paddingY: "{form.field.sm.padding.y}"
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    paddingX: "{form.field.lg.padding.x}",
                    paddingY: "{form.field.lg.padding.y}"
                }
            },
            dropdown: {
                width: "2.5rem",
                color: "{form.field.icon.color}"
            },
            overlay: {
                background: "{overlay.select.background}",
                borderColor: "{overlay.select.border.color}",
                borderRadius: "{overlay.select.border.radius}",
                color: "{overlay.select.color}",
                shadow: "{overlay.select.shadow}"
            },
            list: {
                padding: "{list.padding}",
                gap: "{list.gap}",
                mobileIndent: "1rem"
            },
            option: {
                focusBackground: "{list.option.focus.background}",
                selectedBackground: "{list.option.selected.background}",
                selectedFocusBackground: "{list.option.selected.focus.background}",
                color: "{list.option.color}",
                focusColor: "{list.option.focus.color}",
                selectedColor: "{list.option.selected.color}",
                selectedFocusColor: "{list.option.selected.focus.color}",
                padding: "{list.option.padding}",
                borderRadius: "{list.option.border.radius}",
                icon: {
                    color: "{list.option.icon.color}",
                    focusColor: "{list.option.icon.focus.color}",
                    size: "0.875rem"
                }
            },
            clearIcon: {
                color: "{form.field.icon.color}"
            }
        },
        checkbox: {
            root: {
                borderRadius: "{border.radius.xs}",
                width: "18px",
                height: "18px",
                background: "{form.field.background}",
                checkedBackground: "{primary.color}",
                checkedHoverBackground: "{primary.600}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                checkedBorderColor: "{primary.color}",
                checkedHoverBorderColor: "{primary.color}",
                checkedFocusBorderColor: "{primary.color}",
                checkedDisabledBorderColor: "{form.field.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                shadow: "{form.field.shadow}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    width: "14px",
                    height: "14px"
                },
                lg: {
                    width: "22px",
                    height: "22px"
                }
            },
            icon: {
                size: "0.875rem",
                color: "{form.field.color}",
                checkedColor: "{primary.contrast.color}",
                checkedHoverColor: "{primary.contrast.color}",
                disabledColor: "{form.field.disabled.color}",
                sm: {
                    size: "0.75rem"
                },
                lg: {
                    size: "1rem"
                }
            }
        },
        chip: {
            root: {
                borderRadius: "2rem",
                paddingX: "0.75rem",
                paddingY: "0.75rem",
                gap: "0.5rem",
                transitionDuration: "{transition.duration}"
            },
            image: {
                width: "2.25rem",
                height: "2.25rem"
            },
            icon: {
                size: "1rem"
            },
            removeIcon: {
                size: "1rem",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}"
                }
            },
            colorScheme: {
                light: {
                    root: {
                        background: "{surface.50}",
                        color: "{text.color}"
                    },
                    icon: {
                        color: "{surface.600}"
                    },
                    removeIcon: {
                        color: "{surface.600}",
                        focusRing: {
                            shadow: "0 0 1px 4px {surface.300}"
                        }
                    }
                },
                dark: {
                    root: {
                        background: "{surface.700}",
                        color: "{surface.0}"
                    },
                    icon: {
                        color: "{surface.0}"
                    },
                    removeIcon: {
                        color: "{surface.0}",
                        focusRing: {
                            shadow: "0 0 1px 4px {surface.600}"
                        }
                    }
                }
            }
        },
        colorpicker: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            preview: {
                width: "2rem",
                height: "2rem",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            panel: {
                shadow: "{overlay.popover.shadow}",
                borderRadius: "{overlay.popover.borderRadius}"
            },
            colorScheme: {
                light: {
                    panel: {
                        background: "{surface.800}",
                        borderColor: "{surface.900}"
                    },
                    handle: {
                        color: "{surface.0}"
                    }
                },
                dark: {
                    panel: {
                        background: "{surface.900}",
                        borderColor: "{surface.700}"
                    },
                    handle: {
                        color: "{surface.0}"
                    }
                }
            }
        },
        confirmdialog: {
            icon: {
                size: "2rem",
                color: "{overlay.modal.color}"
            },
            content: {
                gap: "1rem"
            }
        },
        confirmpopup: {
            root: {
                background: "{overlay.popover.background}",
                borderColor: "{overlay.popover.border.color}",
                color: "{overlay.popover.color}",
                borderRadius: "{overlay.popover.border.radius}",
                shadow: "{overlay.popover.shadow}",
                gutter: "10px",
                arrowOffset: "1.25rem"
            },
            content: {
                padding: "{overlay.popover.padding}",
                gap: "1rem"
            },
            icon: {
                size: "1.5rem",
                color: "{overlay.popover.color}"
            },
            footer: {
                gap: "0.5rem",
                padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
            }
        },
        contextmenu: {
            root: {
                background: "{content.background}",
                borderColor: "transparent",
                color: "{content.color}",
                borderRadius: "{content.border.radius}",
                shadow: "{overlay.navigation.shadow}",
                transitionDuration: "{transition.duration}"
            },
            list: {
                padding: "{navigation.list.padding}",
                gap: "{navigation.list.gap}"
            },
            item: {
                focusBackground: "{navigation.item.focus.background}",
                activeBackground: "{navigation.item.active.background}",
                color: "{navigation.item.color}",
                focusColor: "{navigation.item.focus.color}",
                activeColor: "{navigation.item.active.color}",
                padding: "{navigation.item.padding}",
                borderRadius: "{navigation.item.border.radius}",
                gap: "{navigation.item.gap}",
                icon: {
                    color: "{navigation.item.icon.color}",
                    focusColor: "{navigation.item.icon.focus.color}",
                    activeColor: "{navigation.item.icon.active.color}"
                }
            },
            submenu: {
                mobileIndent: "1rem"
            },
            submenuIcon: {
                size: "{navigation.submenu.icon.size}",
                color: "{navigation.submenu.icon.color}",
                focusColor: "{navigation.submenu.icon.focus.color}",
                activeColor: "{navigation.submenu.icon.active.color}"
            },
            separator: {
                borderColor: "{content.border.color}"
            }
        },
        dataview: {
            root: {
                borderColor: "transparent",
                borderWidth: "0",
                borderRadius: "0",
                padding: "0"
            },
            header: {
                background: "{content.background}",
                color: "{content.color}",
                borderColor: "{content.border.color}",
                borderWidth: "0 0 1px 0",
                padding: "0.75rem 1rem",
                borderRadius: "0"
            },
            content: {
                background: "{content.background}",
                color: "{content.color}",
                borderColor: "transparent",
                borderWidth: "0",
                padding: "0",
                borderRadius: "0"
            },
            footer: {
                background: "{content.background}",
                color: "{content.color}",
                borderColor: "{content.border.color}",
                borderWidth: "1px 0 0 0",
                padding: "0.75rem 1rem",
                borderRadius: "0"
            },
            paginatorTop: {
                borderColor: "{content.border.color}",
                borderWidth: "0 0 1px 0"
            },
            paginatorBottom: {
                borderColor: "{content.border.color}",
                borderWidth: "1px 0 0 0"
            }
        },
        datatable: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            header: {
                background: "{content.background}",
                borderColor: "{datatable.border.color}",
                color: "{content.color}",
                borderWidth: "0 0 0px 0",
                padding: "0.75rem 1rem"
            },
            headerCell: {
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                selectedBackground: "{highlight.background}",
                borderColor: "{basic.brand}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                selectedColor: "{highlight.color}",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "-1px",
                    shadow: "{focus.ring.shadow}"
                }
            },
            columnTitle: {
                fontWeight: "600"
            },
            row: {
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                selectedBackground: "{primary.50}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                selectedColor: "{highlight.color}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "-1px",
                    shadow: "{focus.ring.shadow}"
                }
            },
            bodyCell: {
                borderColor: "{datatable.border.color}",
                padding: "0.75rem 1rem"
            },
            footerCell: {
                background: "{content.background}",
                borderColor: "{datatable.border.color}",
                color: "{content.color}",
                padding: "0.75rem 1rem"
            },
            columnFooter: {
                fontWeight: "600"
            },
            footer: {
                background: "{content.background}",
                borderColor: "{datatable.border.color}",
                color: "{content.color}",
                borderWidth: "0 0 1px 0",
                padding: "0.75rem 1rem"
            },
            dropPoint: {
                color: "{primary.color}"
            },
            columnResizerWidth: "0.5rem",
            resizeIndicator: {
                width: "1px",
                color: "{primary.color}"
            },
            sortIcon: {
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}",
                size: "0.875rem"
            },
            loadingIcon: {
                size: "2rem"
            },
            rowToggleButton: {
                hoverBackground: "{content.hover.background}",
                selectedHoverBackground: "{content.background}",
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                selectedHoverColor: "{primary.color}",
                size: "1.75rem",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            filter: {
                inlineGap: "0.5rem",
                overlaySelect: {
                    background: "{overlay.select.background}",
                    borderColor: "{overlay.select.border.color}",
                    borderRadius: "{overlay.select.border.radius}",
                    color: "{overlay.select.color}",
                    shadow: "{overlay.select.shadow}"
                },
                overlayPopover: {
                    background: "{overlay.popover.background}",
                    borderColor: "{overlay.popover.border.color}",
                    borderRadius: "{overlay.popover.border.radius}",
                    color: "{overlay.popover.color}",
                    shadow: "{overlay.popover.shadow}",
                    padding: "{overlay.popover.padding}",
                    gap: "0.5rem"
                },
                rule: {
                    borderColor: "{content.border.color}"
                },
                constraintList: {
                    padding: "{list.padding}",
                    gap: "{list.gap}"
                },
                constraint: {
                    focusBackground: "{list.option.focus.background}",
                    selectedBackground: "{list.option.selected.background}",
                    selectedFocusBackground: "{list.option.selected.focus.background}",
                    color: "{list.option.color}",
                    focusColor: "{list.option.focus.color}",
                    selectedColor: "{list.option.selected.color}",
                    selectedFocusColor: "{list.option.selected.focus.color}",
                    separator: {
                        borderColor: "{content.border.color}"
                    },
                    padding: "{list.option.padding}",
                    borderRadius: "{list.option.border.radius}"
                }
            },
            paginatorTop: {
                borderColor: "{datatable.border.color}",
                borderWidth: "0 0 1px 0"
            },
            paginatorBottom: {
                borderColor: "{datatable.border.color}",
                borderWidth: "0 0 1px 0"
            },
            colorScheme: {
                light: {
                    root: {
                        borderColor: "{gray.100}"
                    },
                    row: {
                        stripedBackground: "{surface.50}"
                    },
                    bodyCell: {
                        selectedBorderColor: "{primary.100}"
                    }
                },
                dark: {
                    root: {
                        borderColor: "{surface.800}"
                    },
                    row: {
                        stripedBackground: "{surface.950}"
                    },
                    bodyCell: {
                        selectedBorderColor: "{primary.900}"
                    }
                }
            },
            css: ({ dt }: any) => `
              .p-datatable {
                height: 100%;
                display: flex;
                flex-direction: column;

                .p-datatable-table-container {
                    flex: 1;

                    p-tablecheckbox, p-tableheadercheckbox {
                        p-checkbox {
                            display: flex;
                            align-items: center;
                        }
                    }

                    p-toggleswitch {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    td, tr {
                        font-size: ${dt('fontSize.body.base')};
                    }

                    td {
                        vertical-align: middle;
                    }
                }

                .p-paginator {
                    justify-content: flex-end;
                    padding: 12px;

                    .p-paginator-page, .p-paginator-next, .p-paginator-last, .p-paginator-first, .p-paginator-prev {
                        &:disabled {
                            opacity: 1;
                            color: ${dt('neutral.300')};
                        }
                    }
                }
              }
            `
        },
        dialog: {
            root: {
                background: "{overlay.modal.background}",
                borderColor: "{overlay.modal.border.color}",
                color: "{overlay.modal.color}",
                borderRadius: "{overlay.modal.border.radius}",
                shadow: "{overlay.modal.shadow}"
            },
            header: {
                padding: "{overlay.modal.padding}",
                gap: "0.5rem",
            },
            title: {
                fontSize: "1.25rem",
                fontWeight: "600"
            },
            content: {
                padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
            },
            footer: {
                padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
                gap: "0.5rem"
            }
        },
        divider: {
            root: {
                borderColor: "{content.border.color}"
            },
            content: {
                background: "{content.background}",
                color: "{text.color}"
            },
            horizontal: {
                margin: "1rem 0",
                padding: "0 1rem",
                content: {
                    padding: "0 0.5rem"
                }
            },
            vertical: {
                margin: "0 1rem",
                padding: "0.5rem 0",
                content: {
                    padding: "0.5rem 0"
                }
            }
        },
        dock: {
            root: {
                background: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                padding: "0.5rem",
                borderRadius: "{border.radius.xl}"
            },
            item: {
                borderRadius: "{content.border.radius}",
                padding: "0.5rem",
                size: "3rem",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            }
        },
        drawer: {
            root: {
                background: "{overlay.modal.background}",
                borderColor: "{overlay.modal.border.color}",
                color: "{overlay.modal.color}",
                shadow: "0px 10px 18px 0px rgba(9, 30, 66, 0.15), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)"
            },
            header: {
                padding: "{overlay.modal.padding}",
                borderWidth: "1px",
                borderColor: "{basic.brand}",
            },
            title: {
                fontSize: "1.5rem",
                fontWeight: "600"
            },
            content: {
                padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
            },
            footer: {
                padding: "{overlay.modal.padding}"
            },
            css: ({ dt }: any) => `
            .p-drawer {
                border-top: 4px solid ${dt('basic.brand')};
            }
            `
        },
        editor: {
            toolbar: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                borderRadius: "{content.border.radius}"
            },
            toolbarItem: {
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                activeColor: "{primary.color}"
            },
            overlay: {
                background: "{overlay.select.background}",
                borderColor: "{overlay.select.border.color}",
                borderRadius: "{overlay.select.border.radius}",
                color: "{overlay.select.color}",
                shadow: "{overlay.select.shadow}",
                padding: "{list.padding}"
            },
            overlayOption: {
                focusBackground: "{list.option.focus.background}",
                color: "{list.option.color}",
                focusColor: "{list.option.focus.color}",
                padding: "{list.option.padding}",
                borderRadius: "{list.option.border.radius}"
            },
            content: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                borderRadius: "{content.border.radius}"
            }
        },
        fieldset: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                borderRadius: "{content.border.radius}",
                color: "{content.color}",
                padding: "0 1.25rem 1.25rem 1.25rem",
                transitionDuration: "{transition.duration}"
            },
            legend: {
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                borderRadius: "{content.border.radius}",
                borderWidth: "1px",
                borderColor: "transparent",
                padding: "0.75rem 1rem",
                gap: "0.5rem",
                fontWeight: "600",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            },
            toggleIcon: {
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}"
            },
            content: {
                padding: "0"
            }
        },
        fileupload: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                borderRadius: "{content.border.radius}",
                transitionDuration: "{transition.duration}"
            },
            header: {
                background: "transparent",
                color: "{text.color}",
                padding: "1.25rem",
                borderColor: "unset",
                borderWidth: "0",
                borderRadius: "0",
                gap: "0.5rem"
            },
            content: {
                highlightBorderColor: "{primary.color}",
                padding: "0 1.25rem 1.25rem 1.25rem",
                gap: "1rem"
            },
            file: {
                padding: "1rem",
                gap: "1rem",
                borderColor: "{content.border.color}",
                info: {
                    gap: "0.5rem"
                }
            },
            fileList: {
                gap: "0.5rem"
            },
            progressbar: {
                height: "0.25rem"
            },
            basic: {
                gap: "0.5rem"
            }
        },
        iftalabel: {
            root: {
                color: "{form.field.float.label.color}",
                focusColor: "{form.field.float.label.focus.color}",
                invalidColor: "{form.field.float.label.invalid.color}",
                transitionDuration: "0.2s",
                positionX: "{form.field.padding.x}",
                top: "0.5rem",
                fontSize: "0.75rem",
                fontWeight: "400"
            },
            input: {
                paddingTop: "1.5rem",
                paddingBottom: "0.5rem"
            }
        },
        floatlabel: {
            root: {
                color: "{form.field.float.label.color}",
                focusColor: "{form.field.float.label.focus.color}",
                activeColor: "{form.field.float.label.active.color}",
                invalidColor: "{form.field.float.label.invalid.color}",
                transitionDuration: "0.2s",
                positionX: "{form.field.padding.x}",
                positionY: "{form.field.padding.y}",
                fontWeight: "500",
                active: {
                    fontSize: "0.75rem",
                    fontWeight: "400"
                }
            },
            over: {
                active: {
                    top: "-1.25rem"
                }
            },
            in: {
                input: {
                    paddingTop: "1.5rem",
                    paddingBottom: "0.5rem"
                },
                active: {
                    top: "0.5rem"
                }
            },
            on: {
                borderRadius: "{border.radius.xs}",
                active: {
                    background: "{form.field.background}",
                    padding: "0 0.125rem"
                }
            }
        },
        galleria: {
            root: {
                borderWidth: "1px",
                borderColor: "{content.border.color}",
                borderRadius: "{content.border.radius}",
                transitionDuration: "{transition.duration}"
            },
            navButton: {
                background: "rgba(255, 255, 255, 0.1)",
                hoverBackground: "rgba(255, 255, 255, 0.2)",
                color: "{surface.100}",
                hoverColor: "{surface.0}",
                size: "3rem",
                gutter: "0.5rem",
                prev: {
                    borderRadius: "50%"
                },
                next: {
                    borderRadius: "50%"
                },
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            navIcon: {
                size: "1.5rem"
            },
            thumbnailsContent: {
                background: "{content.background}",
                padding: "1rem 0.25rem"
            },
            thumbnailNavButton: {
                size: "2rem",
                borderRadius: "50%",
                gutter: "0.5rem",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            thumbnailNavButtonIcon: {
                size: "1rem"
            },
            caption: {
                background: "rgba(0, 0, 0, 0.5)",
                color: "{surface.100}",
                padding: "1rem"
            },
            indicatorList: {
                gap: "0.5rem",
                padding: "1rem"
            },
            indicatorButton: {
                width: "1rem",
                height: "1rem",
                activeBackground: "{primary.color}",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            insetIndicatorList: {
                background: "rgba(0, 0, 0, 0.5)"
            },
            insetIndicatorButton: {
                background: "rgba(255, 255, 255, 0.4)",
                hoverBackground: "rgba(255, 255, 255, 0.6)",
                activeBackground: "rgba(255, 255, 255, 0.9)"
            },
            closeButton: {
                size: "3rem",
                gutter: "0.5rem",
                background: "rgba(255, 255, 255, 0.1)",
                hoverBackground: "rgba(255, 255, 255, 0.2)",
                color: "{surface.50}",
                hoverColor: "{surface.0}",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            closeButtonIcon: {
                size: "1.5rem"
            },
            colorScheme: {
                light: {
                    thumbnailNavButton: {
                        hoverBackground: "{surface.100}",
                        color: "{surface.600}",
                        hoverColor: "{surface.700}"
                    },
                    indicatorButton: {
                        background: "{surface.200}",
                        hoverBackground: "{surface.300}"
                    }
                },
                dark: {
                    thumbnailNavButton: {
                        hoverBackground: "{surface.700}",
                        color: "{surface.400}",
                        hoverColor: "{surface.0}"
                    },
                    indicatorButton: {
                        background: "{surface.700}",
                        hoverBackground: "{surface.600}"
                    }
                }
            }
        },
        iconfield: {
            icon: {
                color: "{form.field.icon.color}"
            }
        },
        image: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            preview: {
                icon: {
                    size: "1.5rem"
                },
                mask: {
                    background: "{mask.background}",
                    color: "{mask.color}"
                }
            },
            toolbar: {
                position: {
                    left: "auto",
                    right: "1rem",
                    top: "1rem",
                    bottom: "auto"
                },
                blur: "8px",
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.2)",
                borderWidth: "1px",
                borderRadius: "30px",
                padding: ".5rem",
                gap: "0.5rem"
            },
            action: {
                hoverBackground: "rgba(255,255,255,0.1)",
                color: "{surface.50}",
                hoverColor: "{surface.0}",
                size: "3rem",
                iconSize: "1.5rem",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            }
        },
        imagecompare: {
            handle: {
                size: "20px",
                hoverSize: "40px",
                background: "rgba(255,255,255,0.4)",
                hoverBackground: "rgba(255,255,255,0.6)",
                borderColor: "unset",
                hoverBorderColor: "unset",
                borderWidth: "0",
                borderRadius: "50%",
                transitionDuration: "{transition.duration}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "rgba(255,255,255,0.3)",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            }
        },
        inlinemessage: {
            root: {
                padding: "{form.field.padding.y} {form.field.padding.x}",
                borderRadius: "{content.border.radius}",
                gap: "0.5rem"
            },
            text: {
                fontWeight: "500"
            },
            icon: {
                size: "1rem"
            },
            colorScheme: {
                light: {
                    info: {
                        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                        borderColor: "{blue.200}",
                        color: "{blue.600}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    success: {
                        background: "color-mix(in srgb, {green.50}, transparent 5%)",
                        borderColor: "{green.200}",
                        color: "{green.600}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    warn: {
                        background: "color-mix(in srgb,{orange.50}, transparent 5%)",
                        borderColor: "{orange.200}",
                        color: "{orange.600}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {orange.500}, transparent 96%)"
                    },
                    error: {
                        background: "color-mix(in srgb, {red.50}, transparent 5%)",
                        borderColor: "{red.200}",
                        color: "{red.600}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    secondary: {
                        background: "{surface.100}",
                        borderColor: "{surface.200}",
                        color: "{surface.600}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    contrast: {
                        background: "{surface.900}",
                        borderColor: "{surface.950}",
                        color: "{surface.50}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                },
                dark: {
                    info: {
                        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                        color: "{blue.500}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    success: {
                        background: "color-mix(in srgb, {green.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
                        color: "{green.500}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    warn: {
                        background: "color-mix(in srgb, {orange.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {orange.700}, transparent 64%)",
                        color: "{orange.500}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {orange.500}, transparent 96%)"
                    },
                    error: {
                        background: "color-mix(in srgb, {red.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                        color: "{red.500}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    secondary: {
                        background: "{surface.800}",
                        borderColor: "{surface.700}",
                        color: "{surface.300}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    contrast: {
                        background: "{surface.0}",
                        borderColor: "{surface.100}",
                        color: "{surface.950}",
                        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                }
            }
        },
        inplace: {
            root: {
                padding: "{form.field.padding.y} {form.field.padding.x}",
                borderRadius: "{content.border.radius}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                },
                transitionDuration: "{transition.duration}"
            },
            display: {
                hoverBackground: "{content.hover.background}",
                hoverColor: "{content.hover.color}"
            }
        },
        inputchips: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}"
            },
            chip: {
                borderRadius: "{border.radius.sm}"
            },
            colorScheme: {
                light: {
                    chip: {
                        focusBackground: "{surface.200}",
                        color: "{surface.800}"
                    }
                },
                dark: {
                    chip: {
                        focusBackground: "{surface.700}",
                        color: "{surface.0}"
                    }
                }
            }
        },
        inputgroup: {
            addon: {
                background: "{form.field.background}",
                borderColor: "{form.field.border.color}",
                color: "{form.field.icon.color}",
                borderRadius: "{form.field.border.radius}",
                padding: "0.75rem",
                minWidth: "3rem"
            }
        },
        inputnumber: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            button: {
                width: "3rem",
                borderRadius: "{form.field.border.radius}",
                verticalPadding: "{form.field.padding.y}"
            },
            colorScheme: {
                light: {
                    button: {
                        background: "transparent",
                        hoverBackground: "{surface.100}",
                        activeBackground: "{surface.200}",
                        borderColor: "{form.field.border.color}",
                        hoverBorderColor: "{form.field.border.color}",
                        activeBorderColor: "{form.field.border.color}",
                        color: "{surface.400}",
                        hoverColor: "{surface.500}",
                        activeColor: "{surface.600}",
                    }
                },
                dark: {
                    button: {
                        background: "transparent",
                        hoverBackground: "{surface.800}",
                        activeBackground: "{surface.700}",
                        borderColor: "{form.field.border.color}",
                        hoverBorderColor: "{form.field.border.color}",
                        activeBorderColor: "{form.field.border.color}",
                        color: "{surface.400}",
                        hoverColor: "{surface.300}",
                        activeColor: "{surface.200}"
                    }
                }
            }
        },
        inputotp: {
            root: {
                gap: "0.5rem"
            },
            input: {
                width: "3rem",
                sm: {
                    width: "2.5rem"
                },
                lg: {
                    width: "3.5rem"
                }
            }
        },
        inputtext: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledHoverBackground: "{form.field.filled.hover.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    fontSize: "{form.field.sm.font.size}",
                    paddingX: "{form.field.sm.padding.x}",
                    paddingY: "{form.field.sm.padding.y}"
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    paddingX: "{form.field.lg.padding.x}",
                    paddingY: "{form.field.lg.padding.y}"
                },
            }
        },
        knob: {
            root: {
                transitionDuration: "{transition.duration}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            value: {
                background: "{primary.color}"
            },
            range: {
                background: "{content.border.color}"
            },
            text: {
                color: "{text.muted.color}"
            }
        },
        listbox: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                borderColor: "{form.field.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                shadow: "{form.field.shadow}",
                borderRadius: "{form.field.border.radius}",
                transitionDuration: "{form.field.transition.duration}"
            },
            list: {
                padding: "{list.padding}",
                gap: "{list.gap}",
                header: {
                    padding: "{list.header.padding}"
                }
            },
            option: {
                focusBackground: "{list.option.focus.background}",
                selectedBackground: "{list.option.selected.background}",
                selectedFocusBackground: "{list.option.selected.focus.background}",
                color: "{list.option.color}",
                focusColor: "{list.option.focus.color}",
                selectedColor: "{list.option.selected.color}",
                selectedFocusColor: "{list.option.selected.focus.color}",
                padding: "{list.option.padding}",
                borderRadius: "{list.option.border.radius}"
            },
            optionGroup: {
                background: "{list.option.group.background}",
                color: "{list.option.group.color}",
                fontWeight: "{list.option.group.font.weight}",
                padding: "{list.option.group.padding}"
            },
            checkmark: {
                color: "{list.option.color}",
                gutterStart: "-0.375rem",
                gutterEnd: "0.375rem"
            },
            emptyMessage: {
                padding: "{list.option.padding}"
            },
            colorScheme: {
                light: {
                    option: {
                        stripedBackground: "{surface.50}"
                    }
                },
                dark: {
                    option: {
                        stripedBackground: "{surface.900}"
                    }
                }
            }
        },
        megamenu: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                borderRadius: "{content.border.radius}",
                color: "{content.color}",
                gap: "0.5rem",
                verticalOrientation: {
                    padding: "{navigation.list.padding}",
                    gap: "{navigation.list.gap}"
                },
                horizontalOrientation: {
                    padding: "0.5rem 0.75rem",
                    gap: "0.5rem"
                },
                transitionDuration: "{transition.duration}"
            },
            baseItem: {
                borderRadius: "{content.border.radius}",
                padding: "{navigation.item.padding}"
            },
            item: {
                focusBackground: "{navigation.item.focus.background}",
                activeBackground: "{navigation.item.active.background}",
                color: "{navigation.item.color}",
                focusColor: "{navigation.item.focus.color}",
                activeColor: "{navigation.item.active.color}",
                padding: "{navigation.item.padding}",
                borderRadius: "{navigation.item.border.radius}",
                gap: "{navigation.item.gap}",
                icon: {
                    color: "{navigation.item.icon.color}",
                    focusColor: "{navigation.item.icon.focus.color}",
                    activeColor: "{navigation.item.icon.active.color}"
                }
            },
            overlay: {
                padding: "0",
                background: "{content.background}",
                borderColor: "transparent",
                borderRadius: "{content.border.radius}",
                color: "{content.color}",
                shadow: "{overlay.navigation.shadow}",
                gap: "0.5rem"
            },
            submenu: {
                padding: "{navigation.list.padding}",
                gap: "{navigation.list.gap}"
            },
            submenuLabel: {
                padding: "{navigation.submenu.label.padding}",
                fontWeight: "{navigation.submenu.label.font.weight}",
                background: "{navigation.submenu.label.background.}",
                color: "{navigation.submenu.label.color}"
            },
            submenuIcon: {
                size: "{navigation.submenu.icon.size}",
                color: "{navigation.submenu.icon.color}",
                focusColor: "{navigation.submenu.icon.focus.color}",
                activeColor: "{navigation.submenu.icon.active.color}"
            },
            separator: {
                borderColor: "{content.border.color}"
            },
            mobileButton: {
                borderRadius: "50%",
                size: "2.5rem",
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}",
                hoverBackground: "{content.hover.background}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            }
        },
        menu: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                borderRadius: "{content.border.radius}",
                shadow: "{overlay.navigation.shadow}",
                transitionDuration: "{transition.duration}"
            },
            list: {
                padding: "{navigation.list.padding}",
                gap: "{navigation.list.gap}"
            },
            item: {
                focusBackground: "{navigation.item.focus.background}",
                color: "{navigation.item.color}",
                focusColor: "{navigation.item.focus.color}",
                padding: "{navigation.item.padding}",
                borderRadius: "{navigation.item.border.radius}",
                gap: "{navigation.item.gap}",
                icon: {
                    color: "{navigation.item.icon.color}",
                    focusColor: "{navigation.item.icon.focus.color}"
                }
            },
            submenuLabel: {
                padding: "{navigation.submenu.label.padding}",
                fontWeight: "{navigation.submenu.label.font.weight}",
                background: "{navigation.submenu.label.background}",
                color: "{navigation.submenu.label.color}"
            },
            separator: {
                borderColor: "{content.border.color}"
            }
        },
        menubar: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                borderRadius: "{content.border.radius}",
                color: "{content.color}",
                gap: "0.5rem",
                padding: "0.5rem 0.75rem",
                transitionDuration: "{transition.duration}"
            },
            baseItem: {
                borderRadius: "{content.border.radius}",
                padding: "{navigation.item.padding}"
            },
            item: {
                focusBackground: "{navigation.item.focus.background}",
                activeBackground: "{navigation.item.active.background}",
                color: "{navigation.item.color}",
                focusColor: "{navigation.item.focus.color}",
                activeColor: "{navigation.item.active.color}",
                padding: "{navigation.item.padding}",
                borderRadius: "{navigation.item.border.radius}",
                gap: "{navigation.item.gap}",
                icon: {
                    color: "{navigation.item.icon.color}",
                    focusColor: "{navigation.item.icon.focus.color}",
                    activeColor: "{navigation.item.icon.active.color}"
                }
            },
            submenu: {
                padding: "{navigation.list.padding}",
                gap: "{navigation.list.gap}",
                background: "{content.background}",
                borderColor: "transparent",
                borderRadius: "{content.border.radius}",
                shadow: "{overlay.navigation.shadow}",
                mobileIndent: "1rem",
                icon: {
                    size: "{navigation.submenu.icon.size}",
                    color: "{navigation.submenu.icon.color}",
                    focusColor: "{navigation.submenu.icon.focus.color}",
                    activeColor: "{navigation.submenu.icon.active.color}"
                }
            },
            separator: {
                borderColor: "{content.border.color}"
            },
            mobileButton: {
                borderRadius: "50%",
                size: "2.5rem",
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}",
                hoverBackground: "{content.hover.background}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            }
        },
        message: {
            root: {
                borderRadius: "{content.border.radius}",
                borderWidth: "0",
                transitionDuration: "{transition.duration}"
            },
            content: {
                padding: "1rem 1.25rem",
                gap: "0.5rem",
                sm: {
                    padding: "0.625rem 0.625rem"
                },
                lg: {
                    padding: "0.825rem 0.825rem"
                }
            },
            text: {
                fontSize: "1rem",
                fontWeight: "500",
                sm: {
                    fontSize: "0.875rem"
                },
                lg: {
                    fontSize: "1.125rem"
                }
            },
            icon: {
                size: "1.25rem",
                sm: {
                    size: "1rem"
                },
                lg: {
                    size: "1.5rem"
                }
            },
            closeButton: {
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    offset: "{focus.ring.offset}"
                }
            },
            closeIcon: {
                size: "1rem",
                sm: {
                    fontSize: "0.875rem"
                },
                lg: {
                    fontSize: "1.125rem"
                }
            },
            outlined: {
                root: {
                    borderWidth: "1px"
                }
            },
            simple: {
                content: {
                    padding: "0"
                }
            },
            colorScheme: {
                light: {
                    info: {
                        background: "color-mix(in srgb, {blue.100}, transparent 5%)",
                        borderColor: "{blue.200}",
                        color: "{blue.700}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{blue.100}",
                            focusRing: {
                                color: "{blue.600}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{blue.700}",
                            borderColor: "{blue.700}"
                        },
                        simple: {
                            color: "{blue.700}"
                        }
                    },
                    success: {
                        background: "color-mix(in srgb, {teal.100}, transparent 5%)",
                        borderColor: "{teal.200}",
                        color: "{teal.600}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{teal.100}",
                            focusRing: {
                                color: "{teal.600}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{teal.600}",
                            borderColor: "{teal.600}"
                        },
                        simple: {
                            color: "{teal.600}"
                        }
                    },
                    warn: {
                        background: "color-mix(in srgb,{orange.100}, transparent 5%)",
                        borderColor: "{orange.200}",
                        color: "{orange.900}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{orange.100}",
                            focusRing: {
                                color: "{orange.600}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{orange.900}",
                            borderColor: "{orange.900}"
                        },
                        simple: {
                            color: "{orange.900}"
                        }
                    },
                    error: {
                        background: "color-mix(in srgb, {red.100}, transparent 5%)",
                        borderColor: "{red.200}",
                        color: "{red.900}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{red.100}",
                            focusRing: {
                                color: "{red.600}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{red.900}",
                            borderColor: "{red.900}"
                        },
                        simple: {
                            color: "{red.900}"
                        }
                    },
                    secondary: {
                        background: "{surface.100}",
                        borderColor: "{surface.200}",
                        color: "{surface.600}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{surface.200}",
                            focusRing: {
                                color: "{surface.600}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{surface.600}",
                            borderColor: "{surface.600}"
                        },
                        simple: {
                            color: "{surface.600}"
                        }
                    },
                    contrast: {
                        background: "{surface.900}",
                        borderColor: "{surface.950}",
                        color: "{surface.50}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{surface.800}",
                            focusRing: {
                                color: "{surface.50}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{surface.950}",
                            borderColor: "{surface.950}"
                        },
                        simple: {
                            color: "{surface.950}"
                        }
                    }
                },
                dark: {
                    info: {
                        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                        color: "{blue.500}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{blue.500}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{blue.500}",
                            borderColor: "{blue.500}"
                        },
                        simple: {
                            color: "{blue.500}"
                        }
                    },
                    success: {
                        background: "color-mix(in srgb, {green.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
                        color: "{green.500}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{green.500}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{green.500}",
                            borderColor: "{green.500}"
                        },
                        simple: {
                            color: "{green.500}"
                        }
                    },
                    warn: {
                        background: "color-mix(in srgb, {orange.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {orange.700}, transparent 64%)",
                        color: "{orange.500}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{orange.500}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{orange.500}",
                            borderColor: "{orange.500}"
                        },
                        simple: {
                            color: "{orange.500}"
                        }
                    },
                    error: {
                        background: "color-mix(in srgb, {red.500}, transparent 84%)",
                        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                        color: "{red.500}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{red.500}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{red.500}",
                            borderColor: "{red.500}"
                        },
                        simple: {
                            color: "{red.500}"
                        }
                    },
                    secondary: {
                        background: "{surface.800}",
                        borderColor: "{surface.700}",
                        color: "{surface.300}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{surface.700}",
                            focusRing: {
                                color: "{surface.300}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{surface.400}",
                            borderColor: "{surface.400}"
                        },
                        simple: {
                            color: "{surface.400}"
                        }
                    },
                    contrast: {
                        background: "{surface.0}",
                        borderColor: "{surface.100}",
                        color: "{surface.950}",
                        shadow: "none",
                        closeButton: {
                            hoverBackground: "{surface.100}",
                            focusRing: {
                                color: "{surface.950}",
                                shadow: "none"
                            }
                        },
                        outlined: {
                            color: "{surface.0}",
                            borderColor: "{surface.0}"
                        },
                        simple: {
                            color: "{surface.0}"
                        }
                    }
                }
            }
        },
        metergroup: {
            root: {
                borderRadius: "{content.border.radius}",
                gap: "1rem"
            },
            meters: {
                background: "{content.border.color}",
                size: "0.5rem"
            },
            label: {
                gap: "0.5rem"
            },
            labelMarker: {
                size: "0.5rem"
            },
            labelIcon: {
                size: "1rem"
            },
            labelList: {
                verticalGap: "0.5rem",
                horizontalGap: "1rem"
            }
        },
        multiselect: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledHoverBackground: "{form.field.filled.hover.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    fontSize: "{form.field.sm.font.size}",
                    paddingX: "{form.field.sm.padding.x}",
                    paddingY: "{form.field.sm.padding.y}"
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    paddingX: "{form.field.lg.padding.x}",
                    paddingY: "{form.field.lg.padding.y}"
                }
            },
            dropdown: {
                width: "2.5rem",
                color: "{form.field.icon.color}"
            },
            overlay: {
                background: "{overlay.select.background}",
                borderColor: "{overlay.select.border.color}",
                borderRadius: "{overlay.select.border.radius}",
                color: "{overlay.select.color}",
                shadow: "{overlay.select.shadow}"
            },
            list: {
                padding: "{list.padding}",
                gap: "{list.gap}",
                header: {
                    padding: "{list.header.padding}"
                }
            },
            option: {
                focusBackground: "{list.option.focus.background}",
                selectedBackground: "{list.option.selected.background}",
                selectedFocusBackground: "{list.option.selected.focus.background}",
                color: "{list.option.color}",
                focusColor: "{list.option.focus.color}",
                selectedColor: "{list.option.selected.color}",
                selectedFocusColor: "{list.option.selected.focus.color}",
                padding: "{list.option.padding}",
                borderRadius: "{list.option.border.radius}",
                gap: "0.75rem"
            },
            optionGroup: {
                background: "{list.option.group.background}",
                color: "{list.option.group.color}",
                fontWeight: "{list.option.group.font.weight}",
                padding: "{list.option.group.padding}"
            },
            chip: {
                borderRadius: "{border.radius.sm}"
            },
            clearIcon: {
                color: "{form.field.icon.color}"
            },
            emptyMessage: {
                padding: "{list.option.padding}"
            }
        },
        orderlist: {
            root: {
                gap: "1.125rem"
            },
            controls: {
                gap: "0.5rem"
            }
        },
        organizationchart: {
            root: {
                gutter: "0.75rem",
                transitionDuration: "{transition.duration}"
            },
            node: {
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                selectedBackground: "{highlight.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                selectedColor: "{highlight.color}",
                hoverColor: "{content.hover.color}",
                padding: "1rem 1.25rem",
                toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem",
                borderRadius: "{content.border.radius}"
            },
            nodeToggleButton: {
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                borderColor: "{content.border.color}",
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                size: "1.75rem",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            connector: {
                color: "{content.border.color}",
                borderRadius: "{content.border.radius}",
                height: "24px"
            }
        },
        overlaybadge: {
            root: {
                outline: {
                    width: "2px",
                    color: "{content.background}"
                }
            }
        },
        popover: {
            root: {
                background: "{overlay.popover.background}",
                borderColor: "{overlay.popover.border.color}",
                color: "{overlay.popover.color}",
                borderRadius: "{overlay.popover.border.radius}",
                shadow: "{overlay.popover.shadow}",
                gutter: "10px",
                arrowOffset: "1.25rem"
            },
            content: {
                padding: "{overlay.popover.padding}"
            }
        },
        paginator: {
            root: {
                padding: "0.5rem 1rem",
                gap: "0.25rem",
                borderRadius: "{content.border.radius}",
                background: "{content.background}",
                color: "{content.color}",
                transitionDuration: "{transition.duration}"
            },
            navButton: {
                background: "transparent",
                hoverBackground: "{slate.50}",
                selectedBackground: "{slate.100}",
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}",
                selectedColor: "{highlight.color}",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            currentPageReport: {
                color: "{text.muted.color}"
            },
            jumpToPageInput: {
                maxWidth: "2.5rem"
            }
        },
        password: {
            meter: {
                background: "{content.border.color}",
                borderRadius: "{content.border.radius}",
                height: ".75rem"
            },
            icon: {
                color: "{form.field.icon.color}"
            },
            overlay: {
                background: "{overlay.popover.background}",
                borderColor: "{overlay.popover.border.color}",
                borderRadius: "{overlay.popover.border.radius}",
                color: "{overlay.popover.color}",
                padding: "{overlay.popover.padding}",
                shadow: "{overlay.popover.shadow}"
            },
            content: {
                gap: "0.5rem"
            },
            colorScheme: {
                light: {
                    strength: {
                        weakBackground: "{red.500}",
                        mediumBackground: "{orange.500}",
                        strongBackground: "{green.500}"
                    }
                },
                dark: {
                    strength: {
                        weakBackground: "{red.400}",
                        mediumBackground: "{orange.400}",
                        strongBackground: "{green.400}"
                    }
                }
            }
        },
        panel: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                borderRadius: "{content.border.radius}"
            },
            header: {
                background: "transparent",
                color: "{text.color}",
                padding: "1.25rem",
                borderColor: "{content.border.color}",
                borderWidth: "0",
                borderRadius: "0"
            },
            toggleableHeader: {
                padding: "0.5rem 1.25rem"
            },
            title: {
                fontWeight: "600"
            },
            content: {
                padding: "0 1.25rem 1.25rem 1.25rem"
            },
            footer: {
                padding: "0 1.25rem 1.25rem 1.25rem"
            }
        },
        panelmenu: {
            root: {
                gap: "0",
                transitionDuration: "{transition.duration}"
            },
            panel: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                borderWidth: "0",
                color: "{content.color}",
                padding: "0",
                borderRadius: "0",
                first: {
                    borderWidth: "0",
                    topBorderRadius: "{content.border.radius}"
                },
                last: {
                    borderWidth: "0",
                    bottomBorderRadius: "{content.border.radius}"
                }
            },
            item: {
                focusBackground: "{navigation.item.focus.background}",
                color: "{navigation.item.color}",
                focusColor: "{navigation.item.focus.color}",
                gap: "0.5rem",
                padding: "{navigation.item.padding}",
                borderRadius: "{content.border.radius}",
                icon: {
                    color: "{navigation.item.icon.color}",
                    focusColor: "{navigation.item.icon.focus.color}"
                }
            },
            submenu: {
                indent: "1rem"
            },
            submenuIcon: {
                color: "{navigation.submenu.icon.color}",
                focusColor: "{navigation.submenu.icon.focus.color}"
            }
        },
        picklist: {
            root: {
                gap: "1.125rem"
            },
            controls: {
                gap: "0.5rem"
            }
        },
        progressbar: {
            root: {
                background: "{content.border.color}",
                borderRadius: "{content.border.radius}",
                height: "1rem"
            },
            value: {
                background: "{primary.color}"
            },
            label: {
                color: "{primary.contrast.color}",
                fontSize: "0.75rem",
                fontWeight: "600"
            }
        },
        progressspinner: {
            colorScheme: {
                light: {
                    root: {
                        "color.1": "{red.500}",
                        "color.2": "{blue.500}",
                        "color.3": "{green.500}",
                        "color.4": "{orange.500}"
                    }
                },
                dark: {
                    root: {
                        "color.1": "{red.400}",
                        "color.2": "{blue.400}",
                        "color.3": "{green.400}",
                        "color.4": "{orange.400}"
                    }
                }
            }
        },
        radiobutton: {
            root: {
                width: "20px",
                height: "20px",
                background: "{form.field.background}",
                checkedBackground: "{primary.contrast.color}",
                checkedHoverBackground: "{primary.contrast.color}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                checkedBorderColor: "{primary.color}",
                checkedHoverBorderColor: "{primary.color}",
                checkedFocusBorderColor: "{primary.color}",
                checkedDisabledBorderColor: "{form.field.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                shadow: "{form.field.shadow}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    width: "16px",
                    height: "16px"
                },
                lg: {
                    width: "24px",
                    height: "24px"
                }
            },
            icon: {
                size: "10px",
                checkedColor: "{primary.color}",
                checkedHoverColor: "{primary.color}",
                disabledColor: "{form.field.disabled.color}",
                sm: {
                    size: "8px"
                },
                lg: {
                    size: "12px"
                }
            }
        },
        rating: {
            root: {
                gap: "0.5rem",
                transitionDuration: "{transition.duration}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            },
            icon: {
                size: "1.125rem",
                color: "{text.muted.color}",
                hoverColor: "{primary.color}",
                activeColor: "{primary.color}"
            }
        },
        scrollpanel: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            bar: {
                size: "9px",
                borderRadius: "{border.radius.sm}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            colorScheme: {
                light: {
                    bar: {
                        background: "{surface.200}"
                    }
                },
                dark: {
                    bar: {
                        background: "{surface.700}"
                    }
                }
            }
        },
        select: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledHoverBackground: "{form.field.filled.hover.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    fontSize: "{form.field.sm.font.size}",
                    paddingX: "{form.field.sm.padding.x}",
                    paddingY: "{form.field.sm.padding.y}"
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    paddingX: "{form.field.lg.padding.x}",
                    paddingY: "{form.field.lg.padding.y}"
                }
            },
            dropdown: {
                width: "2.5rem",
                color: "{form.field.icon.color}"
            },
            overlay: {
                background: "{overlay.select.background}",
                borderColor: "{overlay.select.border.color}",
                borderRadius: "{overlay.select.border.radius}",
                color: "{overlay.select.color}",
                shadow: "{overlay.select.shadow}"
            },
            list: {
                padding: "{list.padding}",
                gap: "{list.gap}",
                header: {
                    padding: "{list.header.padding}"
                }
            },
            option: {
                focusBackground: "{list.option.focus.background}",
                selectedBackground: "{list.option.selected.background}",
                selectedFocusBackground: "{list.option.selected.focus.background}",
                color: "{list.option.color}",
                focusColor: "{list.option.focus.color}",
                selectedColor: "{list.option.selected.color}",
                selectedFocusColor: "{list.option.selected.focus.color}",
                padding: "{list.option.padding}",
                borderRadius: "{list.option.border.radius}"
            },
            optionGroup: {
                background: "{list.option.group.background}",
                color: "{list.option.group.color}",
                fontWeight: "{list.option.group.font.weight}",
                padding: "{list.option.group.padding}"
            },
            clearIcon: {
                color: "{form.field.icon.color}"
            },
            checkmark: {
                color: "{list.option.color}",
                gutterStart: "-0.375rem",
                gutterEnd: "0.375rem"
            },
            emptyMessage: {
                padding: "{list.option.padding}"
            }
        },
        selectbutton: {
            root: {
                borderRadius: "{form.field.border.radius}"
            },
            colorScheme: {
                light: {
                    root: {
                        invalidBorderColor: "{form.field.invalid.border.color}"
                    }
                },
                dark: {
                    root: {
                        invalidBorderColor: "{form.field.invalid.border.color}"
                    }
                }
            }
        },
        skeleton: {
            root: {
                borderRadius: "{content.border.radius}"
            },
            colorScheme: {
                light: {
                    root: {
                        background: "{surface.200}",
                        animationBackground: "rgba(255,255,255,0.4)"
                    }
                },
                dark: {
                    root: {
                        background: "rgba(255, 255, 255, 0.06)",
                        animationBackground: "rgba(255, 255, 255, 0.04)"
                    }
                }
            }
        },
        slider: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            track: {
                background: "{content.border.color}",
                borderRadius: "{border.radius.xs}",
                size: "2px"
            },
            range: {
                background: "{primary.color}"
            },
            handle: {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "{primary.color}",
                hoverBackground: "{primary.color}",
                content: {
                    borderRadius: "50%",
                    contentBackground: "{primary.color}",
                    hoverBackground: "{primary.color}",
                    width: "18px",
                    height: "18px",
                    shadow: "0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"
                },
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            }
        },
        speeddial: {
            root: {
                gap: "0.5rem",
                transitionDuration: "{transition.duration}"
            }
        },
        splitter: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                transitionDuration: "{transition.duration}"
            },
            gutter: {
                background: "{content.border.color}"
            },
            handle: {
                size: "24px",
                background: "transparent",
                borderRadius: "{content.border.radius}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            }
        },
        splitbutton: {
            root: {
                borderRadius: "{form.field.border.radius}",
                roundedBorderRadius: "2rem",
                raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
            }
        },
        stepper: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            separator: {
                background: "{content.border.color}",
                activeBackground: "{basic.brand}",
                margin: "0 0 0 1.625rem",
                size: "2px"
            },
            step: {
                padding: "0.5rem",
                gap: "1rem"
            },
            stepHeader: {
                padding: "0.75rem 1rem",
                borderRadius: "{content.border.radius}",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                },
                gap: "0.5rem"
            },
            stepTitle: {
                color: "{text.muted.color}",
                activeColor: "{text.color}",
                fontWeight: "500"
            },
            stepNumber: {
                activeBackground: "{surface.0}",
                activeBorderColor: "{basic.brand}",
                activeColor: "{surface.950}",
                size: "2rem",
                fontSize: "1.143rem",
                fontWeight: "500",
                borderRadius: "50%",
                shadow: "none"
            },
            steppanels: {
                padding: "0.875rem 0.5rem 1.125rem 0.5rem"
            },
            steppanel: {
                background: "{content.background}",
                color: "{content.color}",
                padding: "0",
                indent: "1rem"
            },
            colorScheme: {
                light: {
                    stepNumber: {
                        background: "{surface.0}",
                        borderColor: "{surface.200}",
                        color: "{surface.950}"
                    }
                },
                dark: {
                    stepNumber: {
                        background: "{surface.200}",
                        borderColor: "{surface.200}",
                        color: "{surface.900}"
                    }
                }
            }
        },
        steps: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            separator: {
                background: "{content.border.color}"
            },
            itemLink: {
                borderRadius: "{content.border.radius}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                },
                gap: "0.5rem"
            },
            itemLabel: {
                color: "{text.muted.color}",
                activeColor: "{surface.950}",
                fontWeight: "500"
            },
            itemNumber: {
                background: "{content.background}",
                activeBackground: "{content.background}",
                borderColor: "{content.border.color}",
                activeBorderColor: "{basic.brand}",
                color: "{text.muted.color}",
                activeColor: "{surface.700}",
                size: "2rem",
                fontSize: "1.143rem",
                fontWeight: "500",
                borderRadius: "50%",
                shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
            }
        },
        tabmenu: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            tablist: {
                borderWidth: "0 0 1px 0",
                background: "{content.background}",
                borderColor: "{content.border.color}"
            },
            item: {
                background: "transparent",
                hoverBackground: "transparent",
                activeBackground: "transparent",
                borderWidth: "0 0 1px 0",
                borderColor: "{content.border.color}",
                hoverBorderColor: "{content.border.color}",
                activeBorderColor: "{primary.color}",
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                activeColor: "{primary.color}",
                padding: "1rem 1.125rem",
                fontWeight: "600",
                margin: "0 0 -1px 0",
                gap: "0.5rem",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            itemIcon: {
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                activeColor: "{primary.color}"
            },
            activeBar: {
                height: "1px",
                bottom: "-1px",
                background: "{primary.color}"
            }
        },
        tabs: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            tablist: {
                borderWidth: "0 0 1px 0",
                background: "{content.background}",
                borderColor: "{content.border.color}"
            },
            tab: {
                background: "transparent",
                hoverBackground: "{content.hover.background}",
                activeBackground: "transparent",
                borderWidth: "0 0 1px 0",
                borderColor: "{content.border.color}",
                hoverBorderColor: "{content.border.color}",
                activeBorderColor: "{basic.brand}",
                color: "{gray.500}",
                hoverColor: "{text.color}",
                activeColor: "{surface.950}",
                padding: "1rem 1.25rem",
                fontWeight: "600",
                margin: "0 0 -1px 0",
                gap: "0.5rem",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            },
            tabpanel: {
                background: "{content.background}",
                color: "{content.color}",
                padding: "1.25rem 1.25rem 1.25rem 1.25rem",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            },
            navButton: {
                background: "{content.background}",
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                width: "3rem",
                shadow: "none",
                focusRing: {
                    width: "0",
                    style: "none",
                    color: "unset",
                    offset: "0",
                    shadow: "none"
                }
            },
            activeBar: {
                height: "2px",
                bottom: "-1px",
                background: "{basic.brand}"
            }
        },
        tabview: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            tabList: {
                background: "{content.background}",
                borderColor: "{content.border.color}"
            },
            tab: {
                borderColor: "{content.border.color}",
                activeBorderColor: "{primary.color}",
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                activeColor: "{primary.color}"
            },
            tabPanel: {
                background: "{content.background}",
                color: "{content.color}"
            },
            navButton: {
                background: "{content.background}",
                color: "{text.muted.color}",
                hoverColor: "{text.color}"
            },
            colorScheme: {
                light: {
                    navButton: {
                        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                },
                dark: {
                    navButton: {
                        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                }
            }
        },
        textarea: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledHoverBackground: "{form.field.filled.hover.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    fontSize: "{form.field.sm.font.size}",
                    paddingX: "{form.field.sm.padding.x}",
                    paddingY: "{form.field.sm.padding.y}"
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    paddingX: "{form.field.lg.padding.x}",
                    paddingY: "{form.field.lg.padding.y}"
                }
            }
        },
        tieredmenu: {
            root: {
                background: "{content.background}",
                borderColor: "{content.border.color}",
                color: "{content.color}",
                borderRadius: "{content.border.radius}",
                shadow: "{overlay.navigation.shadow}",
                transitionDuration: "{transition.duration}"
            },
            list: {
                padding: "{navigation.list.padding}",
                gap: "{navigation.list.gap}"
            },
            item: {
                focusBackground: "{navigation.item.focus.background}",
                activeBackground: "{navigation.item.active.background}",
                color: "{navigation.item.color}",
                focusColor: "{navigation.item.focus.color}",
                activeColor: "{navigation.item.active.color}",
                padding: "{navigation.item.padding}",
                borderRadius: "{navigation.item.border.radius}",
                gap: "{navigation.item.gap}",
                icon: {
                    color: "{navigation.item.icon.color}",
                    focusColor: "{navigation.item.icon.focus.color}",
                    activeColor: "{navigation.item.icon.active.color}"
                }
            },
            submenu: {
                mobileIndent: "1rem"
            },
            submenuIcon: {
                size: "{navigation.submenu.icon.size}",
                color: "{navigation.submenu.icon.color}",
                focusColor: "{navigation.submenu.icon.focus.color}",
                activeColor: "{navigation.submenu.icon.active.color}"
            },
            separator: {
                borderColor: "{content.border.color}"
            }
        },
        tag: {
            root: {
                fontSize: "0.875rem",
                fontWeight: "700",
                padding: "0.25rem 0.5rem",
                gap: "0.25rem",
                borderRadius: "{content.border.radius}",
                roundedBorderRadius: "{border.radius.xl}"
            },
            icon: {
                size: "0.75rem"
            },
            colorScheme: {
                light: {
                    primary: {
                        background: "{primary.color}",
                        color: "{primary.contrast.color}"
                    },
                    secondary: {
                        background: "{surface.100}",
                        color: "{surface.600}"
                    },
                    success: {
                        background: "{teal.100}",
                        color: "{teal.700}"
                    },
                    info: {
                        background: "{blue.100}",
                        color: "{blue.700}"
                    },
                    warn: {
                        background: "{orange.100}",
                        color: "{orange.900}"
                    },
                    danger: {
                        background: "{red.100}",
                        color: "{red.900}"
                    },
                    contrast: {
                        background: "{surface.950}",
                        color: "{surface.0}"
                    }
                },
                dark: {
                    primary: {
                        background: "{primary.color}",
                        color: "{primary.contrast.color}"
                    },
                    secondary: {
                        background: "{surface.800}",
                        color: "{surface.300}"
                    },
                    success: {
                        background: "{green.400}",
                        color: "{green.950}"
                    },
                    info: {
                        background: "{blue.400}",
                        color: "{blue.950}"
                    },
                    warn: {
                        background: "{orange.400}",
                        color: "{orange.950}"
                    },
                    danger: {
                        background: "{red.400}",
                        color: "{red.950}"
                    },
                    contrast: {
                        background: "{surface.0}",
                        color: "{surface.950}"
                    }
                }
            }
        },
        terminal: {
            root: {
                background: "{form.field.background}",
                borderColor: "{form.field.border.color}",
                color: "{form.field.color}",
                height: "18rem",
                padding: "{form.field.padding.y} {form.field.padding.x}",
                borderRadius: "{form.field.border.radius}"
            },
            prompt: {
                gap: "0.25rem"
            },
            commandResponse: {
                margin: "2px 0"
            }
        },
        timeline: {
            event: {
                minHeight: "5rem"
            },
            horizontal: {
                eventContent: {
                    padding: "1rem 0"
                }
            },
            vertical: {
                eventContent: {
                    padding: "0 1rem"
                }
            },
            eventMarker: {
                size: "1.5rem",
                borderRadius: "50%",
                borderWidth: "2px",
                background: "{primary.color}",
                content: {
                    borderRadius: "50%",
                    size: "0",
                    background: "{primary.color}",
                    insetShadow: "none"
                }
            },
            eventConnector: {
                color: "{content.border.color}",
                size: "2px"
            },
            colorScheme: {
                light: {
                    eventMarker: {
                        borderColor: "{surface.0}"
                    }
                },
                dark: {
                    eventMarker: {
                        borderColor: "{surface.900}"
                    }
                }
            }
        },
        togglebutton: {
            root: {
                padding: "6px 6px",
                borderRadius: "{form.field.border.radius}",
                gap: "0.5rem",
                fontWeight: "600",
                background: "{surface.100}",
                borderColor: "{surface.100}",
                hoverColor: "{form.field.color}",
                checkedColor: "{form.field.color}",
                checkedBorderColor: "{form.field.border.color}",
                disabledBackground: "{form.field.disabled.background}",
                disabledBorderColor: "{form.field.disabled.background}",
                disabledColor: "{form.field.disabled.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                focusRing: {
                    width: "0",
                    style: "none",
                    offset: "0",
                    color: "unset",
                    shadow: "none"
                },
                transitionDuration: "{form.field.transition.duration}"
            },
            icon: {
                color: "{text.muted.color}",
                hoverColor: "{text.muted.color}",
                checkedColor: "{text.muted.color}",
                disabledColor: "{form.field.disabled.color}"
            },
            content: {
                left: "0.25rem",
                top: "0.25rem",
                checkedBackground: "transparent",
                checkedShadow: "0 2px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                padding: "4px 9px",
                borderRadius: "{border.radius.sm}",
                sm: {
                    fontSize: "{fontSize.body.sm}",
                    padding: "2px 6px",
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    padding: "4px 9px",
                }
            },
            colorScheme: {
                light: {
                    root: {
                        hoverBackground: "{surface.200}",
                        checkedBackground: "{surface.100}",
                        color: "{surface.600}"
                    }
                },
                dark: {
                    root: {
                        hoverBackground: "{surface.800}",
                        checkedBackground: "{surface.700}"
                    }
                }
            }
        },
        toggleswitch: {
            root: {
                width: "2.5rem",
                height: "1.5rem",
                borderRadius: "35px",
                gap: ".25rem",
                shadow: "none",
                focusRing: {
                    width: "1px",
                    style: "solid",
                    color: "unset",
                    offset: "2px",
                    shadow: "none"
                },
                borderWidth: "1px",
                borderColor: "transparent",
                hoverBorderColor: "transparent",
                checkedBorderColor: "transparent",
                checkedHoverBorderColor: "transparent",
                invalidBorderColor: "{form.field.invalid.border.color}",
                transitionDuration: "{form.field.transition.duration}",
                slideDuration: "0.2s"
            },
            handle: {
                borderRadius: "50%",
                size: "1rem"
            },
            colorScheme: {
                light: {
                    root: {
                        background: "{surface.300}",
                        disabledBackground: "{surface.200}",
                        hoverBackground: "{surface.300}",
                        checkedBackground: "{primary.400}",
                        checkedHoverBackground: "{primary.500}"
                    },
                    handle: {
                        background: "{surface.0}",
                        disabledBackground: "{primary.contrast.color}",
                        hoverBackground: "{surface.0}",
                        checkedBackground: "{primary.contrast.color}",
                        checkedHoverBackground: "{primary.contrast.color}",
                        color: "{text.muted.color}",
                        hoverColor: "{text.color}",
                        checkedColor: "{primary.contrast.color}",
                        checkedHoverColor: "{primary.contrast.color}"
                    }
                },
                dark: {
                    root: {
                        background: "{surface.700}",
                        disabledBackground: "{surface.600}",
                        hoverBackground: "{surface.700}",
                        checkedBackground: "{primary.color}",
                        checkedHoverBackground: "{primary.color}"
                    },
                    handle: {
                        background: "{surface.400}",
                        disabledBackground: "{surface.500}",
                        hoverBackground: "{surface.300}",
                        checkedBackground: "{primary.200}",
                        checkedHoverBackground: "{primary.200}",
                        color: "{surface.800}",
                        hoverColor: "{surface.900}",
                        checkedColor: "{primary.contrast.color}",
                        checkedHoverColor: "{primary.contrast.color}"
                    }
                }
            }
        },
        tree: {
            root: {
                background: "{content.background}",
                color: "{content.color}",
                padding: "1rem",
                gap: "2px",
                indent: "2rem",
                transitionDuration: "{transition.duration}"
            },
            node: {
                padding: "0.5rem 0.75rem",
                borderRadius: "{form.field.border.radius}",
                hoverBackground: "{content.hover.background}",
                selectedBackground: "{highlight.background}",
                color: "{text.color}",
                hoverColor: "{text.hover.color}",
                selectedColor: "{highlight.color}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "-1px",
                    shadow: "{focus.ring.shadow}"
                },
                gap: "0.5rem"
            },
            nodeIcon: {
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}",
                selectedColor: "{highlight.color}"
            },
            nodeToggleButton: {
                borderRadius: "50%",
                size: "2rem",
                hoverBackground: "{content.hover.background}",
                selectedHoverBackground: "{content.background}",
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}",
                selectedHoverColor: "{primary.color}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            loadingIcon: {
                size: "2rem"
            },
            filter: {
                margin: "0 0 0.75rem 0"
            }
        },
        treeselect: {
            root: {
                background: "{form.field.background}",
                disabledBackground: "{form.field.disabled.background}",
                filledBackground: "{form.field.filled.background}",
                filledHoverBackground: "{form.field.filled.hover.background}",
                filledFocusBackground: "{form.field.filled.focus.background}",
                borderColor: "{form.field.border.color}",
                hoverBorderColor: "{form.field.hover.border.color}",
                focusBorderColor: "{form.field.focus.border.color}",
                invalidBorderColor: "{form.field.invalid.border.color}",
                color: "{form.field.color}",
                disabledColor: "{form.field.disabled.color}",
                placeholderColor: "{form.field.placeholder.color}",
                invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
                shadow: "{form.field.shadow}",
                paddingX: "{form.field.padding.x}",
                paddingY: "{form.field.padding.y}",
                borderRadius: "{form.field.border.radius}",
                focusRing: {
                    width: "{form.field.focus.ring.width}",
                    style: "{form.field.focus.ring.style}",
                    color: "{form.field.focus.ring.color}",
                    offset: "{form.field.focus.ring.offset}",
                    shadow: "{form.field.focus.ring.shadow}"
                },
                transitionDuration: "{form.field.transition.duration}",
                sm: {
                    fontSize: "{form.field.sm.font.size}",
                    paddingX: "{form.field.sm.padding.x}",
                    paddingY: "{form.field.sm.padding.y}"
                },
                lg: {
                    fontSize: "{form.field.lg.font.size}",
                    paddingX: "{form.field.lg.padding.x}",
                    paddingY: "{form.field.lg.padding.y}"
                }
            },
            dropdown: {
                width: "2.5rem",
                color: "{form.field.icon.color}"
            },
            overlay: {
                background: "{overlay.select.background}",
                borderColor: "{overlay.select.border.color}",
                borderRadius: "{overlay.select.border.radius}",
                color: "{overlay.select.color}",
                shadow: "{overlay.select.shadow}"
            },
            tree: {
                padding: "{list.padding}"
            },
            emptyMessage: {
                padding: "{list.option.padding}"
            },
            chip: {
                borderRadius: "{border.radius.sm}"
            },
            clearIcon: {
                color: "{form.field.icon.color}"
            }
        },
        treetable: {
            root: {
                transitionDuration: "{transition.duration}"
            },
            header: {
                background: "{content.background}",
                borderColor: "{treetable.border.color}",
                color: "{content.color}",
                borderWidth: "0 0 1px 0",
                padding: "0.75rem 1rem"
            },
            headerCell: {
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                selectedBackground: "{highlight.background}",
                borderColor: "{treetable.border.color}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                selectedColor: "{highlight.color}",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "-1px",
                    shadow: "{focus.ring.shadow}"
                }
            },
            columnTitle: {
                fontWeight: "600"
            },
            row: {
                background: "{content.background}",
                hoverBackground: "{content.hover.background}",
                selectedBackground: "{highlight.background}",
                color: "{content.color}",
                hoverColor: "{content.hover.color}",
                selectedColor: "{highlight.color}",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "-1px",
                    shadow: "{focus.ring.shadow}"
                }
            },
            bodyCell: {
                borderColor: "{treetable.border.color}",
                padding: "0.75rem 1rem",
                gap: "0.5rem"
            },
            footerCell: {
                background: "{content.background}",
                borderColor: "{treetable.border.color}",
                color: "{content.color}",
                padding: "0.75rem 1rem"
            },
            columnFooter: {
                fontWeight: "600"
            },
            footer: {
                background: "{content.background}",
                borderColor: "{treetable.border.color}",
                color: "{content.color}",
                borderWidth: "0 0 1px 0",
                padding: "0.75rem 1rem"
            },
            columnResizerWidth: "0.5rem",
            resizeIndicator: {
                width: "1px",
                color: "{primary.color}"
            },
            sortIcon: {
                color: "{text.muted.color}",
                hoverColor: "{text.hover.muted.color}",
                size: "0.875rem"
            },
            loadingIcon: {
                size: "2rem"
            },
            nodeToggleButton: {
                hoverBackground: "{content.hover.background}",
                selectedHoverBackground: "{content.background}",
                color: "{text.muted.color}",
                hoverColor: "{text.color}",
                selectedHoverColor: "{primary.color}",
                size: "1.75rem",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    color: "{focus.ring.color}",
                    offset: "{focus.ring.offset}",
                    shadow: "{focus.ring.shadow}"
                }
            },
            paginatorTop: {
                borderColor: "{content.border.color}",
                borderWidth: "0 0 1px 0"
            },
            paginatorBottom: {
                borderColor: "{content.border.color}",
                borderWidth: "0 0 1px 0"
            },
            colorScheme: {
                light: {
                    root: {
                        borderColor: "{content.border.color}"
                    },
                    bodyCell: {
                        selectedBorderColor: "{primary.100}"
                    }
                },
                dark: {
                    root: {
                        borderColor: "{surface.800}"
                    },
                    bodyCell: {
                        selectedBorderColor: "{primary.900}"
                    }
                }
            }
        },
        toast: {
            root: {
                width: "25rem",
                borderRadius: "{content.border.radius}",
                borderWidth: "0",
                transitionDuration: "{transition.duration}"
            },
            icon: {
                size: "1.25rem"
            },
            content: {
                padding: "{overlay.popover.padding}",
                gap: "0.5rem"
            },
            text: {
                gap: "0.5rem"
            },
            summary: {
                fontWeight: "500",
                fontSize: "1rem"
            },
            detail: {
                fontWeight: "500",
                fontSize: "0.875rem"
            },
            closeButton: {
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                focusRing: {
                    width: "{focus.ring.width}",
                    style: "{focus.ring.style}",
                    offset: "{focus.ring.offset}"
                }
            },
            closeIcon: {
                size: "1rem"
            },
            colorScheme: {
                light: {
                    blur: "0",
                    info: {
                        background: "{blue.50}",
                        borderColor: "{blue.200}",
                        color: "{blue.700}",
                        detailColor: "{surface.700}",
                        shadow: "0px 18px 28px 0px rgba(9, 30, 66, 0.15), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)",
                        closeButton: {
                            hoverBackground: "{blue.100}",
                            focusRing: {
                                color: "{blue.600}",
                                shadow: "none"
                            }
                        }
                    },
                    success: {
                        background: "{teal.50}",
                        borderColor: "{teal.200}",
                        color: "{teal.700}",
                        detailColor: "{surface.700}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "{teal.100}",
                            focusRing: {
                                color: "{teal.600}",
                                shadow: "none"
                            }
                        }
                    },
                    warn: {
                        background: "{orange.100}",
                        borderColor: "{orange.200}",
                        color: "{orange.900}",
                        detailColor: "{surface.700}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "{orange.100}",
                            focusRing: {
                                color: "{orange.600}",
                                shadow: "none"
                            }
                        }
                    },
                    error: {
                        background: "{red.50}",
                        borderColor: "{red.200}",
                        color: "{red.700}",
                        detailColor: "{surface.700}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "{red.100}",
                            focusRing: {
                                color: "{red.600}",
                                shadow: "none"
                            }
                        }
                    },
                    secondary: {
                        background: "{surface.100}",
                        borderColor: "{surface.200}",
                        color: "{surface.600}",
                        detailColor: "{surface.700}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "{surface.200}",
                            focusRing: {
                                color: "{surface.600}",
                                shadow: "none"
                            }
                        }
                    },
                    contrast: {
                        background: "{surface.900}",
                        borderColor: "{surface.950}",
                        color: "{surface.50}",
                        detailColor: "{surface.0}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "{surface.800}",
                            focusRing: {
                                color: "{surface.50}",
                                shadow: "none"
                            }
                        }
                    }
                },
                dark: {
                    blur: "10px",
                    info: {
                        background: "color-mix(in srgb, {blue.500}, transparent 36%)",
                        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                        color: "{surface.0}",
                        detailColor: "{blue.100}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{blue.500}",
                                shadow: "none"
                            }
                        }
                    },
                    success: {
                        background: "color-mix(in srgb, {green.500}, transparent 36%)",
                        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
                        color: "{surface.0}",
                        detailColor: "{green.100}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{green.500}",
                                shadow: "none"
                            }
                        }
                    },
                    warn: {
                        background: "color-mix(in srgb, {orange.500}, transparent 36%)",
                        borderColor: "color-mix(in srgb, {orange.700}, transparent 64%)",
                        color: "{surface.0}",
                        detailColor: "{orange.50}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{orange.500}",
                                shadow: "none"
                            }
                        }
                    },
                    error: {
                        background: "color-mix(in srgb, {red.500}, transparent 36%)",
                        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                        color: "{surface.0}",
                        detailColor: "{red.100}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "rgba(255, 255, 255, 0.05)",
                            focusRing: {
                                color: "{red.500}",
                                shadow: "none"
                            }
                        }
                    },
                    secondary: {
                        background: "{surface.800}",
                        borderColor: "{surface.700}",
                        color: "{surface.300}",
                        detailColor: "{surface.0}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "{surface.700}",
                            focusRing: {
                                color: "{surface.300}",
                                shadow: "none"
                            }
                        }
                    },
                    contrast: {
                        background: "{surface.0}",
                        borderColor: "{surface.100}",
                        color: "{surface.950}",
                        detailColor: "{surface.950}",
                        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                        closeButton: {
                            hoverBackground: "{surface.100}",
                            focusRing: {
                                color: "{surface.950}",
                                shadow: "none"
                            }
                        }
                    }
                }
            }
        },
        toolbar: {
            root: {
                color: "{content.color}",
                borderRadius: "{content.border.radius}",
                gap: "0.5rem",
                padding: "10.25px"
            },
            colorScheme: {
                light: {
                    root: {
                        background: "{surface.0}",
                        borderColor: "{surface.100}"
                    }
                },
                dark: {
                    root: {
                        root: {
                            background: "{surface.800}",
                            borderColor: "{surface.800}"
                        }
                    }
                }
            }
        },
        virtualscroller: {
            loader: {
                mask: {
                    background: "{content.background}",
                    color: "{text.muted.color}"
                },
                icon: {
                    size: "2rem"
                }
            }
        },
        tooltip: {
            root: {
                background: "{surface.600}",
                color: "{surface.0}",
                maxWidth: "12.5rem",
                gutter: "0.25rem",
                shadow: "{overlay.popover.shadow}",
                padding: "0.5rem 0.75rem",
                borderRadius: "{overlay.popover.border.radius}"
            }
        },
        ripple: {
            colorScheme: {
                light: {
                    root: {
                        background: "rgba(0,0,0,0.1)"
                    }
                },
                dark: {
                    root: {
                        background: "rgba(255,255,255,0.3)"
                    }
                }
            }
        }
    },
    // Below is to override core's styles that are interfering with PrimeNG
    css: ({dt}: any) => `
            html
            {
              font-size: ${dt('fontSize.body.base')} !important;
            }

            .p-component {
              input[type="color"],
              input[type="date"],
              input[type="datetime"],
              input[type="datetime-local"],
              input[type="email"],
              input[type="month"],
              input[type="number"],
              input[type="password"],
              input[type="range"],
              input[type="search"],
              input[type="tel"],
              input[type="text"],
              input[type="time"],
              input[type="url"],
              input[type="week"]{
                  padding: ${dt('form.field.padding.y')} ${dt('form.field.padding.x')} !important;
                  border-radius: ${dt('border.radius.md')} !important;
                  height: auto !important;
              }

              .p-iconfield .p-inputtext:not(:first-child) {
                padding-inline-start: calc((var(--p-form-field-padding-x) * 2) + var(--p-icon-size)) !important;
              }
            }
              
            /* undo PrimeNG's global change */
            * {
              -moz-box-sizing: revert;
              -webkit-box-sizing: revert;
              box-sizing: revert;
            }

            /* Fix AG Grid */
            :where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart),
            :where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart) :where([class^=ag-]) {
              box-sizing: border-box;
            }

            /* re-apply only for PrimeNG elements */
            .p-component {
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            `
});
