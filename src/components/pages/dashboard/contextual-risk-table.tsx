"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { type FC, useState } from "react";

import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { columns } from "@/components/pages/dashboard/risk-table-columns";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type Asset } from "@/types/common-types";

export const ContextualRiskTable: FC<{ data: Array<Asset> }> = ({ data }) => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 2 });
  const table = useReactTable({
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
    columns,
    data,
  });

  return (
    <Card className="flex-1">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Separator />
      </CardContent>
      <CardFooter className="pb-2 pt-2 flex justify-center items-center gap-1 mb">
        <Button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="hover:bg-background"
          variant="ghost"
          size="sm"
        >
          <ChevronLeft style={{ color: "hsl(var(--muted-foreground))" }} />
        </Button>
        <div className="text-muted-foreground text-sm">
          Showing {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <Button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="hover:bg-background"
          variant="ghost"
          size="sm"
        >
          <ChevronRight style={{ color: "hsl(var(--muted-foreground))" }} />
        </Button>
      </CardFooter>
    </Card>
  );
};
