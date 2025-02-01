"use client"
import React from 'react';
import { Pagination } from 'uiw';

export default function PaginationComponent() {
  const [pageObj, setPageObj] = React.useState({
    current: 2,
    pageSize: 10
  });
  return (
    <div className='w-full flex justify-center'>
      <Pagination current={1} pageSize={10} total={70} divider />
    </div>
  )
}