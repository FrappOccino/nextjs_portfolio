"use client";

import { useEffect, useMemo, useState } from "react";
import { AllCommunityModule, ColDef , RowHeightParams } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { getProjects   } from "@/features/projects/service";
import Link from 'next/link';
import { Icon } from "@iconify/react";
import Image from 'next/image'


const ThumbnailImage = (props) => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src={`/projects/${props.data.thumb_nail}`}
        width={100}
        height={100}
        alt={props.data.title ?? "Project thumbnail"}
        className="w-[100px] h-[100px] object-cover"
      />
    </div>
  );
};
export default function Page() {
  const [rowData, setRowData] = useState([]);


  const colDefs = [
    { 
      field: "id",
      headerName: "ID", 
    },
    {
      field: "title",
      headerName: "Title",
    },
    {
      field: "link",
      headerName: "Link",
    },
    {
      field: "description",
      headerName: "Description",
    },
    {
      field: "thumb_nail",
      headerName: "Thumbnail",
      cellRenderer: ThumbnailImage,
      autoHeight: true,
    },

    {
      field: "action",
    },
  ];

  useEffect(() => {
    async function loadSkills() {
      const res = await getProjects();

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
      <Link href="/admin/projects/create" className="my-5 btn btn-success">
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