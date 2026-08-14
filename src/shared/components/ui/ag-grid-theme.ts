import { themeQuartz } from "ag-grid-community";

export const agGridTheme = themeQuartz.withParams({
    backgroundColor: "oklch(var(--b1))",
    foregroundColor: "oklch(var(--bc))",

    headerBackgroundColor: "oklch(var(--b2))",
    headerTextColor: "oklch(var(--bc))",

    borderColor: "oklch(var(--b3))",

    oddRowBackgroundColor: "oklch(var(--b1))",

    rowHoverColor: "oklch(var(--b2))",

    selectedRowBackgroundColor: "oklch(var(--p) / 0.15)",

    accentColor: "oklch(var(--p))",
});