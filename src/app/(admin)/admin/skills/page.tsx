"use client";

import { useEffect, useMemo, useState } from "react";
import { AllCommunityModule, ColDef } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { getSkills , deleteSkill  } from "@/features/skills/service";
import Link from 'next/link';
import { Icon } from "@iconify/react";
import { ICellRendererParams } from "ag-grid-community";





const renderIcon = (props : ICellRendererParams) => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <Icon icon={props.data.icon} width={20} height={20}   />  
        </div>
    );
};

export default function Page() {
  const [rowData, setRowData] = useState<any[]>([]);

  const deleteSkillAction = async (id : any) => {
    console.log("deleteSkillAction ID:" , id);
    try {
      await deleteSkill(id);

      // Remove the deleted row from the UI
      setRowData((currentRows) =>
        currentRows.filter((row) => row.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete skill:", error);
    }
  };

  const CustomButtonComponent = (props : ICellRendererParams) => {
    return (
              <button onClick={() => deleteSkillAction(props.data.id)} className="btn btn-xs btn-error">delete</button>
      );
  };

  const colDefs = [
    { 
      field: "id" 
    },
    {
      field: "title" 
    },
    {
      field: "href" 
    },
    {
      headerName: "Icon",
      cellRenderer: renderIcon,
    },
    {
      field: "Type",
      valueGetter: (row : any)  => row.data.type.type + ' - ID: ' + row.data.type.id,
    },
    {
      headerName: "action",
      // valueGetter: row => row.data.id + row.data.title, 
      cellRenderer: CustomButtonComponent
    },
  ];

  useEffect(() => {
    async function loadSkills() {
      const res = await getSkills();

      console.log("Skills:", res);

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
          <AgGridReact
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