"use client";

import { useEffect, useMemo, useState } from "react";
import { AllCommunityModule, ColDef } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { getSkills } from "@/features/skills/service";
import Link from 'next/link'


interface SkillRow {
  id: number;
  title: string | null;
  href: string | null;
  icon: string | null;
  type: number | null;
}

export default function Page() {
  const [rowData, setRowData] = useState<SkillRow[]>([]);

  const colDefs: ColDef<SkillRow>[] = [
    { field: "id" },
    { field: "title" },
    { field: "href" },
    { field: "icon" },
    { field: "type" },
  ];

  useEffect(() => {
    async function loadSkills() {
      const res = await getSkills();

      // console.log("Skills:", res);

      setRowData(res);
    }

    loadSkills();
  }, []);

  const autoSizeStrategy = useMemo(
    () => ({
      type: "fitGridWidth" as const,
      defaultMinWidth: 100,
      columnLimits: [
        {
          colId: "title",
          minWidth: 200,
        },
      ],
    }),
    []
  );

  return (
    <div>
      <Link href="/admin/skills/create" className="my-5 btn btn-success">
        Create
      </Link>

      <AgGridProvider modules={[AllCommunityModule]}>
        <div className="h-100">
          <AgGridReact<SkillRow>
            rowData={rowData}
            columnDefs={colDefs}
            pagination={true}
            autoSizeStrategy={autoSizeStrategy}
          />
        </div>
      </AgGridProvider>
    </div>
  );
}