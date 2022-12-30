#!/usr/bin/env -S deno run --allow-read --allow-write --allow-env
import { variants } from "npm:@catppuccin/palette@0.1.5";
import { stringify as stringifyTOML } from "https://deno.land/std@0.170.0/encoding/toml.ts";

Object.entries(variants).map(([name, palette]) => {
  const rainbow = [
    palette.red.hex,
    palette.peach.hex,
    palette.yellow.hex,
    palette.green.hex,
    palette.sapphire.hex,
    palette.mauve.hex,
  ];

  const theme = {
    colors: {
      table_header_color: palette.rosewater.hex,
      all_cpu_color: palette.rosewater.hex,
      avg_cpu_color: palette.maroon.hex,
      cpu_core_colors: rainbow,
      ram_color: palette.green.hex,
      swap_color: palette.peach.hex,
      rx_color: palette.green.hex,
      tx_color: palette.red.hex,
      widget_title_color: palette.flamingo.hex,
      border_color: palette.surface2.hex,
      highlighted_border_color: palette.pink.hex,
      text_color: palette.text.hex,
      graph_color: palette.subtext0.hex,
      cursor_color: palette.pink.hex,
      selected_text_color: palette.crust.hex,
      selected_bg_color: palette.mauve.hex,
      high_battery_color: palette.green.hex,
      medium_battery_color: palette.yellow.hex,
      low_battery_color: palette.red.hex,
      gpu_core_colors: rainbow.slice(4).concat(rainbow.slice(0, 4)),
      arc_color: palette.sky.hex,
    },
  };
  Deno.writeTextFileSync(`./themes/${name}.toml`, stringifyTOML(theme));
});
