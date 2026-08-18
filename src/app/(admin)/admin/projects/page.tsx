"use client";

import { useEffect, useMemo, useState } from "react";
import { AllCommunityModule, ColDef , RowHeightParams } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { getProjects  , deleteProject , deleteThumbNail} from "@/features/projects/service";
import Link from 'next/link';
import { Icon } from "@iconify/react";
import Image from 'next/image'
import { ICellRendererParams } from "ag-grid-community";


const ThumbnailImage = (props : any) => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* <Image
        src={props.data.thumb_nail}
        width={100}
        height={100}
        alt={props.data.title ?? "Project thumbnail"}
        className="w-[100px] h-[100px] object-cover"
      /> */}
      <img
          src={props.data.thumb_nail}
          alt="Thumbnail"
      />
    </div>
  );
};

export default function Page() {

  const deleteProjectAction = async (id : any , url : any) => {
      console.log("deleteProjectAction ID:" , id , url);
      try {
        await deleteProject(id);
        await deleteThumbNail(url);
  
        // Remove the deleted row from the UI
        setRowData((currentRows) =>
          currentRows.filter((row) => row.id !== id)
        );
      } catch (error) {
        console.error("Failed to delete project:", error);
      }
    };
  
  
  const deleteButtonComponent = (props : ICellRendererParams) => {
    return (
              <button onClick={() => deleteProjectAction(props.data.id , props.data.thumb_nail)} className="btn btn-xs btn-error">delete</button>
      );
  };

  const [rowData, setRowData] = useState<any[]>([]);


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
      headerName: "action",
      cellRenderer: deleteButtonComponent
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